const { carFeatures } = require("../lib/placeholder-data");
const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient()

async function seedCarFeaturesData() {
    try {
        await prisma.carFeature.createMany({
            data: 
                carFeatures,
        });
    }
    catch (error) {
        console.log(error);
    }
}

async function main() {
    await seedCarFeaturesData();
    console.log("Car Features data seeded successfully");
}

main()
  .catch(async (e) => {
    await prisma.$disconnect();
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

