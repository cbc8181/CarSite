// const {prisma} = require( "../lib/prisma").promises;
const { cars, images,featureData, carFeatures, mechanicals, safetyData, exteriorData, InteriorData, powerOptionsData, MediaData } = require("../lib/placeholder-data");
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function seedCarsData() {
  try {



    // await prisma.feature.createMany({
    //   data: 
    //     featureData,
    // });



    cars.map(async (car,index) => {
   


      await prisma.car.create({
        data: {
          ...car,
          // images: {
          //   create: images.filter((image) => image.carId === car.id).map((image) => ({url: image.url})) 
          // },
          // carFeatures: {
          //   create: carFeatures.filter((carFeature) => carFeature.carId === car.id).map((carFeature) => ({featureId: carFeature.featureId}))
          // },
          // mechanicals: {
          //   create : mechanicals.filter((mechanical) => mechanical.carId === car.id).map((mechanical) => ({feature: mechanical.feature}))
          // },
          // safeties: {
          //   create: safetyData.filter((safety) => safety.carId === car.id).map((safety) => ({feature: safety.feature}))
          // },
          // exteriors: {
          //   create: exteriorData.filter((exterior) => exterior.carId === car.id).map((exterior) => ({feature: exterior.feature}))
          // },
          // interiors: {
          //   create: InteriorData.filter((interior) => interior.carId === car.id).map((interior) => ({feature: interior.feature}))
          // },
          // powerOptions: {
          //   create: powerOptionsData.filter((power) => power.carId === car.id).map((power) => ({feature: power.feature}))
          // },
          // mediaNavs: {
          //   create: MediaData.filter((media) => media.carId === car.id).map((media) => ({feature: media.feature}))
          // }
        },
      });
    });
  } catch (error) {
    console.log(error);
  }
}


// this function is used to check if the car table is empty
async function isCarTableEmpty() {
  const cars = await prisma.car.findMany();
  return cars.length === 0;
}

// check if there exist any data in the car table, if not seed the data
async function main() {

  // const isCarTableEmpty = await isCarTableEmpty();
  // if (isCarTableEmpty){
  // const prisma = new PrismaClient()

  await seedCarsData();

  console.log("Cars data seeded successfully");
 
  // select all cars from the database with their images, mechanicals, safetyData, exteriorData, InteriorData, powerOptionsData, MediaData
  // const allCars = await prisma.car.findMany({
  //   include: {
  //     images:true,
  //     mechanicals: true,
  //     safeties: true,
  //     exteriors: true,
  //     interiors: true,
  //     powerOptions: true,
  //     mediaNavs: true
  //   },
  // });
  // console.dir(allCars, { depth: null });
}

main()
  .catch(async (e) => {
    await prisma.$disconnect();
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });



// async function seedCarsData() {
//   try {
//     // cars.map(async (car,index) => {
      
//       // const imageArr =  images.filter((image) => image.carId === index).map((image) => ({url: image.url}));
//       // const mechanicalArr =  mechanicals.filter((mechanical) => mechanical.carId === index).map((mechanical) => ({feature: mechanical.feature}));
//       // const safetyArr =  safetyData.filter((safety) => safety.carId === index).map((safety) => ({feature: safety.feature}));
//       // const exteriorArr =  exteriorData.filter((exterior) => exterior.carId === index).map((exterior) => ({feature: exterior.feature}));
//       // const interiorArr =  InteriorData.filter((interior) => interior.carId === index).map((interior) => ({feature: interior.feature}));
//       // const powerOptionsArr =  powerOptionsData.filter((power) => power.carId === index).map((power) => ({feature: power.feature}));
//       // const mediaNavArr =  MediaData.filter((media) => media.carId === index).map((media) => ({feature: media.feature}));

//       await prisma.car.createMany({
        
//         data: cars.map((car, index) => (
//           {
//             ...car,
//             images: {
//               create: images.filter((image) => image.carId === index).map((image) => ({url: image.url})) 
//             },
//             mechanicals: {
//               create : mechanicals.filter((mechanical) => mechanical.carId === index).map((mechanical) => ({feature: mechanical.feature}))
//             },
//             // safeties: {
//             //   create: safetyArr
//             // },
//             // exteriors: {
//             //   create: exteriorArr
//             // },
//             // interiors: {
//             //   create: interiorArr
//             // },
//             // powerOptions: {
//             //   create: powerOptionsArr
//             // },
//             // mediaNavs: {
//             //   create: mediaNavArr
//             // }
//           }))
//     });
//     // });
//   } catch (error) {
//     console.log(error);
//   }
// }