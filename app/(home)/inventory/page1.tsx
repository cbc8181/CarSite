'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import type { CarsBaseInfo } from "@/app/lib/definitions";
import DropdownSelect from "@/app/ui/inventory/dropdownSelect";
import { fetchCarInfo } from "@/app/lib/cdata";
import { countBodyStyles, countMakes, countModels } from "@/app/lib/util";
import SearchBox from "@/app/ui/inventory/searchbox";
import CarCard from "@/app/ui/inventory/carCard";


export default function InventoryPage({
    searchParams,
}: {
    searchParams?: {
        catogray?: string,
        make?: string,
        model?: string,
        title?: string,
    }
}) {

    const [cars, setCars] = useState<CarsBaseInfo[]>([]);

    const [bodyStyle, setBodyStyle] = useState<{ [key: string]: number }>({});
    const [makes, setMakes] = useState<{ [key: string]: number }>({});
    const [models, setModels] = useState<{ [key: string]: number }>({});

    const [carmaparr, setCarmaparr] = useState<CarsBaseInfo[]>([]);

    useEffect(() => {
        fetchCarInfo()
            .then(({ cars, bodyStyle, make, model }) => {
                // setCars(cars);
                // setBodyStyle(bodyStyle);
                // setMakes(make);
                // setModels(model);
                // setCarmaparr(cars.filter((car: CarsBaseInfo) => model.hasOwnProperty(car.model)));
                const newBodyStyle = countBodyStyles(cars);
                const newMakes = countMakes(searchParams?.catogray || '', cars);
                const newModels = countModels(searchParams?.catogray || '', searchParams?.make || '', cars);
                const newCarmaparr = cars.filter((car:CarsBaseInfo) => newModels.hasOwnProperty(car.model));

                setCars(cars);
                setBodyStyle(newBodyStyle);
                setMakes(newMakes);
                setModels(newModels);
                setCarmaparr(newCarmaparr);                
            })
            .catch(error => {
                console.error('Error fetching car data', error);
            });
    }, []);

    // Catagory Effect
    useEffect(() => {
        const newMakes = countMakes(searchParams?.catogray || '', cars);
        const newModels = countModels(searchParams?.catogray || '', searchParams?.make || '', cars);
        const newCarmaparr = cars.filter(car => newModels.hasOwnProperty(car.model));
        setMakes(newMakes);
        setModels(newModels);
        setCarmaparr(newCarmaparr);
    }, [searchParams?.catogray]);

    // Make Effect
    useEffect(() => {
        if (searchParams?.make) {
            const newModels = countModels(searchParams?.catogray || '', searchParams?.make || '', cars);
            const newCarmaparr = cars.filter(car => newModels.hasOwnProperty(car.model));
            setModels(newModels);
            setCarmaparr(newCarmaparr);
        }
        // }, [searchParams?.catogray, searchParams?.make]);
    }, [searchParams?.make]);

    // Model Effect
    useEffect(() => {
        if (searchParams?.model) {
            // filter the cars array to only include cars with the selected model
            const newCarmaparr = cars.filter(car => car.model === searchParams?.model);
            // const newCarmaparr = cars.filter(car => models.hasOwnProperty(car.model));
            setCarmaparr(newCarmaparr);
        }
    }, [searchParams?.model]);


    //  Searchbox Effect
    useEffect(() => {
        let newCarmaparr = [];
        if (searchParams?.title) {
            // A filter function to search title in car.make and car.model and car.bodyStyle and car.year
            // and return the filtered array
            newCarmaparr = cars.filter(car => {
                const { make, model, bodyStyle, year } = car;
                const lowerCaseTitle = searchParams?.title!.toLowerCase();
                return (
                    make.toLowerCase().includes(lowerCaseTitle) ||
                    model.toLowerCase().includes(lowerCaseTitle) ||
                    bodyStyle.toLowerCase().includes(lowerCaseTitle) ||
                    year.toString().includes(lowerCaseTitle)
                );
            });

            // when a title is typed the dropdown values should be reset to default vlues
            setBodyStyle({ ...bodyStyle });
            setMakes({ ...makes });
            // setModels({...models});
            setCarmaparr(newCarmaparr);
        } 
        
        // else {
        //     newCarmaparr = cars.filter(car => models.hasOwnProperty(car.model));
        // }
        // setCarmaparr(newCarmaparr);
        // }, [models, searchParams?.title ?? '', cars]);
        // }, [searchParams?.model, searchParams?.title ?? '']);
    }, [searchParams?.title ?? '']);



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
                                <Link className=" pr-8 hover:text-slate-500 font-semibold" href={`/inventory/?catogray=Sedan`}>Cars</Link>
                                <Link className=" pr-8 hover:text-slate-500 font-semibold" href={`/inventory/?catogray=trucks`}>Trucks</Link>
                                <Link className=" pr-8 hover:text-slate-500 font-semibold" href={`/inventory/?catogray=SUV`}>SUVs</Link>
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