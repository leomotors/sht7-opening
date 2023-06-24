import { json, type RequestHandler } from '@sveltejs/kit';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GET = (async () => {
  const count = await prisma.counter.findUniqueOrThrow({
    where: { id: 'stupid' },
  });

  return json({ count: count.count });
}) satisfies RequestHandler;

export const PUT = (async () => {
  await prisma.counter.update({
    where: { id: 'stupid' },
    data: {
      count: {
        increment: 1,
      },
    },
  });

  return json({ ok: true });
}) satisfies RequestHandler;
