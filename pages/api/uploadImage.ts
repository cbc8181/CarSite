import { CarImage } from '@/app/lib/definitions';
import cloudinary from '@/cloudinary';
import { prisma } from '@/lib/prisma';
import formidable from 'formidable';
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';

type ResponseData = {
    status?: string,
    url?: string,
}

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    if (req.method === 'POST') {

        try {
            const form = formidable({ multiples: true });
        
            form.parse(req, async (err, fields, files) => {
                if (err) {
                    return res.status(500).json({ status: 'Failed to parse form data' });
                }
        
                if (!files.image || files.image.length === 0) {
                    return res.status(400).json({ status: 'No image file uploaded' });
                }
        
                try {
                    const uploadPromises = (files.image as unknown as formidable.File[]).map(file => {
                        return cloudinary.uploader.upload(file.filepath, {
                            folder: 'car_image',
                        }).finally(() => {
                            // delete the file from the server
                            fs.unlinkSync(file.filepath);
                        });
                    });
        
                    const results = await Promise.all(uploadPromises);
        
                    const urls = results.map(result => result.secure_url);
        
                    const carId = Number(fields.car_id);

                    const createImagePromises = urls.map((url, index) => {
                        return prisma.image.create({
                            data: {
                                carId: carId,
                                url: url,
                                type: results[index].format
                            }
                        });
                    });

                    const images = await Promise.all(createImagePromises);

                    return res.status(200).json({ status: 'success'});
                } catch (error) {
                    console.error('Cloudinary upload error:', error);
                    return res.status(500).json({ status: 'Failed to upload images to Cloudinary' });
                }
            });
        } catch (error) {
            console.error('Error:', error);
            return res.status(500).json({ status: 'Failed to upload images' });
        }

    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ status: 'Method not allowed' });
    }
}