'use server'

import { z } from 'zod';
import { AuthError } from 'next-auth';
import { signIn } from '@/auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { error } from 'console';
import { list } from 'postcss';
import { Car } from '@prisma/client';
import { prisma } from "@/lib/prisma";
import { join } from 'path';
import { writeFile } from 'fs/promises';


export type State = {
    errors?: {
        name?: string[];
        email?: string[];
        phone?: string[];
        comment?: string[];
    };
    message?: string | null;
};

const FormSchema = z.object({
    name: z.string({
        invalid_type_error: 'Please select a customer.',
    }),
    email: z.string({
        message: 'Please enter an amount greater than $0.'
    }),
    comment: z.string(),
    phone: z.string(),
});

const CreatInventoryComment = FormSchema.omit({ phone: true });


// the return type of this function must compatible with the type of the state in the component
// because the return value will be passed to prevState, so the type of state must be same with the type of the return value
// without a redirect method, there is no return message to the client

export async function creatInventoryComment(prevState: State, formData: FormData) {

    console.log('formData', formData);

    const validatedFields = CreatInventoryComment.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        comment: formData.get('comment'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }

    try {
        // to do  sent comment to the database

        return {
            message: 'Invoice Created Successfully.',
        };
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
    }

}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {

    console.log('formData', formData);

    try {
        await signIn('credentials', formData);
        // SignIn success, Redirect to dashboard
        Response.redirect('/dashboard');
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}


const checkboxSchema = z.preprocess((val) => val === 'on', z.boolean());
const featureCount = 34;
const featureSchema = Array.from({ length: featureCount }, (_, i) => `${i + 1}`)
    .reduce((acc: { [key: string]: z.ZodType<any, any, any> }, feature) => {
        acc[feature] = checkboxSchema;
        return acc;
    }, {});

// this is the schema for the create card form
const CreateFormSchema = z.object({
    vin: z.string({
        invalid_type_error: 'Please enter a valid VIN.',
    }),
    year: z.coerce.number()
        .gte(1900, { message: 'Please enter a year after 1900.' })
        .lte(2100, { message: 'Please enter a year before 2100' }),
    price: z.coerce
        .number()
        .gt(0, { message: 'Please enter a price greater than $0.' }),
    listPrice: z.coerce
        .number()
        .gt(0, { message: 'Please enter a list price greater than $0.' }),
    make: z.string().refine((value) => value.trim() !== '', {
        message: 'Make could not by empty.',
    }),
    model: z.string().refine((value) => value.trim() !== '', {
        message: 'Model could not by empty.',
    }),
    mileage: z.coerce
        .number()
        .gte(0, { message: 'Please enter mileage than 0.' }),
    exteriorColor: z.string().refine((value) => value.trim() !== '', {
        message: 'Exterior color could not by empty.',
    }),
    interiorColor: z.string().refine((value) => value.trim() !== '', {
        message: 'Interior color could not by empty.',
    }),
    door: z.coerce
        .number()
        .gt(0, { message: 'Please enter a valid door number' }),
    bodyStyle: z.string({
        invalid_type_error: 'Please enter a valid body style.',
    }),
    fuelType: z.string().refine((value) => value.trim() !== '', {
        message: 'Fuel Type could not by empty.',
    }),
    transmission: z.string().refine((value) => value.trim() !== '', {
        message: 'Transmission could not by empty.',
    }),
    driveType: z.string().refine((value) => value.trim() !== '', {
        message: 'Drive Type could not by empty.',
    }),
    engineType: z.string().refine((value) => value.trim() !== '', {
        message: 'Engine Type could not by empty.',
    }),
    displacement: z.coerce
        .number()
        .gt(0, { message: 'Please enter a valid displacement' }),
    saleStatus: z.enum(['sold', 'onSale'], {
        invalid_type_error: 'Please select a sold status.',
    }),
    displayStatus: z.enum(['display', 'notDisplay'], {
        invalid_type_error: 'Please select a display status.',
    }),
    ...featureSchema,
});


export type CarEditFormState = {
    errors?: {
        VIN?: string[];
        year?: string[];
        price?: string[];
        make?: string[];
        model?: string[];
        mileage?: string[];
        exteriorColor?: string[];
        bodyStyle?: string[];
        interiorColor?: string[];
        door?: string[];
        fuelType?: string[];
        transmission?: string[];
        driveType?: string[];
        engineType?: string[];
        displacement?: string[];
        saleStatus?: string[];
        displayStatus?: string[];
        // [key: string]: string[] | undefined;
    },
    message?: string | null;
}

const CreateCar = CreateFormSchema.omit({});

type CreateFormSchemaType = z.infer<typeof CreateFormSchema>;

// export async function createCar(formData: FormData) {
export async function createCar(prevState: CarEditFormState, formData: FormData) {

    console.log('formData', formData);

    const validatedFields = CreateCar.safeParse({
        vin: formData.get('vin'),
        year: formData.get('year'),
        price: formData.get('price'),
        listPrice: formData.get('listprice'),
        make: formData.get('make'),
        model: formData.get('model'),
        mileage: formData.get('mileage'),
        exteriorColor: formData.get('exteriorColor'),
        bodyStyle: formData.get('bodyStyle'),
        interiorColor: formData.get('interiorColor'),
        door: formData.get('door'),
        fuelType: formData.get('fuelType'),
        transmission: formData.get('transmission'),
        driveType: formData.get('driveType'),
        engineType: formData.get('engineType'),
        displacement: formData.get('displacement'),
        saleStatus: formData.get('saleStatus'),
        displayStatus: formData.get('displayStatus'),
        ...Object.fromEntries(Array.from({ length: featureCount }, (_, i) => [`${i + 1}`, formData.get(`${i + 1}`)])),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }

    const dataObj: CreateFormSchemaType = validatedFields.data;

    // Prepare data for insertion into the database
    const { vin, model, year, make, price, door, exteriorColor,
        interiorColor, bodyStyle, fuelType, transmission, driveType,
        engineType, listPrice, mileage, displacement } = dataObj;

    const display = dataObj.displayStatus === 'display' ? true : false;
    const sold = validatedFields.data.saleStatus === 'sold' ? true : false;

    const featuresData = extractFeatures(dataObj);

    console.log('featuresData', featuresData);

    try {
        await prisma.car.create({
            data: {
                vin,
                model,
                year,
                make,
                price,
                door,
                exteriorColor,
                interiorColor,
                bodyStyle,
                fuelType,
                transmission,
                driveType,
                engineType,
                listPrice,
                mileage,
                display,
                sold,
                displacement,
                carFeatures: {
                    create: featuresData
                }
                //   images: {
                //     create: images.filter((image) => image.carId === car.id).map((image) => ({url: image.url})) 
                //   },
            }
        });
    }
    catch (error) {
        console.error('Database Error:', error);
        return {
            message: 'Database Error: Failed to Create Invoice.',
        };
    }

    return {
        message: 'Invoice Created Successfully.',
    };
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}

function extractFeatures(data: CreateFormSchemaType): { featureId: number }[] {
    const features: { featureId: number }[] = [];
    for (let i = 1; i <= featureCount; i++) {
        const key = i.toString() as keyof CreateFormSchemaType;
        if (data[key]) {
            features.push({ featureId: i });
        }
    }
    return features;
}


export async function updateInventory(prevState: CarEditFormState, formData: FormData) {

    const validatedFields = CreateCar.safeParse({
        vin: formData.get('vin'),
        year: formData.get('year'),
        price: formData.get('price'),
        listPrice: formData.get('listprice'),
        make: formData.get('make'),
        model: formData.get('model'),
        mileage: formData.get('mileage'),
        exteriorColor: formData.get('exteriorColor'),
        bodyStyle: formData.get('bodyStyle'),
        interiorColor: formData.get('interiorColor'),
        door: formData.get('door'),
        fuelType: formData.get('fuelType'),
        transmission: formData.get('transmission'),
        driveType: formData.get('driveType'),
        engineType: formData.get('engineType'),
        displacement: formData.get('displacement'),
        saleStatus: formData.get('saleStatus'),
        displayStatus: formData.get('displayStatus'),
        ...Object.fromEntries(Array.from({ length: featureCount }, (_, i) => [`${i + 1}`, formData.get(`${i + 1}`)])),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Invoice.',
        };
    }

    const dataObj: CreateFormSchemaType = validatedFields.data;

    // Prepare data for insertion into the database
    const { vin, model, year, make, price, door, exteriorColor,
        interiorColor, bodyStyle, fuelType, transmission, driveType,
        engineType, listPrice, mileage, displacement } = dataObj;

    const display = dataObj.displayStatus === 'display' ? true : false;
    const sold = validatedFields.data.saleStatus === 'sold' ? true : false;

    const featuresData = extractFeatures(dataObj);

    // console.log('featuresData', featuresData);

    try {

        await prisma.carFeature.deleteMany({
            where: {
                carId: Number(formData.get('id')),
            },
        });

        await prisma.car.update({
            data: {
                vin,
                model,
                year,
                make,
                price,
                door,
                exteriorColor,
                interiorColor,
                bodyStyle,
                fuelType,
                transmission,
                driveType,
                engineType,
                listPrice,
                mileage,
                display,
                sold,
                displacement,
                carFeatures: {
                    create: featuresData
                }
                //   images: {
                //     create: images.filter((image) => image.carId === car.id).map((image) => ({url: image.url})) 
                //   },
            },
            where: {
                id: Number(formData.get('id'))
            }
        });
    }
    catch (error) {
        console.error('Database Error:', error);
        return {
            message: 'Database Error: Failed to Update Invoice.',
        };
    }

    // return {
    //     message: 'Invoice Updated Successfully.',
    // };
    revalidatePath('/dashboard/inventory');
    redirect('/dashboard/inventory');
}

type uploadImgState = {
    status: string;
    message: string | null;
};

export async function uploadImage(prevState: uploadImgState, data: FormData){

    const MIME_TYPE_MAP = {
        'image/jpeg': 'jpg',
        'image/png': 'png',
        'image/gif': 'gif',
        'image/bmp': 'bmp',
        'image/webp': 'webp',
        'image/svg+xml': 'svg',
        'image/x-icon': 'ico',
        'image/tiff': 'tiff',
        'image/heif': 'heif',
        'image/heic': 'heic'
      };

    try {
        const files = data.getAll('file') as File[];
        const uploadFiles = [];

        for (const file of files) {
            const fileType = file.type as keyof typeof MIME_TYPE_MAP;
            const fileExtention = MIME_TYPE_MAP[fileType];

            if (!fileExtention) {
                throw new Error('Invalid file type');
            }

            const newImage = await prisma.image.create({
                data: {
                    carId: Number(data.get('carId')),
                    url: '',
                    type: fileExtention
                }
            });

            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const path = join(`./public/carImage/${newImage.carId}.${newImage.id}.${fileExtention}`);
            await writeFile(path, buffer);
            console.log(`open ${path} to see the uploaded file`);
        }

        // if(!file){
        //     throw new Error('No file uploaded');
        // }

        // const bytes = await file.arrayBuffer();
        // const buffer = Buffer.from(bytes);

        // const path = join('/public', 'tmp', file.name);
        // await writeFile(path, buffer);
        // console.log(`open ${path} to see the uploaded file`);
        return { status: 'success', message: 'Image uploaded successfully' };
    } catch (error) {
        return { status: 'error', message: 'Failed to upload image' };
    }
}