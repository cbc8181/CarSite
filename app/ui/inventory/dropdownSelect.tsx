'use client';

import { usePathname, useSearchParams,useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type DropdownSelectParams = {
    optionObject: {[key: string]: number},
    defaultOption: string,
    selectedOption: string,
}

export default function DropdownSelect({
    optionObject,
    defaultOption,
    selectedOption,
}: DropdownSelectParams) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    // initialize the selected state value with selectedOption
    const [selected, setSelected] = useState<string>(selectedOption);
    // const [selected, setSelected] = useState<string>(selectedOption);



    let options = Object.keys(optionObject);
    options = [ defaultOption, ...options];

    // useEffect(()=>{
    //     // console.log(defaultOption);
    //     setSelected(defaultOption);
    // },[ optionObject]);

    useEffect(()=>{
        // console.log(defaultOption);
        setSelected(selectedOption);
    },[ selectedOption]);
    
    const handleChange = (event : any)=>{
        // console.log(event.target.value);
        setSelected(event.target.value);
        const params = new URLSearchParams(searchParams || '');

        // simplify this logic
        if (defaultOption === 'Body Style') {
            params.delete('catogray');
            params.delete('make');
            params.delete('model');
            if (event.target.value !== defaultOption) {
                params.set('catogray', event.target.value);
            }
        } else if (defaultOption === 'Make') {
            params.delete('make');
            params.delete('model');
            if (event.target.value !== defaultOption) {
                params.set('make', event.target.value);
            }
        } else if (defaultOption === 'Model') {
            params.delete('model');
            if (event.target.value !== defaultOption) {
                params.set('model', event.target.value);
            }
        }
        replace(`${pathname}?${params.toString()}`,{scroll:false});
    }

    return (
        <select className=" " value={selected} onChange={handleChange} 
            // style={{backgroundImage: `url(/dropdown-button.svg)`}}
            >
            {options.map((option) => (
                <option key={option} value={option}>
                    { option === defaultOption ? ' ' : '-'}
                    {' '}{option}
                    { option === defaultOption ? ' ' : `(${optionObject[option]})`}
                </option>
            ))}
        </select>
    )
}