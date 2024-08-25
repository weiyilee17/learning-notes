---
sidebar_position: 4
---

# Database

## Registering Database

```typescript title="server.ts"
import mysql from '@fastify/mysql';

server.register(mysql, {
  uri: process.env.DATABASE_URL,
});
```

## Connect to database and write queries

```typescript title="routes/todo.ts"
async function todoRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get(
    '/',
    {
      schema: {
        response: {
          200: Todos,
        },
      },
    },
    (request, reply) => {
      fastify.mysql.query('SELECT id, description, completed FROM todos', function onResult(err, result) {
        reply.send(err || result);
      });
    }
  );

  fastify.get<{ Params: TQuery }>(
    '/:id',
    {
      schema: {
        params: Query,
        response: {
          200: Todo,
        },
      },
    },
    (request, reply) => {
      fastify.mysql.query(
        'SELECT id, description, completed FROM todos WHERE id = ?',
        [request.params.id],
        function onResult(err, result) {
          reply.send(err || result);
        }
      );
    }
  );

  fastify.post<{ Body: TPostBody }>(
    '/',
    {
      schema: {
        body: PostBody,
        response: {
          201: PostBody,
        },
      },
    },
    (request, reply) => {
      fastify.mysql.execute(
        'INSERT INTO todos (description) VALUES (?)',
        [request.body.description],
        function onResult(err, result: MySQLResultSetHeader) {
          if (err) {
            reply.send(err);
          } else {
            const { insertId } = result;
            fastify.mysql.query(
              'SELECT id, description, completed FROM todos WHERE id = ?',
              [insertId],
              function onResult(err, result) {
                if (err) {
                  reply.send(err);
                } else if (Array.isArray(result)) {
                  reply.code(201).send(result[0]);
                }
              }
            );
          }
        }
      );
    }
  );

  fastify.patch<{ Body: TPatchBody; Params: TQuery }>(
    '/:id',
    {
      schema: {
        params: Query,
        body: PatchBody,
        response: {
          200: Todo,
        },
      },
    },
    (request, reply) => {
      const { description, completed } = request.body;
      const { id } = request.params;

      fastify.mysql.execute(
        'UPDATE todos SET description = ?, completed = ? WHERE id = ?',
        [description, completed, id],
        function onResult(err, result) {
          if (err) {
            reply.code(500).send(err);
          } else {
            fastify.mysql.query(
              'SELECT id, description, completed FROM todos WHERE id = ? LIMIT 1',
              [id],
              function onResult(err, result) {
                if (err) {
                  reply.send(err);
                } else if (!Array.isArray(result)) {
                  reply.send(err);
                } else if (result.length !== 1) {
                  reply.send(err);
                } else if (!result.length) {
                  reply.send(err);
                } else {
                  reply.send(result[1]);
                  console.log('result', result);
                }
              }
            );
          }
        }
      );
    }
  );
  fastify.delete<{ Params: TQuery }>(
    '/:id',
    {
      schema: {
        params: Query,
        response: {
          200: Success,
        },
      },
    },
    (request, reply) => {
      fastify.mysql.query('DELETE FROM todos WHERE id = ?', [request.params.id], function onResult(err, result) {
        reply.send(err || result);
      });
    }
  );
}
```

Um, the reason I used fastify is because it has typescript support, and for learning purpose, but I just think the official documentation has some room of improvement. It took me a while to figure out all this myself. And, the callback hell on post, if else check for patch id to meet typescript's check are ugly as hell. Not to mention digging into the code to find the type MySQLResultSetHeader from `@fastify/mysql`.

With limited time, since this works, I'll keep it like this. But if I have more time in the future, I'll research on how to use Prisma with Fastify. It's crazy how Prisma is not listed on fastify's official documentation, and only on Prisma's website.

I'm not sure if drizzle works with fastify, since there's no documentation on both sites. If it works, or I find some tutorial using it, I'll use drizzle instead of Prisma. But for now, I guess Prisma is good enough, if I even have time to refactor it.

TODO: review docker and dockerize it so the frontend can easily run it.
