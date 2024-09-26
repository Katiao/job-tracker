// eslint-disable-next-line
const { PrismaClient } = require("@prisma/client");
// eslint-disable-next-line
const data = require("./mock-data.json");
const prisma = new PrismaClient();

async function main() {
  const clerkId = "user_2mLcOJ2OKrpChvbO2gw5MUT9t40";
  const jobs = data.map((job) => {
    return {
      ...job,
      clerkId,
    };
  });
  for (const job of jobs) {
    await prisma.job.create({
      data: job,
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
