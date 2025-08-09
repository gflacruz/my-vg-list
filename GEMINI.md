# GEMINI.md

## Project Overview

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It appears to be a web application for creating a video game list.

The project uses the following technologies:
- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API routes
- **Database:** NeonDB (PostgreSQL) with Drizzle ORM
- **Authentication:** `better-auth` library

The project is structured as a standard Next.js application with a `src` directory. The database schema is defined in `src/db/schema.ts`, and the authentication logic is in `src/lib/auth.ts`. The main page is `src/app/page.tsx`, which includes a simple user creation form.

## Building and Running

To get the project up and running, follow these steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the root of the project and add the following:
   ```
   DATABASE_URL="your_database_url"
   ```
   Replace `"your_database_url"` with your actual NeonDB connection string.

3. **Push database schema:**
   ```bash
   npm run db:push
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Other Commands

- **Build for production:**
  ```bash
  npm run build
  ```
- **Start production server:**
  ```bash
  npm run start
  ```
- **Lint the code:**
  ```bash
  npm run lint
  ```
- **Open Drizzle Studio:**
  ```bash
  npm run db:studio
  ```

## Development Conventions

- The project uses TypeScript and ESLint for code quality.
- Styling is done with Tailwind CSS.
- Database migrations are managed with `drizzle-kit`.
- Authentication is handled by the `better-auth` library.
- The project follows the standard Next.js project structure.
