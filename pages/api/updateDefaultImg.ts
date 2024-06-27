import { CarImage } from '@/app/lib/definitions';
import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next'


type ResponseData = {
    message?: string,
    Image?: CarImage[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    try {
        const { query: { carId, imgId } } = req;
        if (!carId || !imgId) {
            res.status(400).json({ message: 'ImageId And CarId is required'})
            return;
        }
        const car = await prisma.car.update({
            data: {
                defaultImageId: Number(imgId)
            },
            where: {
                id: Number(carId)
            }
        });

        res.status(200).json({ message: `Updated default image` })

    } catch (e) {
        // console.error('Error deleting image:', e);
        res.status(500).json({ message: 'Error deleting image' })
    }
    return;
}