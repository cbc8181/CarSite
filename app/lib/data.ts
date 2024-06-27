'use server';

import { prisma } from "@/lib/prisma";
import type { CarDetail, CarStartsByBody, CarsBaseInfo, SearchParams } from "./definitions"
import { countBodyStyles, countMakes, countModels } from "../lib/util";
import { unstable_noStore as noStore } from 'next/cache';
import { Feature } from "@prisma/client";

export async function getCarData() {

    console.log('fetch car data....................');

    // const carsCount: {
    //     models: { [key: string]: number },
    //     makes: { [key: string]: number  },
    //     bodyStyles: {[key: string]: number },
    //     minPrice: number,
    //     maxPrice: number,
    // } = {
    //     models: {},
    //     makes: {},
    //     bodyStyles: {},
    //     minPrice: Infinity,
    //     maxPrice: -Infinity,
    // }

    const cars = await prisma.car.findMany();

    // cars.forEach((car) => {
    //     carsCount.models[car.model] = carsCount.models[car.model] ? carsCount.models[car.model] + 1 : 1;
    //     carsCount.makes[car.make] = carsCount.makes[car.make] ? carsCount.makes[car.make] + 1 : 1;
    //     carsCount.bodyStyles[car.bodyStyle] = carsCount.bodyStyles[car.bodyStyle] ? carsCount.bodyStyles[car.bodyStyle] + 1 : 1;
    //     carsCount.minPrice = Math.min(carsCount.minPrice, car.price);
    //     carsCount.maxPrice = Math.max(carsCount.maxPrice, car.price);
    // })

    // return {cars, carsCount};

    return cars;

}

export async function getCarDetailById(carId: string) {

    const car = await prisma.car.findUnique({
        where: {
            id: Number(carId)
        },
        include: {
            images: {
                select: {
                    id: true,
                    carId: true,
                    type: true,
                }
            },
            carFeatures: {
                select: {
                    feature: {
                        select: {
                            id: true,
                            name: true,
                            category: true,
                        }
                    },
                },
            },
        }
    });
    return car as CarDetail;
}

const ITEMS_PER_PAGE = 6;

export async function fetchInventoryPages(query: string) {
    try {

        const whereConditions : any = [
            { model: { contains: query, mode: 'insensitive' } },
            { make: { contains: query, mode: 'insensitive' } },
            { bodyStyle: { contains: query, mode: 'insensitive' } },
            { exteriorColor: { contains: query, mode: 'insensitive' } },
            { interiorColor: { contains: query, mode: 'insensitive' } },
        ];
        
        if (query && !isNaN(Number(query))) {
            whereConditions.push({ year: { equals: parseInt(query) } });
        }
        
        const count = await prisma.car.count({
            where: {
                OR: whereConditions,
            },
        });
        
        const totalPages = Math.ceil(Number(count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of invoices.');
    }
}


export async function fetchFilteredInvoices(
    query: string,
    currentPage: number,
) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    try {
        console.log('Fetching invoices with query:');

        const whereConditions : any = [
            { model: { contains: query, mode: 'insensitive' } },
            { make: { contains: query, mode: 'insensitive' } },
            { bodyStyle: { contains: query, mode: 'insensitive' } },
            { exteriorColor: { contains: query, mode: 'insensitive' } },
            { interiorColor: { contains: query, mode: 'insensitive' } },
        ];
        
        if (query && !isNaN(Number(query))) {
            whereConditions.push({ year: { equals: parseInt(query) } });
        }

        const cars = await prisma.car.findMany({
            select: {
                id: true,
                year: true,
                make: true,
                model: true,
                mileage: true,
                price: true,
                sold: true,
                display: true,
                bodyStyle: true,
                defaultImageId: true,
                createdAt: true,
            },
            where: {
                OR: whereConditions,
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: ITEMS_PER_PAGE,
            skip: offset,
        });

        return cars;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch invoices.');
    }
}

export async function getFeatures() {

    try {
        const features = await prisma.feature.findMany({
            select: {
                id: true,
                name: true,
                category: true,
            }
        });

        return features as Feature[];
    }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch features.');
    }
}

export async function getCarBaseInfo(searchParams?: SearchParams) {
    
    try {

        const whereClause: { [key: string]: any } = {};

        if (searchParams?.make) {
            whereClause.make = searchParams.make;
        }

        if (searchParams?.model) {
            whereClause.model = searchParams.model;
        }

        if (searchParams?.catogray) {
            whereClause.bodyStyle = searchParams.catogray;
        }

        const orConditions: any[] = [];

        if (searchParams?.title) {
            orConditions.push(
                { make: { contains: searchParams.title, mode: 'insensitive' } },
                { model: { contains: searchParams.title, mode: 'insensitive' } },
                { bodyStyle: { contains: searchParams.title, mode: 'insensitive' } }
            );

            const year = parseInt(searchParams.title);
            if (!isNaN(year)) {
                orConditions.push({ year: { equals: year } });
            }
        }

        if (orConditions.length > 0) {
            whereClause.OR = orConditions;
        }


        const cars = await prisma.car.findMany({
            select: {
                id: true,
                make: true,
                model: true,
                bodyStyle: true,
                price: true,
                year: true,
                mileage: true,
                transmission: true,
                // displacement: true,
                engineType: true,
                listPrice: true,
                defaultImageId: true,
                defaultImage: {
                    select: {
                        type: true
                    }
                }
            },
            where: whereClause,
            orderBy: {
                updatedAt: 'desc' // Order by updatedAt in descending order
            }
        });

        return cars as CarsBaseInfo[];

    } catch (error) {
        console.log('Database Error:', error);
        return [];
    }
}

export async function getCarBodyInfo() {

    try{
        const cars = await prisma.car.findMany({
            select: {
                bodyStyle: true,
            },
        });

        return cars;
    }catch(error) {
        
        console.error('Database Error:', error);
        throw new Error('Failed to fetch car body info.');
    }
}

export async function getCarStatsByBodyStyle() {
    try {
        const result = await prisma.car.groupBy({
            by: ['bodyStyle'],
            _count: {
                _all: true,
            },
            _min: {
                price: true,
            },
        });

        const cars: CarStartsByBody[] = result.map((item) => {
            return {
                bodyStyle: item.bodyStyle,
                price: item._min.price || 0,
                number: item._count._all,
                imgUrl: '',
            };
        });

        return cars;

    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch car stats by body style.');
    }
}