'use client';

// import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
    CheckIcon,
    ClockIcon,
    CurrencyDollarIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createCar } from '@/app/lib/action';
import { useFormState } from 'react-dom';
import { getFeatures } from '@/app/lib/data';
import { Features } from '@/app/lib/definitions';
import CheckFeatures from '@/app/ui/dashboard/inventory/checkFeatures';

export default function Form({
    features,
}: {
    features: Features[]
}) {
    const initialState = { message: '', errors: {} };
    const [state, dispatch] = useFormState(createCar, initialState);

    const featureCategories = ["mechanicals", "safety", "exterior", "interior", "powerOptions", "media"];

    return (
        <form action={dispatch}>
            <div className=' rounded-md bg-gray-50 p-4 md:p-6'>
                <div className=' grid grid-cols-12 gap-6'>

                    <div className=' col-span-6 xl:col-span-4  2xl:col-span-3'>
                        <div className=' w-full flex items-center'>
                            <label htmlFor='vin' className=' mr-2 text-sm font-medium basis-12'>
                                VIN
                            </label>
                            <input
                                id='vin'
                                name='vin'
                                type='text'
                                placeholder='Enter VIN'
                                className=' rounded-md border border-gray-200 py-2 pl-3 text-xs outline-2 placeholder:text-gray-500'
                            // required 
                            />
                        </div>
                        <div id="vin-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.vin &&
                                state.errors.vin.map((error: string) => (
                                    <p className="mt-2 text-xs text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                    <div className=' col-span-6 xl:col-span-4 2xl:col-span-3'>
                        <div className=' w-full flex items-center'>
                            <label htmlFor='make' className='mr-2 text-sm font-medium basis-12'>
                                Year
                            </label>
                            <input
                                id='year'
                                name='year'
                                type='number'
                                step='1'
                                placeholder='Enter Year'
                                className=' block w-full rounded-md border border-gray-200 py-2 pl-3 text-xs outline-2 placeholder:text-gray-500'
                            // required 
                            />
                        </div>
                        <div id="year-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.year &&
                                state.errors.year.map((error: string) => (
                                    <p className="mt-2 text-xs text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>

                    <div className='  col-span-6 xl:col-span-4 2xl:col-span-3'>
                        <div className=' w-full flex items-center'>
                            <label htmlFor='price' className=' mr-2 text-sm font-medium basis-12'>
                                Price
                            </label>
                            <input
                                id='price'
                                name='price'
                                type='number'
                                step='1'
                                placeholder='Enter Price'
                                className=' w-full rounded-md border border-gray-200 py-2 pl-3 text-xs outline-2 placeholder:text-gray-500'
                            // required 
                            />
                        </div>
                        <div id="price-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.price &&
                                state.errors.price.map((error: string) => (
                                    <p className="mt-2 text-xs text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                    <div className='  col-span-6 xl:col-span-4 2xl:col-span-3'>
                        <div className=' w-full flex items-center'>
                            <label htmlFor='listprice' className='mr-2  text-sm font-medium basis-12'>
                                List Price
                            </label>
                            <input
                                id='listprice'
                                name='listprice'
                                type='number'
                                step='1'
                                placeholder='Enter list price'
                                className=' w-full rounded-md border border-gray-200 py-2 pl-3 text-xs outline-2 placeholder:text-gray-500'
                            />
                        </div>
                        <div id="listPrice-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.listPrice &&
                                state.errors.listPrice.map((error: string) => (
                                    <p className="mt-2 text-xs text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>

                    <div className='col-span-6 xl:col-span-4 2xl:col-span-3 '>
                        <div className=' w-full flex items-center'>
                            <label htmlFor='make' className=' mr-2 text-sm font-medium basis-12'>
                                Make
                            </label>
                            <input
                                id='make'
                                name='make'
                                type='text'
                                placeholder='Enter make'
                                className=' w-full rounded-md border border-gray-200 py-2 pl-3 text-xs outline-2 placeholder:text-gray-500'
                            // required
                            />
                        </div>
                        <div id="make-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.make &&
                                state.errors.make.map((error: string) => (
                                    <p className="mt-2 text-xs text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                    <div className=' col-span-6 xl:col-span-4 2xl:col-span-3'>
                        <div className=' w-full flex items-center'>
                            <label htmlFor='model' className='mr-2  text-sm font-medium basis-12'>
                                Model
                            </label>
                            <input
                                id='model'
                                name='model'
                                type='text'
                                placeholder='Enter model'
                                className=' w-full rounded-md border border-gray-200 py-2 pl-3 text-xs outline-2 placeholder:text-gray-500'
                            // required
                            />
                        </div>
                        <div id="model-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.model &&
                                state.errors.model.map((error: string) => (
                                    <p className="mt-2 text-xs text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>


                    <div className=' col-span-6 xl:col-span-4 2xl:col-span-3'>
                        <div className=' w-full flex items-center'>
                            <label htmlFor='mileage' className='mr-2 text-sm font-medium basis-12'>
                                Mileage
                            </label>
                            <input
                                id='mileage'
                                name='mileage'
                                type='number'
                                step='1'
                                placeholder='Enter mileage'
                                className=' w-full rounded-md border border-gray-200 py-2 pl-3 text-xs outline-2 placeholder:text-gray-500'
                            // required 
                            />
                        </div>
                        <div id="mileage-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.mileage &&
                                state.errors.mileage.map((error: string) => (
                                    <p className="mt-2 text-xs text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                    <div className='col-span-6 xl:col-span-4 2xl:col-span-3'>
                        <div className=' w-full flex items-center'>
                            <label htmlFor='door' className=' mr-2 text-sm font-medium basis-12'>
                                Door
                            </label>
                            <input
                                id='door'
                                name='door'
                                type='number'
                                step='1'
                                placeholder='Enter door number'
                                className=' w-full rounded-md border border-gray-200 py-2 pl-3  text-xs outline-2 placeholder:text-gray-500'
                            // required 
                            />
                        </div>
                        <div id="mileage-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.door &&
                                state.errors.door.map((error: string) => (
                                    <p className="mt-2 text-xs text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                    <div className='col-span-6 xl:col-span-4 2xl:col-span-3'>
                        <div className=' w-full flex items-center'>
                            <label htmlFor='exteriorColor' className='mr-2 text-sm font-medium basis-12'>
                                Exterior Color
                            </label>
                            <input
                                id='exteriorColor'
                                name='exteriorColor'
                                type='text'
                                placeholder='Enter exterior Color'
                                className=' w-full rounded-md border border-gray-200 py-2 pl-3 text-xs outline-2 placeholder:text-gray-500'
                            // required 
                            />
                        </div>
                        <div id="exteriorColor-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.exteriorColor &&
                                state.errors.exteriorColor.map((error: string) => (
                                    <p className="mt-2 text-xs text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                    <div className=' col-span-6 xl:col-span-4 2xl:col-span-3 '>
                        <div className=' w-full flex items-center'>
                            <label htmlFor='interiorColor' className='mr-2 text-sm font-medium basis-12'>
                                Interior Color
                            </label>
                            <input
                                id='interiorColor'
                                name='interiorColor'
                                type='text'
                                placeholder='Enter interior color'
                                className=' w-full rounded-md border border-gray-200 py-2 pl-3 text-xs outline-2 placeholder:text-gray-500'
                            // required
                            />
                        </div>
                        <div id="interiorColor-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.interiorColor &&
                                state.errors.interiorColor.map((error: string) => (
                                    <p className="mt-2 text-xs text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>

                    <div className=' col-span-6 xl:col-span-4 2xl:col-span-3 '>
                        <div className=' w-full flex items-center'>

                            <label htmlFor='bodyStyle' className='mr-2 text-sm font-medium basis-12'>
                                Body Style
                            </label>
                            <input
                                id='bodyStyle'
                                name='bodyStyle'
                                type='text'
                                placeholder='Enter body style (SUV/Truck/Sedan)'
                                className=' w-full rounded-md border border-gray-200 py-2 pl-3 text-xs outline-2 placeholder:text-gray-500'
                            // required
                            />
                        </div>

                        <div id="bodyStyle-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.bodyStyle &&
                                state.errors.bodyStyle.map((error: string) => (
                                    <p className="mt-2 text-xs text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>

                    </div>
                    <div className='col-span-6 xl:col-span-4 2xl:col-span-3 '>
                        <div className=' w-full flex items-center'>
                            <label htmlFor='fuelType' className='mr-2 text-sm font-medium basis-12'>
                                Fuel Type
                            </label>
                            <input
                                id='fuelType'
                                name='fuelType'
                                type='text'
                                placeholder='Enter fuel type'
                                className=' w-full rounded-md border border-gray-200 py-2 pl-3 text-xs outline-2 placeholder:text-gray-500'
                            // required 
                            />
                        </div>
                        <div id="fuelType-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.fuelType &&
                                state.errors.fuelType.map((error: string) => (
                                    <p className="mt-2 text-xs text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>


                    <div className='col-span-6 xl:col-span-4 2xl:col-span-3 '>
                        <div className=' w-full flex items-center'>
                            <label htmlFor='transmission' className='mr-2 text-sm font-medium basis-12'>
                                Transmission
                            </label>
                            <input
                                id='transmission'
                                name='transmission'
                                type='text'
                                placeholder='Enter transmission (Automatic)'
                                className=' rounded-md border border-gray-200 py-2 pl-3 text-xs outline-2 placeholder:text-gray-500'
                            // required
                            />
                        </div>
                        <div id="transmission-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.transmission &&
                                state.errors.transmission.map((error: string) => (
                                    <p className="mt-2 text-xs text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>

                    </div>
                    <div className=' col-span-6 xl:col-span-4 2xl:col-span-3 '>
                        <div className=' w-full flex items-center'>
                            <label htmlFor='driveType' className='mr-2 text-sm font-medium basis-12'>
                                DriveType
                            </label>
                            <input
                                id='driveType'
                                name='driveType'
                                type='text'
                                placeholder='Enter drive type (All-wheel drive)'
                                className=' rounded-md border border-gray-200 py-2 pl-3 text-xs outline-2 placeholder:text-gray-500'
                            // required
                            />
                        </div>
                        <div id="driveType-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.driveType &&
                                state.errors.driveType.map((error: string) => (
                                    <p className="mt-2 text-xs text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>



                    <div className=' col-span-6 xl:col-span-4 2xl:col-span-3 '>
                        <div className=' w-full flex items-center'>
                            <label htmlFor='engineType' className='mr-2 text-sm font-medium basis-12'>
                                EngineType
                            </label>
                            <input
                                id='engineType'
                                name='engineType'
                                type='text'
                                placeholder='Enter engine type (Automatic)'
                                className=' w-full rounded-md border border-gray-200 py-2 pl-3 text-xs outline-2 placeholder:text-gray-500'
                            // required
                            />
                        </div>
                        <div id="engineType-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.engineType &&
                                state.errors.engineType.map((error: string) => (
                                    <p className="mt-2 text-xs text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                    <div className=' col-span-6 xl:col-span-4 2xl:col-span-3 '>
                        <div className=' w-full flex items-center'>
                            <label htmlFor='displacement' className='mr-2 text-sm font-medium basis-12'>
                                Displacement
                            </label>
                            <input
                                id='displacement'
                                name='displacement'
                                type='number'
                                step='0.1'
                                placeholder='Enter displacement'
                                className=' w-full rounded-md border border-gray-200 py-2 pl-3 text-xs outline-2 placeholder:text-gray-500'
                            // required
                            />
                        </div>
                        <div id="displacement-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.displacement &&
                                state.errors.displacement.map((error: string) => (
                                    <p className="mt-2 text-xs text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>


                    <fieldset className=' col-span-12 '>
                        <legend className="mb-2 block text-sm font-medium">
                            Set the sold status
                        </legend>
                        <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                            <div className="flex gap-4">
                                <div className="flex items-center">
                                    <input
                                        id="onSale"
                                        name="saleStatus"
                                        type="radio"
                                        value="onSale"
                                        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                        aria-describedby="status-error"
                                    />
                                    <label
                                        htmlFor="onSale"
                                        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                    >
                                        OnSale <ClockIcon className="h-4 w-4" />
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="sold"
                                        name="saleStatus"
                                        type="radio"
                                        value="sold"
                                        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                        aria-describedby="status-error"
                                    />
                                    <label
                                        htmlFor="sold"
                                        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                                    >
                                        Sold <CheckIcon className="h-4 w-4" />
                                    </label>
                                </div>

                            </div>

                        </div>
                        <div id="saleStatus-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.saleStatus &&
                                state.errors.saleStatus.map((error: string) => (
                                    <p className="mt-2 text-xs text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </fieldset>

                    <fieldset className=' col-span-12 '>
                        <legend className="mb-2 block text-sm font-medium">
                            Set the display status
                        </legend>
                        <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                            <div className="flex gap-4">
                                <div className="flex items-center">
                                    <input
                                        id="notDisplay"
                                        name="displayStatus"
                                        type="radio"
                                        value="notDisplay"
                                        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                        aria-describedby="status-error"
                                    />
                                    <label
                                        htmlFor="notDisplay"
                                        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                    >
                                        Not Display <ClockIcon className="h-4 w-4" />
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="display"
                                        name="displayStatus"
                                        type="radio"
                                        value="display"
                                        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                        aria-describedby="status-error"
                                    />
                                    <label
                                        htmlFor="display"
                                        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                                    >
                                        Display <CheckIcon className="h-4 w-4" />
                                    </label>
                                </div>

                            </div>

                        </div>
                        <div id="displayStatus-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.displayStatus &&
                                state.errors.displayStatus.map((error: string) => (
                                    <p className="mt-2 text-xs text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </fieldset>



                    {
                        featureCategories.map((category) => {
                            const iFeatures = features.filter((feature) => feature.category === category);
                            return (
                                <div className=' col-span-12'>
                                    <CheckFeatures category={category} features={iFeatures} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>



            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/invoices"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Create Car</Button>
            </div>

        </form>
    );
}
