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
    const { query: { id } } = req;

    if (!id) {
        res.status(404).json({ message: 'id is required' })
        return;
    }


    const imgs = await prisma.image.findMany({
        select :{
            id: true,
            carId: true,
            url: true,
            type: true
        },
        where: {
            carId: Number(id)
        }
    });

    res.status(200).json({ Image: imgs })
    
    return;
}