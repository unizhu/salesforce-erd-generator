# import os
# import redis
# from rq import Worker, Queue, Connection
# import time

# listen = ['default']
# redis_url = os.getenv('REDIS_URL', 'redis://172.24.248.43:6379')

# def get_redis_connection(url, retries=5):
#     for _ in range(retries):
#         try:
#             conn = redis.from_url(url)
#             conn.ping()  # Test the connection
#             return conn
#         except redis.ConnectionError as e:
#             print(f"Redis connection error: {e}")
#             time.sleep(2)
#     raise Exception("Could not connect to Redis after several retries")

# conn = get_redis_connection(redis_url)

# if __name__ == '__main__':
#     with Connection(conn):
#         worker = Worker(list(map(Queue, listen)))
#         worker.work()

import os
import random
from flask import Flask, request, jsonify, session, send_from_directory
from flask_cors import CORS
from simple_salesforce import Salesforce, SalesforceLogin, SalesforceAuthenticationFailed

app = Flask(__name__, static_folder='frontend/build')
CORS(app, supports_credentials=True)
app.secret_key = os.urandom(24)

SF_VERSION = '60.0'

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    instance_url = data['instance_url']
    username = data['username']
    password = data['password']
    security_token = data.get('security_token', '')  # Optional

    try:
        if instance_url.startswith("https://"):
            instance_url = instance_url.replace("https://", "")
            
        if instance_url.endswith(".salesforce.com"):
            instance_url = instance_url.replace(".salesforce.com", "")
    
        session_id, instance = SalesforceLogin(
                                    username=username,
                                    password=password,
                                    security_token=security_token,
                                    domain=instance_url,
                                    sf_version=SF_VERSION
                                )
        session['sf_instance_url'] = 'https://' + instance
        session['sf_session_id'] = session_id
        return jsonify({"success": True, "instance_url": session['sf_instance_url']})
    except SalesforceAuthenticationFailed as e:
        return jsonify({"success": False, "error": "Authentication failed", "message": str(e)})

@app.route('/get_objects', methods=['GET'])
def get_objects():
    instance_url = session.get('sf_instance_url')
    session_id = session.get('sf_session_id')
    if not instance_url or not session_id:
        return jsonify({"success": False, "error": "Session expired or not authenticated"}), 401

    try:
        sf = Salesforce(instance_url=instance_url, session_id=session_id, version=SF_VERSION)
        objects = sf.describe()["sobjects"]
        return jsonify([obj['name'] for obj in objects])
    except SalesforceAuthenticationFailed as e:
        return jsonify({"success": False, "error": "Salesforce authentication failed", "message": str(e)}), 401
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/generate_erd', methods=['POST'])
def generate_erd():
    data = request.json
    objects = data['objects']
    annotations = data['annotations']
    instance_url = session.get('sf_instance_url')
    session_id = session.get('sf_session_id')
    if not instance_url or not session_id:
        return jsonify({"success": False, "error": "Session expired or not authenticated"}), 401

    try:
        sf = Salesforce(instance_url=instance_url, session_id=session_id, version=SF_VERSION)
        erd_data = {
            "objects": [],
            "relationships": [],
            "annotations": annotations
        }

        for obj in objects:
            obj_desc = sf.__getattr__(obj).describe()
            fields = obj_desc["fields"]
            relationship_fields = [field for field in fields if field['type'] == 'reference']
            non_relationship_fields = [field for field in fields if field['type'] != 'reference']
            random_fields = random.sample(non_relationship_fields, min(len(non_relationship_fields), data.get('field_limit', 5)))
            selected_fields = relationship_fields + random_fields

            erd_data["objects"].append({
                "name": obj,
                "fields": [{"name": field['name'], "type": field['type'], "referenceTo": field.get('referenceTo', [])} for field in selected_fields]
            })

            for field in relationship_fields:
                for ref in field.get('referenceTo', []):
                    erd_data["relationships"].append({
                        "from": obj,
                        "to": ref,
                        "type": field['name']
                    })

        return jsonify(erd_data)
    except SalesforceAuthenticationFailed as e:
        return jsonify({"success": False, "error": "Salesforce authentication failed", "message": str(e)}), 401
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.route('/<path:path>', methods=['GET'])
def static_proxy(path):
    return send_from_directory(app.static_folder, path)

@app.route('/', methods=['GET'])
def index():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True, port=8082)
