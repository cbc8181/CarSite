import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { getCarStatsByBodyStyle } from "../lib/data";
import { CarStartsByBody } from "../lib/definitions";
import Link from "next/link";


export default async function CardCarousel() {

    let cars : CarStartsByBody[]= [
        { bodyStyle: "Sedan", price: 0, number: 0, imgUrl: "/sedan_drawing.png", href: "/inventory?catogray=Sedan" },
        { bodyStyle: "SUV", price: 0, number: 0, imgUrl: "/suv_drawing.jpeg" ,href: "/inventory?catogray=SUV"},
        { bodyStyle: "Van", price: 0, number: 0, imgUrl: "/van_drawing.png" ,href: "/inventory?catogray=Van"},
    ] 

    const result = await getCarStatsByBodyStyle();
    // access result find the bodyStyle and update the price and number in cars
    result.forEach((item) => {
        const index = cars.findIndex((car) => car.bodyStyle === item.bodyStyle);
        if (index !== -1) {
            cars[index].price = item.price;
            cars[index].number = item.number;
        }
    });

    // modify the return cars, 
    return (
        <>
            <Carousel className="">
                <CarouselContent className="pt-4 px-8">
                    {cars.map((car) => (
                        <CarouselItem className=" sm:basis-1/2  lg:basis-1/4">
                            <CardForCarousel 
                                catogray={car.bodyStyle}
                                price={car.price} 
                                number={car.number}
                                imgUrl={car.imgUrl}
                                link={car.href as string}  
                            >
                            </CardForCarousel>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* <CarouselPrevious className="lg:hidden" style={{position:"absolute", top:-18, left:"unset", right:40}}  />
                <CarouselNext className="lg:hidden" style={{position:"absolute", top:-18, right:0}}  /> */}
            </Carousel> 

        </>
    )
}

type CardForCarouselProps = {
    catogray: string
    price: number
    number: number
    imgUrl: string
    link: string
}

export function CardForCarousel({ 
    catogray, 
    price, 
    number, 
    imgUrl ,
    link
}: CardForCarouselProps
) {
    return (
        <div className=" p-2">
            <Link href={link} className="flex flex-col bg-white relative -top-4 lg:top-0 p-8 border-4 border-slate-100 hover:border-slate-800 rounded-md cursor-pointer">
                <div className=" flex items-center justify-center lg:justify-start w-44 h-32">
                    <Image
                        src={imgUrl}
                        alt="car catogray"
                        width={200}
                        height={200}
                    ></Image>
                </div>
                <div className="mt-6 relative flex-1 flex flex-col justify-between">
                    <span className="flex lg:w-2/3 text-lg xl:text-xl font-semibold mb-2 text-slate-500 group-hover:text-slate-800">
                        {catogray}
                    </span>
                    <span className="block lg:w-2/3 text-sm xl:text-base text-slate-500">
                        Starting at ${price}
                    </span>
                    {/* <Link href={link}> */}
                        <span className="px-4 py-3 block font-medium tracking-wider text-white bg-slate-600 group-hover:bg-slate-800 group-hover:shadow-lg mt-6 text-center rounded-sm pointer-all">
                            See ({number}) In Stock
                        </span>
                    {/* </Link> */}
                </div>
            </Link>
        </div>
    )
}