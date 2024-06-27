import { CarDetail } from '@/app/lib/definitions';
import { prisma } from '@/lib/prisma';
import { Decimal } from '@prisma/client/runtime/library';
import { AwardIcon } from 'lucide-react';
import type { NextApiRequest, NextApiResponse } from 'next'


type ResponseData = {
    message?: string,
    carDetail?: CarDetail
}

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<ResponseData>
// ) {
//     const { query: { id } } = req;

//     if (!id) {
//         res.status(404).json({ message: 'id is required' })
//         return;
//     }

//     const car = await prisma.car.findUnique({
//         where: {
//             id: Number(id)
//         },
//         include: {
//             images: {
//                 select: {
//                     id: true,
//                     carId: true,
//                 }
//             },
//             mechanicals: {
//                 select: {
//                     feature: true,
//                 }
//             },
//             safeties: {
//                 select: {
//                     feature: true,
//                 }
//             },
//             exteriors: {
//                 select: {
//                     feature: true,
//                 }
//             },
//             interiors: {
//                 select: {
//                     feature: true,
//                 }
//             },
//             powerOptions: {
//                 select: {
//                     feature: true,
//                 }
//             },
//             mediaNavs: {
//                 select: {
//                     feature: true,
//                 }
//             },
//         }
//     });

//     if (!car) {
//         res.status(404).json({ message: 'Car not found' })
//         return;
//     }

//     res.status(200).json({ carDetail: car })
    
//     return;
// }