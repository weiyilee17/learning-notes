---
sidebar_position: 2
---

# Creating Routes in Fastify

## Creating Routes

Just like in Express, we can define routes, but index.ts quickly gets messy.
To keep things clean, we can create a routes folder and create a file for each route.
Using todo as an example, we can define a route for todo with crud operations:

```typescript title="routes/todo.ts"
async function todoRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/', async (request, reply) => {
    return 'Hello World';
  });
}

export default todoRoutes;
```

And then we can register it in our server:

```typescript title="server.ts"
import fastify from 'fastify';
import todoRoutes from './routes/todo';

const server = fastify();
server.register(todoRoutes, { prefix: '/todos' });
```

For frontend to use the api in development, we can use `fastify-cors` to allow cross-origin requests:

```typescript title="server.ts"
import cors from '@fastify/cors';

server.register(cors, {
  origin: '*',
});
```
