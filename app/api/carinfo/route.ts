import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {

    const cars = await prisma.car.findMany({
        select :{
            id: true,
            make: true,
            model: true,
            bodyStyle: true,
            price: true,
            year: true,
            mileage: true,
            transmission: true,
            displacement: true,
            engineType: true,
            listPrice: true,
            defaultImageId: true,
            defaultImage:{
                select:{
                    type: true
                }
            }
        }
    });


    return NextResponse.json(cars);
    
}