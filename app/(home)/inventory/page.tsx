import Link from "next/link";
import type { CarsBaseInfo, SearchParams } from "@/app/lib/definitions";
import DropdownSelect from "@/app/ui/inventory/dropdownSelect";
import { countBodyStyles, countMakes, countModels } from "@/app/lib/util";
import SearchBox from "@/app/ui/inventory/searchbox";
import CarCard from "@/app/ui/inventory/carCard";
import { getCarBaseInfo, getCarBodyInfo } from "@/app/lib/data";

export default async function InventoryPage({
    searchParams,
}: {
    searchParams?: SearchParams
}) {

    const carBodyStyle = await getCarBodyInfo();
    const cars  = await getCarBaseInfo(searchParams);

    const bodyStyle = countBodyStyles(carBodyStyle as { bodyStyle: string; }[]);
    const makes = countMakes(searchParams?.catogray || '', cars)
    const models = countModels(searchParams?.catogray || '', searchParams?.make || '', cars)
    const carmaparr = cars.filter((car: CarsBaseInfo) => models.hasOwnProperty(car.model));

    return (
        <>
            <div className=" hidden xl:block">
                <div className=" relative bg-white">
                    <span className=" block absolute left-0 xl:-left-5 top-0 transform xl:skew-x-25 xl:h-full xl:w-1/2 border-r-20 border-aem-700 bg-aem-600 z-10"></span>
                    <div className=" container flex flex-row justify-between relative z-50">
                        <h1 className=" text-white text-lg py-6"> Used Cars, Trucks & SUVs for sale</h1>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className=" container  text-slate-800">
                <div className=" my-10">
                    <h2 className=" text-4xl font-bold"> Vehicles In Stock</h2>
                </div>
                <div className=" container bg-white my-6">
                    <div className=" flex flex-col md:flex-row gap-4 md:gap-2 justify-between py-6">
                        <div className=" flex items-center">
                            <div className=" text-slate-800 text-sm">
                                <Link className=" pr-8 hover:text-slate-500 font-semibold" href={`/inventory/?catogray=Sedan`}>Sedan</Link>
                                <Link className=" pr-8 hover:text-slate-500 font-semibold" href={`/inventory/?catogray=SUV`}>SUV</Link>
                                <Link className=" pr-8 hover:text-slate-500 font-semibold" href={`/inventory/?catogray=Van`}>Van</Link>
                            </div>
                        </div>
                        <div className=" flex justify-start gap-3  md:justify-end">
                            <DropdownSelect
                                optionObject={bodyStyle}
                                defaultOption="Body Style"
                                selectedOption={searchParams?.catogray || 'Body Style'}
                            ></DropdownSelect>
                            <DropdownSelect
                                optionObject={makes}
                                defaultOption="Make"
                                selectedOption={searchParams?.make || 'Make'}
                            ></DropdownSelect>
                            <DropdownSelect
                                optionObject={models}
                                defaultOption="Model"
                                selectedOption={searchParams?.model || 'Model'}
                            ></DropdownSelect>
                        </div>
                    </div>
                </div>
                <div className=" bg-slate-50 border-t pb-8">
                    <div className=" container pt-5">
                        <div className=" flex flex-row gap-6 items-center justify-between md:justify-start">
                            <div className=" mb-2 lg:mb-0 text-sm font-normal text-slate-500 whitespace-normal">
                                Showing <span className=" font-semibold text-gray-700 whitespace-nowrap">{cars.length}</span> Vehicles
                            </div>
                            <div className=" mb-2 lg:mb-0  basis-64">
                                <SearchBox placeholder="Search"></SearchBox>
                            </div>
                        </div>
                        <div className="  mt-3 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {
                                carmaparr.map((car, index) => (
                                    <CarCard car={car} key={index}></CarCard>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}