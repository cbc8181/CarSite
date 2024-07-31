'use client';

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Previous from "@/public/previous-arrow.svg";
import Next from "@/public/next-arrow.svg";
import Image from "next/image";
import { CarImage } from "@/app/lib/definitions";


export default function CarSlick({ 
    imageArr, 
}: {
    imageArr: CarImage[]
}) {

    const [nav1, setNav1] = useState<Slider | null>(null);
    const [nav2, setNav2] = useState<Slider | null>(null);
    let sliderRef1 = useRef<Slider | null>(null);
    let sliderRef2 = useRef<Slider | null>(null);

    const imgPath = "/carImage";

    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, []);

    const next = () => {
        sliderRef1.current?.slickNext();
    };
    const previous = () => {
        sliderRef1.current?.slickPrev();
    };

    return (
        <>
            <div className=" relative overflow-hidden">
                <div className=" w-full relative z-10 mx-auto rounded-sm border overflow-hidden ">
                    <div className=" slider-container">
                        <Slider
                            asNavFor={nav2 as Slider | undefined}
                            ref={sliderRef1}
                            arrows={false}
                        >
                            {imageArr?.map((img, index) => (
                                <div key={index} className=" aspect-w-4 aspect-h-3">
                                    <Image className=" object-cover w-full h-full"
                                        src={`${imgPath}/${img.carId}.${img.id}.${img.type}`}
                                        alt={`${img.carId}.${img.id}.jpeg`}
                                        layout="fill"
                                    ></Image>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                <div className=" absolute z-20 left-0 top-1/2 flex items-center justify-between w-full h-px overflow-visible border-x">
                    <button className=" p-3 text-white bg-aem-700 hover:bg-aem-500  rounded-tr-sm rounded-br-sm"
                        onClick={previous}><Previous className=" w-6 h-6 text-white fill-current"></Previous></button>
                    <button className="p-3 text-white bg-aem-700 hover:bg-aem-500  rounded-tl-sm rounded-bl-sm"
                        onClick={next}><Next className="  w-6 h-6 text-white fill-current"></Next></button>
                </div>
            </div>
            <div className=" relative">
                <div className=" overflow-hidden print:hidden cursor-pointer">
                    <Slider
                        asNavFor={nav1 as Slider | undefined}
                        ref={sliderRef2}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        arrows={false}
                        centerMode={true}
                    >
                        {imageArr?.map((img, index) => (
                            <div className=" px-2 w-full inline-block" key={`${img.carId}.${img.id}`}>
                                <div key={index} className=" aspect-w-3 aspect-h-2 border rounded-sm overflow-hidden">
                                    <Image className=" object-cover w-full h-full"
                                        src={`/carImage/${img.carId}.${img.id}.${img.type}`}
                                        alt={`car:${img.carId} image:#${img.id}`}
                                        layout="fill"
                                    ></Image>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className=" absolute z-20 left-0 top-1/2 flex items-center justify-between w-full h-px overflow-visible">
                    <button className=" p-3 text-white bg-aem-700 hover:bg-aem-500   rounded-tr-sm rounded-br-sm"
                        onClick={previous}><Previous className=" w-6 h-6 text-white fill-current"></Previous></button>
                    <button className="p-3 text-white bg-aem-700 hover:bg-aem-500  rounded-tl-sm rounded-bl-sm"
                        onClick={next}><Next className="  w-6 h-6 text-white fill-current"></Next></button>
                </div>
            </div>
        </>
    )
}