'use client';

import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomeContent() {
    const bgImage = "/family_2.webp";

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className=" relative py-20 lg:py-52 bg-cover bg-no-repeat bg-center overflow-hidden" style={{ backgroundImage: `url(${bgImage})` }}>
            
            <span data-aos-delay="200" data-aos-offset="200" data-aos="fade-right" data-aos-easing="ease-in-sine" className="absolute -left-4 top-0 w-full sm:w-3/5 h-full transform skew-x-25 bg-accent-dark z-20"
                 style={{ transform: 'skewX(25deg)'}}></span>
            
            <span data-aos-delay="200" data-aos-offset="200" data-aos="fade-right" data-aos-easing="ease-in-sine" className="z-20 absolute -left-4 top-0 w-2/3 sm:w-1/3 h-full transform skew-x-25 bg-accent-light "
                style={{ transform: 'skewX(25deg)'}} ></span>

            <div className=" container relative z-50">
                <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-out">
                    <div className=" text-left">
                        <p className="m-0 text-white text-lg font-normal tracking-wide"> Get approved today</p>
                        <h2 className=" m-0 whitespace-nowrap uppercase text-white text-5xl md:text-6xl lg:text-8xl font-semibold tracking-tight"> Apply For </h2>
                        <h2 className=" m-0 whitespace-nowrap uppercase text-white text-5xl md:text-6xl lg:text-8xl font-semibold tracking-tight"> Financing </h2>
                    </div>
                    <div className=" flex justify-start mt-4">
                        <a className="  block font-medium tracking-wider mt-6 px-6 py-6 bg-aem-600 hover:bg-aem-700 text-base text-white rounded-sm">
                            Apply Today&nbsp; ➔
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}


function HomeContentSpan() {



    return (
        <>
            <span data-aos-delay="200" data-aos-offset="200" data-aos="fade-right" data-aos-easing="ease-in-sine" className="absolute -left-4 top-0 w-full sm:w-3/5 h-full transform skew-x-25 bg-accent-dark z-20"></span>
            <span data-aos-delay="200" data-aos-offset="200" data-aos="fade-right" data-aos-easing="ease-in-sine" className="z-20 absolute -left-4 top-0 w-2/3 sm:w-1/3 h-full transform skew-x-25 bg-accent-light "></span>
        </>
    )
}

