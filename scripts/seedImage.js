const { images } = require("../lib/placeholder-data");
const { PrismaClient } = require('@prisma/client')


const prisma = new PrismaClient()

async function seedCarImageData() {
    try {
        await prisma.image.createMany({
            data: 
                images,
        });
    }
    catch (error) {
        console.log(error);
    }
}

async function main() {
    await seedCarImageData();
    console.log("Car Image seeded successfully");
}

main()
  .catch(async (e) => {
    await prisma.$disconnect();
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

