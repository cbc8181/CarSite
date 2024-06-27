'use client';

import CarSvg  from "@/public/cts-car.svg"
import FinanSvg from "@/public/cts-finan.svg";
import ServiceSvg from "@/public/cts-service.svg";
import HandSvg from "@/public/hand.svg";
import CardAbout from "./card-about";

// import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useEffect } from 'react';

export default function HomeAbout() {

    // useEffect(() => {
    //     AOS.init();
    // }, []);

    const cards = [{ title: "Variety of Cars", content: "We have a wide range of cars to choose from. From luxury cars to sports cars, we have it all.", icon: <CarSvg></CarSvg> },
                    { title: "financing options", content: "We offer financing options for all types of credit. Whether you have good credit or bad credit, we can help you get the car you want.", icon: <FinanSvg></FinanSvg> },
                    { title: "Customer Service", content: "We pride ourselves on providing excellent customer service. Our team is dedicated to helping you find the perfect car for your needs.", icon: <HandSvg></HandSvg> },
                    { title: "Quality Cars", content: "All of our cars are thoroughly inspected and tested to ensure they are of the highest quality. You can trust that you are getting a reliable car when you buy from us.", icon: <ServiceSvg></ServiceSvg> }];

    return (
        <section className=" bg-aem-300 bg-cover py-10 lg:py-28 relative overflow-hidden">
            <span data-aos="fade-left" data-aos-delay="200" className="   hidden  sm:inline absolute top-0 -left-14 w-24 h-44 bg-aem-500"
                style={{transform:'skewX(-25deg)'}}></span>
            <span data-aos="fade-right" data-aos-delay="200"  className="   hidden  sm:inline absolute bottom-0 -right-14 w-24 h-44 bg-aem-500"
                style={{transform:'skewX(-25deg)'}}></span>
            <div className=" container text-white">
                <div   className=" flex flex-col lg:flex-row flex-wrap -mx-5">
                    {cards.map((card, index) => (
                        <CardAbout
                            title={card.title}
                            content={card.content}
                            className=" w-full h-full flex items-start justify-start lg:basis-1/2 pb-5 px-5"
                            svg={card.icon}
                            data-aos-delay="100"
                            data-aos="fade-up"
                            key={card.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}