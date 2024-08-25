---
sidebar_position: 3
---

# Input Validation

From backend, a rule to keep in mind is to never trust the frontend. For every request, we should validate the input. Although I like zod, `fastify-type-provider-zod` is a 3rd party library and I had problems using it. Perhaps I just need more time to figure it out, but I decided to use `@fastify/type-provider-typebox` since I felt that `@fastify/type-provider-json-schema-to-ts` was too verbose and `@fastify/type-provider-zod` was not working for me. The interface is very similar to zod, so it was easy to pick up.

## Adding Type Provider

After installing the package, we first update our server to use the type provider:

```typescript title="server.ts"
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import { Type } from '@sinclair/typebox';

import fastify from 'fastify';

const server = fastify().withTypeProvider<TypeBoxTypeProvider>();
```

## Defining Types

And in server.ts, the first thing that comes to my mind with input validation is the post request for creating a todo. We can define the types in a separate file and import them into our route:

```typescript title="schemas/todo.ts"
import { Type } from '@sinclair/typebox';

export const Todo = Type.Object({
  id: Type.Number(),
  description: Type.String(),
  completed: Type.Boolean(),
});
export type TTodo = Static<typeof Todo>;

export const Todos = Type.Array(Todo);

export const PostBody = Type.Pick(Todo, ['description']);
export type TPostBody = Static<typeof PostBody>;
```

## Using Types

And in our route, we can use the types:

```typescript title="routes/todo.ts"
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
    reply.code(201).send(request.body);
  }
);
```

Here I want to point out that it took me a while to figure out how to pass the types to the route to do the validation. By defining the schema this way, the request body and the reply body are validated, so if either is in the wrong format, the server will throw an error.

For the todo, the input is defined based on the todo schema, and the database would be what we are seeing in the next section.
