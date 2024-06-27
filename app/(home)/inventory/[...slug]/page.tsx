import { getCarDetailById } from "@/app/lib/data";
// import { CarDetail } from "@/app/lib/definitions";
import CarSlick from "@/app/ui/inventory/carSlick";
import { notFound } from "next/navigation";
import Link from "next/link";
import Mail from "@/public/mail.svg"
import Check from "@/public/check.svg"
import FinSvg from "@/public/cts-finan.svg"
import Form from "@/app/ui/inventory/create-comment-form";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default async function Page({
  params,
}: {
  params: { slug: string[] }
}
) {

  if (params.slug.length != 2 || isNaN(Number(params.slug[1]))) {
    return notFound();
  }

  const cardetail = await getCarDetailById(params.slug[1]);

  if (!cardetail) {
    return notFound();
  }

  const baseFeature = {
    'Doors': cardetail.door, 'Mileage': cardetail.mileage, 'Exterior color': cardetail.exteriorColor,
    'Interior color': cardetail.interiorColor, 'Body style': cardetail.bodyStyle, 'Fuel type': cardetail.fuelType,
    'Transmission': cardetail.transmission, 'Drive type': cardetail.driveType, 'Engine type': cardetail.engineType,
  }

  const features = {
    'Mechanicals': cardetail.carFeatures.filter((obj)=> obj.feature.category==="mechanicals"),
    'Safety': cardetail.carFeatures.filter((obj)=> obj.feature.category==="safety"),
    'Exterior': cardetail.carFeatures.filter((obj)=> obj.feature.category==="exterior"),
    'Interior': cardetail.carFeatures.filter((obj)=> obj.feature.category==="interior"),
    'Power Options': cardetail.carFeatures.filter((obj)=> obj.feature.category==="powerOptions"),
    'Media/Nav': cardetail.carFeatures.filter((obj)=> obj.feature.category==="media"),
  }

  // console.log(cardetail);

  return (
    <div className=" px-0 lg:px-8  xl:container xl:mx-auto">
      <div className=" grid grid-cols-12 gap-y-6 xl:gap-x-6">
        <div className=" col-span-12 lg:col-span-7 lg:px-6 xl:px-0 pb-6">
          <div className=" w-full lg:sticky lg:top-0 space-y-3">
            <div className=" flex items-center flex-wrap gap-4 py-8 px-8 lg:px-0 text-base font-normal text-slate-500">
              <div className=" w-2 h-2 rounded-full bg-slate-500"></div>
              <span className=" text-xs lg:text-sm"> Vin: {cardetail.vin}</span>
            </div>
            <div className=" space-y-3">
              {
                cardetail.images.length > 0 ? <CarSlick imageArr={cardetail.images}></CarSlick> :
                <div className=" aspect-w-16 aspect-h-9 ">
                  <Image 
                      className=" object-cover w-full h-full" 
                      src= '/default.jpg' 
                      alt={`default image`}
                      layout="fill"
                  > 
                  </Image>
                </div>
              }
            </div>
          </div>
        </div>
        <div className=" col-span-12 lg:col-span-5 lg:border-l lg:border-r border-gray-200 pb-6">
          <div className=" flex items-center justify-between gap-4 p-8 text-base font-normal text-slate-500">
            <div>
              Share this Vehicle
            </div>
            <div className=" print:hidden">
              <div className=" flex justify-end items-center gap-4 text-slate-500">
                <Link href={`mailto:?subject=${cardetail.year} ${cardetail.make} ${cardetail.model}-via auto dealer&body=http://localhost:3000/inventory/${params.slug[0]}/${params.slug[1]}`}>
                  <span className=" inline-flex items-center justify-center">
                    <Mail className=" hover:text-aem-500 w-6 h-6 fill-current"></Mail>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className=" flex flex-col p-8 bg-aem-700 text-white">
            <div >
              <h1 className=" text-2xl font-bold">
                <span>{cardetail.year} {cardetail.make} {cardetail.model}</span>
              </h1>
            </div>
            <div className=" sm:flex gap-4 justify-between">
              <div className=" w-full pt-6">
                <div className=" flex flex-col gap-6 w-full pt-6 border-t border-white text-sm font-light">
                  <div className=" flex flex-col gap-6 text-white">
                    <div>Dealer Price</div>
                    <div className=" font-bold text-2xl">
                      ${cardetail.price.toLocaleString()}
                      <span className=" text-xs"> + tax & lic</span>
                    </div>
                  </div>
                  <div className=" border-t border-white pt-6">
                    <a href="#contact-form" className=" w-full flex items-center justify-center gap-2 p-4 text-aem-700 bg-white hover:bg-slate-100 rounded-sm">
                      <Mail className=" h-5 w-5 fill-current"></Mail>
                      <span className=" text-sm font-bold">Make It Yours</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" print:hidden">
            <div className=" p-8 border-t">
              <p className=" text-aem-700 text-lg font-semibold mb-5">
                <span>Certified</span>
              </p>
              <p className=" text-slate-500 text-xs"> This Vehicle is Certified.</p>
            </div>
          </div>
          <div className=" flex flex-col p-8 border-t">
            <ul className=" grid grid-cols-2 xl:grid-cols-3 gap-8 list-none">
              {
                Object.entries(baseFeature).map(([key, value]) => {
                  return (
                    <li key={key}>
                      <p className=" text-xs font-light text-slate-600 uppercase">{key}</p>
                      <h5 className=" font-bold text-base xl:text-lg text-aem-700 mb-1 capitalize">{value}</h5>
                    </li>
                  )
                }
                )}
            </ul>
          </div>
          <div className=" p-8 flex-col border-t">
            <h4 className=" text-aem-700 text-lg font-semibold mb-5">Features & Specs</h4>
            <p className=" text-xs text-slate-500 mb-5">
              Call us to get more details on how these features and specs improve your ride.
            </p>
            <Accordion type="multiple" defaultValue={['item-0']}>
              {
                Object.entries(features).map(([key, value], index) => {
                  return (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className=" hover:!no-underline">{key}</AccordionTrigger>
                      <AccordionContent>
                        <ul className=" grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                          {
                            value.map((obj, index) => {
                              return (
                                <li key={index} className=" flex items-center justify-start gap-2 py-2 lg:pl-2 text-sm font-normal
                                 text-slate-500 hover:text-aem-700 md:border-l-2  md:border-slate-200 hover:border-slate-700">
                                  <span>
                                    <Check className=" w-4 h-4 fill-current"></Check>
                                  </span>
                                  <span className=" flex-1">
                                    {obj.feature.name}
                                  </span>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })
              }
            </Accordion>

          </div>
          <div className="">
              <h5 className=" flex items-center justify-between p-8 text-xl font-bold text-white bg-aem-700">
                Make It Yours
                <FinSvg className=" w-5 h-5 fill-current"></FinSvg>
              </h5>
              <div className=" p-8 flex flex-col gap-4">
                  <div>
                    <p className="text-xs text-slate-500"> Our Price</p>
                    <p className=" text-xl font-bold text-aem-700"> $ {cardetail.price.toLocaleString()}</p>
                  </div>
                  <div className=" w-full border-t"></div>
                  <Form></Form>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

