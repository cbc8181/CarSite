'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function HomeContent2() {

    useEffect(() => {
        AOS.init();
    }, []);

    const bgImage = 'url(/auto_repair_shop.png)';
    return (
        <section className=" bg-cover bg-no-repeat bg-left relative py-20 lg:py-52 overflow-hidden"
            style={{backgroundImage:`${bgImage}`}}>
                <span data-aos-delay="200" data-aos-offset="200" data-aos="fade-left" data-aos-easing="ease-in-sine"  className="absolute top-0 -right-4  w-full sm:w-3/5 h-full transform bg-accent-dark z-20"
                    style={{transform:'skewX(25deg)'}}></span>
                <span data-aos-delay="200" data-aos-offset="200" data-aos="fade-left" data-aos-easing="ease-in-sine" className="absolute top-0 -right-4  w-2/3 sm:w-1/3 h-full bg-accent-light z-20 backdrop-filter backdrop-blur-sm"
                    style={{transform:'skewX(25deg)'}}></span>
                <div className=" container relative z-50 flex flex-col items-end justify-center">
                    <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-out">
                        <div className=" text-right">
                            <h2 className="m-0 whitespace-nowrap uppercase text-white text-5xl md:text-6xl lg:text-8xl font-semibold tracking-tight"> Service Your </h2>
                            <h2 className="m-0 whitespace-nowrap uppercase text-white text-5xl md:text-6xl lg:text-8xl font-semibold tracking-tight"> Vehicle </h2>
                        </div>
                        <div className=" flex justify-end mt-4">
                            <a className=" block font-medium tracking-wider mt-6 px-6 py-4 bg-aem-600 hover:bg-aem-700  text-base text-white rounded-sm">
                                Book Appointment&nbsp; ➔
                            </a>
                        </div>
                    </div>
                </div>   
        </section>
    )
}


{/* <span class="absolute -right-4 top-0 w-2/3 sm:w-1/3 h-full transform skew-x-25 bg-accent-light backdrop-filter backdrop-blur-sm z-20 aos-init aos-animate"></span> */}