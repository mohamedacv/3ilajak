# 3ilajak — Clinic Management System

A full-stack clinic management system designed to manage patients, doctors, appointments, medical records, notifications, and clinic administration.

The system consists of an Admin Dashboard, Clinic Dashboard, and Laravel REST API.

---

## Project Overview

3ilajak is a clinic management platform developed as a graduation project.

The system provides different interfaces for system administrators and clinic staff, while a Laravel-based REST API handles authentication, business logic, database operations, and communication between the applications.

### Main Components

* **Admin Dashboard** — System administration and management.
* **Clinic Dashboard** — Clinic staff operations and patient management.
* **Backend API** — RESTful API built with Laravel.
* **Database** — MySQL.

---

## Architecture

```text
                         ┌──────────────────────┐
                         │       GitHub         │
                         │   Source Repository  │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │    GitHub Actions    │
                         │      CI / CD         │
                         └──────────┬───────────┘
                                    │
                     ┌──────────────┴──────────────┐
                     │                             │
                     ▼                             ▼
             ┌──────────────┐              ┌──────────────┐
             │ Admin Docker  │              │ Backend Docker│
             │    Image      │              │     Image     │
             └──────┬───────┘              └──────┬───────┘
                    │                             │
                    └──────────────┬──────────────┘
                                   ▼
                         ┌──────────────────────┐
                         │     Docker Hub       │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │      AWS EC2         │
                         │   Application Host   │
                         └──────────┬───────────┘
                                    │
                         ┌──────────┴──────────┐
                         │                     │
                         ▼                     ▼
                  ┌────────────┐        ┌────────────┐
                  │   Admin    │        │  Backend   │
                  │  Next.js   │───────▶│  Laravel   │
                  └────────────┘        └─────┬──────┘
                                              │
                                              ▼
                                        ┌────────────┐
                                        │   MySQL    │
                                        └────────────┘
```

---

## Technology Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* React Query

### Backend

* Laravel
* PHP 8.2
* Laravel Sanctum
* REST API
* MySQL

### DevOps & Cloud

* Git
* GitHub
* GitHub Actions
* Docker
* Docker Compose
* Docker Hub
* AWS EC2
* Linux

---

## Repository Structure

```text
3ilajak/
│
├── admin/                     # Admin dashboard
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── .github/workflows/
│       └── ci.yml
│
├── backend/                   # Laravel REST API
│   ├── app/
│   ├── database/
│   ├── routes/
│   ├── tests/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── composer.json
│   └── .github/workflows/
│       └── ci.yml
│
├── clinic/                    # Clinic dashboard
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
└── README.md
```

---

## Core Features

### Administration

* Admin authentication
* Clinic management
* Doctor management
* Patient management
* Clinic administrator management
* Appointment management
* Notifications
* Specialization management

### Clinic

* Clinic staff dashboard
* Patient management
* Doctor management
* Appointment management
* Medical information
* Reports
* Profile and settings

### Backend API

* Authentication and authorization
* RESTful API endpoints
* Patient management
* Doctor management
* Clinic management
* Appointment management
* Medical history
* Notifications
* Image uploads
* Database migrations and seeders

---

## CI/CD

The project uses GitHub Actions to automate the build and containerization process.

### Admin Pipeline

```text
Push / Pull Request
        │
        ▼
GitHub Actions
        │
        ▼
Install Dependencies
        │
        ▼
Next.js Build
        │
        ▼
Docker Build
        │
        ▼
Docker Hub
```

### Backend Pipeline

```text
Push / Pull Request
        │
        ▼
GitHub Actions
        │
        ├── Install PHP Dependencies
        ├── Install Node Dependencies
        ├── Build Application
        ├── Generate Laravel Application Key
        └── Run Tests
                │
                ▼
          Docker Build
                │
                ▼
           Docker Hub
```

Docker Hub images:

* `mohamed1511/3ilajak-admin`
* `mohamed1511/ilajak-backend`

---

## Docker

The application components are containerized using Docker.

Each major application component has its own Docker configuration:

```text
admin/
└── Dockerfile

backend/
├── Dockerfile
└── docker-compose.yml

clinic/
└── Dockerfile
```

This provides a consistent environment for development, testing, and deployment.

---

## AWS Deployment

The application was deployed to an AWS EC2 instance using Docker-based workloads.

The deployment involved:

* AWS EC2
* Linux
* Docker
* Docker Compose
* Docker Hub container images

The EC2 instance acts as the application host for the containerized services.

---

## My Role — DevOps / Cloud Engineer

As the DevOps / Cloud member of the project team, I was responsible for the infrastructure and deployment side of the application.

### Responsibilities

* Containerized application components using Docker.
* Created and maintained Dockerfiles.
* Configured Docker Compose for the backend environment.
* Implemented CI/CD workflows using GitHub Actions.
* Automated application builds and Docker image creation.
* Published Docker images to Docker Hub.
* Worked with Linux and cloud infrastructure.
* Deployed the application environment on AWS EC2.
* Integrated the development workflow with Git and GitHub.

---

## Environment Variables

Sensitive configuration values are not stored in the repository.

Environment configuration should be provided through environment variables or local `.env` files.

For the Laravel backend, use:

```text
backend/.env.example
```

as a template for the local environment configuration.

---

## Local Development

### Backend

```bash
cd backend

composer install
npm install

cp .env.example .env

php artisan key:generate

php artisan migrate

php artisan serve
```

### Admin

```bash
cd admin

npm install
npm run dev
```

### Clinic

```bash
cd clinic

npm install
npm run dev
```

---

## Project Status

The project includes:

* Full-stack application structure
* Admin dashboard
* Clinic dashboard
* Laravel REST API
* MySQL database integration
* Docker containerization
* GitHub Actions CI/CD
* Docker Hub image publishing
* AWS EC2 deployment

---

## Team

3ilajak was developed as a collaborative graduation project involving frontend, backend, mobile, UI/UX, and DevOps responsibilities.

### DevOps / Cloud

**Mohamed Abdalhamed**

Focused on:

* Cloud infrastructure
* Docker
* CI/CD
* GitHub Actions
* Docker Hub
* AWS EC2
* Linux

---

## License

This project was developed as an academic graduation project.
