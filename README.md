# Python Django Backend with React Frontend in Docker

This is a simple project that integrates a Django backend with a React frontend, all running in Docker containers to facilitate deployment and environment management. The project also includes PostgreSQL for the database and an REST API to list, add and delete users.

## Prerequisites
Make sure you have the following installed on your machine:

- Docker
- Docker Compose
- Node 
  
Clone the repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/svlog/django-react
cd django-react
```

Docker container setup and build Build the containers

Once you've cloned the project, you can build the containers for the backend and frontend using Docker Compose. Make sure you are in the project directory and run the following command:

```bash
docker-compose -f devcode.yml build
docker-compose -f devcode.yml up
```

Run database migrations

To run the Django migrations, you need to start the backend container first. Use the following command to start the Django container:

```bash
docker-compose -f devcode.yml run web python manage.py migrate
```

Create a superuser to access the Django admin panel, run:

```bash
docker-compose - devcode.yml run backend python manage.py createsuperuser
```
The Django server will be available at http://localhost:8000. Check if the backend admin is accessible

# React Frontend

To start the frontend, open a new terminal and run the following:

Install the dependencies using npm (make sure Node.js is installed)
```bash
cd frontend
npm install
npm run dev
```

The frontend server will be available at http://localhost:3000.
Project structure
Install the dependencies using npm (make sure Node.js is installed)

Key Points for Frontend (React with Vite, JSX, SWC)

   - React with Vite: Vite is used as the development server and build tool for React.
   - JSX and SWC: React is written in JSX, and SWC is used as a fast TypeScript/JavaScript compiler for the project.

This should give clear instructions to set up, install dependencies, and run the frontend part of the project.

# Contributing
Contributions are welcome! 
If you'd like to contribute, please open a pull request or an issue with your suggestions.
