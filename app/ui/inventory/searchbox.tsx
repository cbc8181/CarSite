'use client';

import { useSearchParams, usePathname, useRouter }  from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBox( {placeholder}: {placeholder: string}) {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term)=>{
        const params = new URLSearchParams('');
        if(term){
            params.set('title', term);
        } else {
            params.delete('title');
        }
        replace(`${pathname}?${params.toString()}`,{scroll:false});
    },500)

    return(
        <div className=" relative ">
            <input 
                className=" block rounded-md border-[1px] py-2 pl-2 placeholder-slate-500" 
                type="text" 
                placeholder={placeholder} 
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={ searchParams?.get('title')?.toString()}
                />
        </div>
    )
}