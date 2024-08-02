import { CarsBaseInfo } from "@/app/lib/definitions";
import Image from "next/image";
import TagSvg from "../../../public/tag.svg";
import { getCarImg } from "@/app/lib/data";

export default async function CarCard({ car }: { car: CarsBaseInfo }) {
   
    // get the default image of the car
    const imgUrl  = await getCarImg(car.id);

    return (
        <div className=" bg-white transition duration-200 shadow-sm border-slate-200 flex flex-col text-slate-800">
            <div className=" w-full">
                <a href={`/inventory/${car.year}-${car.make}-${car.model}/${car.id}`} className=" flex flex-col h-full no-underline hover:no-underline focus:no-underline">
                    <div className=" aspect-w-4 aspect-h-3 border-b border-slate-100 relative">
                        <Image
                            // src = { car.defaultImageId ? `/carImage/${car.id}.${car.defaultImageId}.${car.defaultImage.type}` : '/default.jpg'}
                            // src = {imgUrl || imgUrl !== 'null' ? imgUrl : '/default.jpg'}
                            src={imgUrl === 'null' || !imgUrl ? '/default.jpg' : imgUrl}
                            alt= {`${car.id} default image`}
                            layout="fill"
                        ></Image>
                    </div>
                    <div className=" relative flex-1 flex flex-col">
                        <div className=" text-white absolute -top-10 z-20 w-full py-3 overflow-hidden">
                            <div className=" relative p-6">
                                <span className="absolute h-full w-11/12 bg-aem-600 top-0 -left-8 transform skew-x-25 border-r-20 border-aem-700 shadow-lg"></span>
                                <div className=" relative z-30 flex flex-col w-4/5">
                                    <span className=" text-base font-semibold truncate">{car.year} {car.make} {car.model}</span>
                                    {/* <span className=" text-sm font-normal truncate"> {car.displacement} {car.enginetType}</span> */}
                                </div>

                            </div>
                        </div>
                        <div className=" grid grid-cols-2 gap-2 mt-3 px-6 pt-16 mb-3">
                            <div className=" flex flex-col">
                                <span className=" text-slate-500 text-xs"> Mileage </span>
                                <span className=" text-slate-500 text-xs font-bold">
                                    {car.mileage.toLocaleString('en-US')}
                                    <span className=" ml-[2px]">
                                        <small>KM</small>
                                    </span>
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-slate-500 text-xs">Transmission</span>
                                <span className="text-slate-500 text-xs font-bold">{car.transmission}</span>
                            </div>
                        </div>
                        <div className=" flex flex-col gap-2 px-6 pb-6 flex-1">
                            <div className=" flex flex-col gap-4 grow w-full">
                                <div className=" mr-auto">
                                    <span className="text-xs font-medium text-blue-gray-500">
                                        Dealer Price
                                    </span>
                                    <div className="leading-none">
                                        {/* <span className="text-lg tracking-wide text-slate-400 line-through block" >$17,995</span> */}
                                        <span className="text-2xl font-bold tracking-wide text-theme-600" >{`$${car.price.toLocaleString()}`}</span>
                                        <span className="text-xs text-gray-500">+ tax &amp; lic</span>
                                    </div>
                                </div>
                                <div className=" mt-auto">
                                    <button className=" px-5 py-3 font-medium tracking-wider bg-gray-800 text-white hover:bg-aem-600 w-full">
                                        <div className=" flex items-center justify-center">
                                        <span className=" mr-2">
                                            <span className=" inline-flex items-center fill-current h-6 w-6">
                                                <TagSvg />
                                            </span>
                                        </span>
                                        <span className=" text-sm">View Details</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}