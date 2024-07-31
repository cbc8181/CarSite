'use client';

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarImage } from "@/app/lib/definitions";
import Image from "next/image";
// import { join } from "path";
import { Button } from "@/app/ui/button";
import clsx from "clsx";

export default function ImgSlick({
    images,
    deleteHandle,
    updateDefaultImg,
    defaultImg
}: {
    images: CarImage[];
    deleteHandle: (id: number) => void;
    updateDefaultImg: (id: number) => void;
    defaultImg: number | null;
}) {

    let sliderRef = useRef<Slider | null>(null);

    if (!images) {
        return;;
    }

    const next = () => {
        sliderRef.current?.slickNext();
    };
    const previous = () => {
        sliderRef.current?.slickPrev();
    };

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: images.length > 5 ? 5 : images.length,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: images.length > 4 ? 4 : images.length,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: images.length > 3 ? 3 : images.length,
                }
            }
        ]
    };

    return (
        <div className=" flex flex-col gap-3">
            <div className=" flex justify-start mt-3 text-xs text-gray-800">
                <button className='bg-gray-200 hover:bg-slate-300 p-3 mr-1 flex items-center justify-center rounded-md'
                    onClick={previous}>Prev</button>
                <button className='bg-gray-200 hover:bg-slate-300 p-3 mr-1 flex items-center justify-center rounded-md'
                    onClick={next}>Next</button>
            </div>
            <Slider ref={sliderRef} {...settings}>
                {images.map((image) => (
                    <div key={image.id} className="flex justify-center">
                        <Image
                            src={`/carImage/${image.carId}.${image.id}.${image.type}`}
                            alt={`/carImage/${image.carId}.${image.id}.${image.type}`}
                            width={200}
                            height={200}
                        ></Image>
                        <div className="flex flex-row gap-2">
                            <Button 
                                onClick={() => {
                                    if (defaultImg !== image.id)
                                        deleteHandle(image.id)
                                    else {
                                        alert('Cannot delete main image')
                                    }
                                }} 
                                className="w-18 mt-1"
                                // disabled={defaultImg === image.id}
                            >
                                Delete
                            </Button>
                            <Button 
                                onClick={() => {
                                    if (defaultImg !== image.id)
                                        updateDefaultImg(image.id)
                                }}
                                className={clsx(
                                    'w-18 mt-1',
                                    {
                                        'bg-aem-400': defaultImg === image.id,
                                        'bg-gray-600': defaultImg !== image.id
                                    }
                                )}
                            >
                                {defaultImg === image.id ? 'Main' : 'Set Main'} 
                            </Button>
                        </div>
                        
                    </div>
                ))}
            </Slider>
        </div>
    )
}