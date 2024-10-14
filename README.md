
# LeetRank: Advanced Microservices-based Code Compilation and Execution Platform

This repository contains the code for an advanced code compilation and execution platform, inspired by platforms like Leetcode and Codeforces. The system is designed using a microservices architecture to ensure scalability, modularity, and ease of maintenance. It includes services for problem management, code execution, real-time interaction, and a user-friendly frontend.

## Services Overview

### 1. **LeeRank Problem Service**
- **Purpose**: Manages coding problems with CRUD operations, including complex test cases and code stubs.
- **Tech Stack**: JavaScript, Express, MongoDB.
- **Features**: 
  - RESTful endpoints for problem management.
  - Supports complex test case management.

### 2. **LeeRank Eval Service**
- **Purpose**: Executes submitted code securely in isolated Docker containers.
- **Tech Stack**: TypeScript, Express, Docker.
- **Languages Supported**: Java, Python, C++.
- **Features**:
  - Multi-language code execution.
  - Implements strategy and factory patterns for different environments.
  - Handles runtime exceptions (e.g., Time Limit Exceeded).

### 3. **LeeRank Submission Service**
- **Purpose**: Handles user submissions and dispatches requests to the Eval Service.
- **Tech Stack**: Fastify, Redis.
- **Features**:
  - Processes high-volume submissions efficiently.
  - Uses Redis as a message queue for asynchronous communication.

### 4. **LeeRank Socket Service**
- **Purpose**: Provides real-time updates for submissions and execution results.
- **Tech Stack**: Express, Socket.io, Redis.
- **Features**:
  - Manages real-time user notifications.
  - Stores user socket connections in Redis for efficient communication.

### 5. **LeeRank Frontend (Vite + React + TypeScript)**
- **Purpose**: User interface for writing and submitting code.
- **Tech Stack**: Vite, React, TypeScript, **react-ace**.
- **Features**:
  - Syntax-highlighted code editor with real-time feedback.
  - Multi-language support for code submissions.

## Prerequisites

### Redis Setup
Redis is used for message queues and managing real-time communication between services. Follow these steps to install and run Redis:

#### Install Redis:

- On macOS:  
```bash
brew install redis
```

- On Ubuntu/Debian:  
```bash
sudo apt update  
sudo apt install redis-server  
```

- On Windows:  
Download the Windows port of Redis or use Windows Subsystem for Linux (WSL) to run Redis.

#### Start Redis:
After installation, start the Redis service:

- On macOS:  
```bash
brew services start redis
```

- On Ubuntu:  
```bash
sudo systemctl start redis
```

#### Verify Redis is running:
```bash
redis-cli ping
```
If Redis is running, it will respond with `PONG`.

#### Stop Redis (if needed):
```bash
sudo systemctl stop redis
```

### Docker Desktop Setup
Docker Desktop is used to run isolated environments for code compilation and execution.

#### Ensure Docker Desktop is Running:
Docker Desktop should automatically start when your system boots. You can verify its status via the Docker icon in your system tray or taskbar.

#### Automatic Docker Image Management:
This project is configured to automatically pull and run Docker images required for the supported programming languages during code execution. No manual intervention is needed for pulling images or managing containers.

#### Verifying Docker Desktop:
To check that Docker Desktop is working properly, run the following command to verify the Docker service:

```bash
docker --version
```

#### Stopping Containers (if needed):
```bash
docker stop <container_name>
```

## Getting Started

### Install Dependencies

To install dependencies for all services:

```bash
npm install
```

To install dependencies for individual services:

```bash
# For LeeRank_Problem Service
cd LeeRank_Problem_Service
npm install

# For LeeRank_Eval Service
cd ../LeeRank_Eval_Service
npm install

# For LeeRank_Submission Service
cd ../LeeRank_Submission_Service
npm install

# For LeeRank_Socket_Service
cd ../LeeRank_Socket_Service
npm install

# For the frontend
cd ../LeeRank_frontend/client
npm install
```

### Start Services

Start each service in separate terminals:

```bash
# For LeeRank_Problem_Service
cd LeeRank_Problem_Service
npm start

# For LeeRank_Eval_Service
cd ../LeeRank_Eval_Service
npm start

# For LeeRank_Submission_Service
cd ../LeeRank_Submission_Service
npm run dev

# For LeeRank_Socket_Service
cd ../LeeRank_Socket_Service/src
node server.js

# For LeeRank_frontend
cd ../LeeRank_frontend/client
npm run dev
```

## Environment Variables

### LeeRank Problem Service

Create a `.env` file with the following content:

```env
PORT=3001
ATLAS_DB_URL="mongodb+srv://username:password@cluster0.mongodb.net/?retryWrites=true&w=majority"
LOG_DB_URL="mongodb+srv://username:password@cluster0.mongodb.net/?retryWrites=true&w=majority"
NODE_ENV="development"
```

### LeeRank Eval Service

```env
PORT=4000
REDIS_HOST='127.0.0.1'
REDIS_PORT=6379
```

### LeeRank Submission Service

```env
PORT=3003
REDIS_HOST='127.0.0.1'
REDIS_PORT=6379
ATLAS_DB_URL="mongodb+srv://username:password@cluster0.mongodb.net/?retryWrites=true&w=majority"
NODE_ENV="development"
PROBLEM_ADMIN_SERVICE_URL='http://localhost:3001'
```

### LeeRank Socket Service

```env
PORT=5000
REDIS_HOST='127.0.0.1'
REDIS_PORT=6379
```

Make sure to replace `username` and `password` in the database URLs with your actual MongoDB credentials.

## Conclusion

The **LeeRank Code Compilation and Execution Platform** offers a scalable and modular solution for real-time code execution, inspired by industry-leading platforms like Leetcode and Codeforces. By utilizing a microservices architecture, the system ensures smooth scalability, fault isolation, and maintainability. Whether handling complex test cases, processing high-volume submissions, or providing real-time feedback.


