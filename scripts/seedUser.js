const { user } = require("../lib/placeholder-data");
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt');

const prisma = new PrismaClient()

async function seedUserData() {
    try {
        const hashedPassword = await bcrypt.hash(user.password, 10);

        console.log(user);

        await prisma.user.create({
            data: {
              ...user,
              password: hashedPassword
            }
        });
    }
    catch (error) {
        console.log(error);
    }
}

async function main() {
    await seedUserData();
    console.log("User data seeded successfully");
}

main()
  .catch(async (e) => {
    await prisma.$disconnect();
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

