import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

await prisma.counter.create({
  data: { id: 'stupid' },
});
