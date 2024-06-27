const { featureData } = require("../lib/placeholder-data");
const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient()

async function seedFeaturesData() {
    try {
        await prisma.feature.createMany({
            data: 
              featureData,
        });
    }
    catch (error) {
        console.log(error);
    }
}

async function main() {
    await seedFeaturesData();
    console.log("Features data seeded successfully");
}

main()
  .catch(async (e) => {
    await prisma.$disconnect();
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

