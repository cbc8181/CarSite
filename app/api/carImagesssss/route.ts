import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
 
export async function GET(request: Request) {

    const carId = request;

    // const cars = await prisma.image.findMany({
    //     select :{
    //         id: true,
    //         carId: true,
    //         url: true
    //     },
    //     where: {
    //         // carId: request.query.get('id')
    //     }
    // });

    return NextResponse.json(carId);
    
}