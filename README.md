# code-for-tomorrow-chat-app

## Overview

This repository contains the backend API for a chat application using Node.js, Express, TypeScript, and Prisma.

## Prerequisites

- Node.js 18+ installed
- npm installed
- PostgreSQL database available

## Basic Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file at the repository root with your database connection string and optional port:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
PORT=5000
```

3. Generate Prisma Client:

```bash
npm run prisma:generate
```

4. Apply Prisma migrations and sync the database:

```bash
npm run prisma:migrate
```

## Run the app

- Start in development mode with automatic restart:

```bash
npm run dev
```

- Build and start the production bundle:

```bash
npm run build
npm start
```

## Default behavior

The server runs on the port defined by `PORT` in `.env`, or `5000` if not set.

## Project structure

- `src/server.ts` — application entrypoint
- `src/index.ts` — Express app setup
- `src/v1/` — versioned API controllers, routes, services, and middleware
- `prisma/schema.prisma` — Prisma schema definitions
