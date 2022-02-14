import { mname } from './seed/mname';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const deleteMname = prisma.mname.deleteMany();
  const createMname = prisma.mname.createMany({
    data: mname,
  });
  await prisma.$transaction([deleteMname, createMname]);
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$connect();
  });
