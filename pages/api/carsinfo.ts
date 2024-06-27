import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "@/lib/prisma";

type ResponseData = {
  message: string
}
 
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {

//     const cars = await prisma.car.findMany({
//         select :{
//             make: true,
//             model: true,
//             bodyStyle: true,
//             price: true,
//         }
//     });

//     res.status(200).json({ message: cars.toString() })

// }

// pages/api/carsinfo.js

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // 在这里处理你的 API 请求逻辑
    res.status(200).json({ name: 'Car', brand: 'Brand', year: 2022 });
  }
  