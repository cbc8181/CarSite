import { Decimal } from "@prisma/client/runtime/library";

export type User = {
    id: string;
    name: string | null;
    email: string;
    password: string;
};

export type CarsBaseInfo = {
    id: number;
    bodyStyle: string;
    make: string; 
    model: string;
    price: number;
    year: number;
    mileage: number;
    transmission: string;
    listPrice: number;
    engineType: string;
    // displacement: number;
    defaultImageId: number;
    defaultImage: {
        type: string;
    }
}

export type CarDetail = {
    id : number,
    vin : string,
    model : string,
    year : number,
    mileage : number,
    make    : string,
    price   : number,
    listPrice   : number | null,
    door    : number,
    sold    : boolean,
    display : boolean,
    exteriorColor   : string,
    interiorColor   : string,
    bodyStyle   : string,
    fuelType    : string,
    transmission    : string,
    driveType   : string,
    engineType  : string,
    displacement : Decimal,
    defaultImageId : number | null,
    images: {
        id: number,
        carId: number,
        type: string,
    }[],
    carFeatures: {
        feature: {
            id: number;
            name: string;
            category: string;
        };
    }[],
}

export type Features = {
    id: number,
    name: string,
    category: string,
    description: string | null | undefined,
}

export type CarImage = {
    id: number,
    carId: number,
    url?: string,
    type: string,
}

export type SearchParams = {
    catogray?: string,
    make?: string,
    model?: string,
    title?: string,
}


export type CarStartsByBody = {
    bodyStyle: string,
    price: number,
    number: number,
    imgUrl: string,
    href?: string,
}