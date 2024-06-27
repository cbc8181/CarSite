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
        const { query: { id } } = req;
        if (!id) {
            res.status(400).json({ message: 'Imageid is required' })
            return;
        }
        const imgs = await prisma.image.delete({
            where: {
                id: Number(id)
            }
        });

        res.status(200).json({ message: 'Image deleted' })

    } catch (e) {
        // console.error('Error deleting image:', e);
        res.status(500).json({ message: 'Error deleting image' })
    }
    return;
}