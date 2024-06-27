'use client'

import { CarDetail, Features } from "@/app/lib/definitions"

export default async function checkFeatures({
    category,
    features,
    carFeatures
}: {
    category: string;
    features: Features[];
    carFeatures?: CarDetail['carFeatures'];
}) {

    return (
        <fieldset className=" border border-gray-200 p-4 rounded-md my-3">
            <legend className=" uppercase text-sm font-medium">{category}</legend>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {features.map((feature) => (
                    // console.log(feature),
                    <div key={feature.id} className=" flex flex-row items-center">
                        <input 
                            type="checkbox" 
                            id={feature.name} 
                            name={feature.id.toString()} 
                            className="  h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 "
                            // if feature is in carFeatures, check the box
                            defaultChecked={carFeatures?.some((cf) => cf.feature.name === feature.name)}
                        /> 
                        <label htmlFor={feature.name} 
                               className=" ml-1 cursor-pointer items-center rounded-sm px-1 py-1.5 text-xs font-medium text-gray-600">
                                {feature.name}
                        </label>
                    </div>
                ))}
            </div>
        </fieldset>
    )
}