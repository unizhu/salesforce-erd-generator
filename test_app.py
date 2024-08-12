#Author : Uni Zhu @ nttdata
import pytest
from app import app
from unittest.mock import patch, MagicMock
from simple_salesforce.exceptions import SalesforceAuthenticationFailed

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_login_success(client):
    mock_sf_login = MagicMock(return_value=('session_id', 'instance'))
    with patch('app.SalesforceLogin', mock_sf_login):
        response = client.post('/login', json={
            'instance_url': 'https://test.salesforce.com',
            'username': 'test@example.com',
            'password': 'password123',
            'security_token': 'token123'
        })
        assert response.status_code == 200
        assert response.json['success']
        assert 'instance_url' in response.json

def test_login_failure(client):
    mock_sf_login = MagicMock(side_effect=SalesforceAuthenticationFailed(0, 'Authentication failed'))
    with patch('app.SalesforceLogin', mock_sf_login):
        response = client.post('/login', json={
            'instance_url': 'https://test.salesforce.com',
            'username': 'test@example.com',
            'password': 'wrongpassword',
            'security_token': 'wrongtoken'
        })
        assert response.status_code == 200
        assert not response.json['success']
        assert 'error' in response.json

def test_get_objects_success(client):
    with client.session_transaction() as sess:
        sess['sf_instance_url'] = 'https://test.salesforce.com'
        sess['sf_session_id'] = 'test_session_id'
    
    mock_sf = MagicMock()
    mock_sf.describe.return_value = {"sobjects": [{"name": "Account"}, {"name": "Contact"}]}
    
    with patch('app.Salesforce', return_value=mock_sf):
        response = client.get('/get_objects')
        assert response.status_code == 200
        assert response.json == ['Account', 'Contact']

def test_get_objects_no_session(client):
    response = client.get('/get_objects')
    assert response.status_code == 401
    assert not response.json['success']
    assert 'error' in response.json

def test_generate_erd_success(client):
    with client.session_transaction() as sess:
        sess['sf_instance_url'] = 'https://test.salesforce.com'
        sess['sf_session_id'] = 'test_session_id'
    
    mock_sf = MagicMock()
    mock_account = MagicMock()
    mock_account.describe.return_value = {
        "fields": [
            {"name": "Id", "type": "id"},
            {"name": "Name", "type": "string"},
            {"name": "OwnerId", "type": "reference", "referenceTo": ["User"]}
        ]
    }
    
    # Set up the mock_sf object to return mock_account when accessed with 'Account'
    mock_sf.Account = mock_account
    
    with patch('app.Salesforce', return_value=mock_sf):
        response = client.post('/generate_erd', json={
            'objects': ['Account'],
            'annotations': [],
            'field_limit': 5
        })
        assert response.status_code == 200
        assert 'objects' in response.json
        assert 'relationships' in response.json
        
        # Additional assertions to verify the content of the response
        objects = response.json['objects']
        assert len(objects) == 1
        assert objects[0]['name'] == 'Account'
        assert len(objects[0]['fields']) == 3
        assert any(field['name'] == 'OwnerId' for field in objects[0]['fields'])
        
        relationships = response.json['relationships']
        assert len(relationships) == 1
        assert relationships[0]['from'] == 'Account'
        assert relationships[0]['to'] == 'User'
        assert relationships[0]['type'] == 'OwnerId'



def test_generate_erd_no_session(client):
    response = client.post('/generate_erd', json={
        'objects': ['Account'],
        'annotations': [],
        'field_limit': 5
    })
    assert response.status_code == 401
    assert not response.json['success']
    assert 'error' in response.json

def test_static_proxy(client):
    response = client.get('/index.html')
    assert response.status_code == 200

def test_index(client):
    response = client.get('/')
    assert response.status_code == 200
