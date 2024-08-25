---
sidebar_position: 1
---

# Setup

## Installing Fastify

To get started with Fastify, you'll need to install it in your project. Make sure you have Node.js installed, then follow these steps:

1. Create a new directory for your project and navigate to it:

   ```bash
   mkdir my-fastify-project
   cd my-fastify-project
   ```

2. Initialize a new Node.js project:

   ```bash npm2yarn
   npm init -y
   ```

3. Install Fastify and TypeScript dependencies:

   ```bash npm2yarn
   npm install fastify
   npm install -D typescript @types/node
   ```

4. Initialize TypeScript configuration:

   ```bash npm2yarn
   npx tsc --init
   ```

## Creating a Basic Fastify Server

Once Fastify is installed, you can create a basic server. Create a new file called `server.ts` and add the following code:

```typescript title="server.ts"
import fastify, { FastifyInstance } from 'fastify';

const server: FastifyInstance = fastify({ logger: true });

// Declare a route
server.get('/', async (request, reply) => {
  return { hello: 'world' };
});

// Run the server!
server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
```

## Running Your Fastify Server

To run your server in development mode with automatic reloading, follow these steps:

1. Install ts-node as a dev dependency:

   ```bash npm2yarn
   npm install -D ts-node
   ```

2. Add the following script to your `package.json`:

   ```json
   "scripts": {
     "dev": "node --env-file=.env --watch -r ts-node/register src/index.ts"
   }
   ```

3. Run your server using the dev script:

   ```bash npm2yarn
   npm run dev
   ```

This command will start your Fastify server using ts-node, which allows you to run TypeScript files directly without compiling them first. It also enables automatic reloading when files change and loads environment variables from a `.env` file.

Your Fastify server should now be running on `http://localhost:8080` (or the port specified in your environment variables).

## Production

For production, you'll want to compile your TypeScript code to JavaScript and run the compiled version:

1. Add a build script to your `package.json`:

   ```json
   "scripts": {
     "dev": "node --env-file=.env --watch -r ts-node/register src/index.ts",
     "build": "tsc"
   }
   ```

2. Compile your TypeScript code:

   ```bash npm2yarn
   npm run build
   ```

3. Run the compiled JavaScript:

   ```bash
   node dist/index.js
   ```

This approach uses the `tsc` command through the `build` script, which is a more standard way of compiling TypeScript in Node.js projects. It also makes it easier to run the build process, especially if you need to add more steps to it in the future.

For more detailed information, check out the [official Fastify documentation](https://www.fastify.io/docs/latest/).
