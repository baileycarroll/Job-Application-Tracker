import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const applications = [];
  for (let i = 1; i <= 50; i++) {
    applications.push({
      name: `Sample Position ${i}`,
      company: `Company ${i}`,
      link: `https://company${i}.com/apply`,
      // Generate a random date in 2023 for demonstration:
      applied: new Date(
        2023,
        Math.floor(Math.random() * 12), // Month (0-11)
        Math.floor(Math.random() * 28) + 1 // Day (1-28)
      ),
      // Randomize status among a few common choices:
      status: ["Pending", "Interview", "Rejected", "Accepted"][
        Math.floor(Math.random() * 4)
      ],
    });
  }

  await prisma.application.createMany({
    data: applications,
  });
  await prisma.user.create({
    data: {
      name: "Doxy LoreKeeper",
      email: "doxy@someemailaddress.com",
    },
  });
}

main()
  .then(async () => {
    console.log("Seeded database successfully.");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });
