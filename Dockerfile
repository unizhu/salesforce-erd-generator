# Base image for Node.js
FROM node:20 as build

# Set working directory
WORKDIR /app

# Copy frontend files
COPY frontend/package*.json ./frontend/

# Install Node.js dependencies
RUN cd frontend && npm install

# Build the frontend
COPY frontend/ ./frontend/
RUN cd frontend && npm run build

# Base image for Python
FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Copy backend files
COPY requirements.txt .
COPY dev-requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt && pip install --no-cache-dir -r dev-requirements.txt

# Copy the application code
COPY . .

# Copy the built frontend from the Node.js build stage
COPY --from=build /app/frontend/build ./frontend/build

# Expose the port
EXPOSE 8082

# Command to run the Flask application
CMD ["python", "app.py"]
