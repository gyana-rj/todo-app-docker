# Full Stack Todo App (Turborepo + Docker + AWS)

## Overview

A full-stack monorepo built using Turborepo, featuring:

 - Next.js Frontend
 - Node.js HTTP Backend
 - WebSocket Server
 - PostgreSQL Database
 - Docker Containerization
 - AWS EC2 Deployment
 - GitHub Actions CI/CD

---

## Architecture

### Apps

 - apps/web → Next.js Frontend
 - apps/backend → HTTP Backend API
 - apps/ws → WebSocket Server

### Packages

 - packages/db → Prisma Schema & Database Client
 - packages/ui → Shared UI Components
 - packages/eslint-config → Shared ESLint Configurations
 - packages/typescript-config → Shared TypeScript Configurations

---

## Local Development (Docker Compose)

### Start the Stack

```bash
docker compose up --build
```

### Access Services

Frontend:
http://localhost:3000

Backend:
http://localhost:8080

WebSocket:
ws://localhost:8081

PostgreSQL:
localhost:5432

### Stop the Stack

```bash
docker compose down
```

---

## CI/CD Pipeline

Push to the main branch:

1. GitHub Actions Trigger
2. Docker Image Build
3. Push Image to Docker Hub
4. SSH into AWS EC2
5. Pull Latest Image
6. Restart Containers

---

## Smart Deployments

### Backend Workflow

Triggers when:

 - apps/backend changes
 - packages changes

Workflow:
deploy_backend.yml

### WebSocket Workflow

Triggers when:

 - apps/ws changes
 - packages changes

Workflow:
deploy_ws.yml

### Frontend Workflow

Triggers when:

 - apps/web changes
 - packages changes

Workflow:
deploy_frontend.yml

---

## Required GitHub Secrets

 - DOCKERHUB_USERNAME
 - DOCKERHUB_TOKEN
 - DATABASE_URL
 - SSH_HOST
 - SSH_USERNAME
 - SSH_PRIVATE_KEY

---

## Turborepo Commands

### Install Dependencies

```bash
bun install
```

### Run All Apps

```bash
bun run dev
```

### Run Specific App

```bash
bun run dev --filter=web
```

### Build Everything

```bash
bun run build
```

---

## Tech Stack

Frontend:

 - Next.js
 - React
 - TypeScript

Backend:

 - Node.js
 - Express

Database:

 - PostgreSQL
 - Prisma ORM

Infrastructure:

 - Docker
 - Docker Compose
 - AWS EC2
 - GitHub Actions

Package Manager:

 - Bun

Monorepo:

 - Turborepo
