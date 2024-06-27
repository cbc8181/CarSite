'use client';

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./review-card";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomeReview() {
  
    useEffect(() => {
        AOS.init();
    }, []);


    let sliderRef = useRef<Slider | null>(null);

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
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,               
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,               
                }
              }
        ]
    };


    const reviews =[{user: 'John Doe', grade: 5, review: "I bought my used vehicle here for a very fair price and it's running great. I have since brought my car in for a tune-up and the team is very friendly and knowledgeable. I am a lifetime customer for sure!"},
    {user: 'Jane White', grade: 4, review: "I bought my used vehicle here for a very fair price and it's running great. I have since brought my car in for a tune-up and the team is very friendly and knowledgeable. I am a lifetime customer for sure!"},
    {user: 'Chirs Doe', grade: 5, review: "I bought my used vehicle here for a very fair price and it's running great. I have since brought my car in for a tune-up and the team is very friendly and knowledgeable. I am a lifetime customer for sure!"},
    {user: 'Li Doe', grade: 5, review: "I bought my used vehicle here for a very fair price and it's running great. I have since brought my car in for a tune-up and the team is very friendly and knowledgeable. I am a lifetime customer for sure!"},
]

    return (
        <section className=" bg-white relative py-24 lg:py-32 overflow-hidden">
            {/* <span data-aos="fade-right" data-aos-delay="200" className=" hidden sm:inline absolute -bottom-11 h-96 transform skew-y-[-3deg] w-[150vw] bg-aem-500"
                style={{ transform: 'skewY(-3deg)'}}></span> */}
            <div className="container">
                <div className=" md:grid md:grid-cols-2">
                    <div>
                        <h2 className=" text-slate-800 text-3xl font-semibold mb-6 text-left"> Customer Review</h2>
                    </div>
                    <div className=" flex justify-between items-center gap-6 mb-6 ml-auto">
                        <a > Google Reiviews</a>
                        <div className=" flex justify-end text-xs text-gray-800">
                            <button className='bg-slate-100 hover:bg-slate-300 p-3 mr-1 flex items-center justify-center rounded-md'
                                onClick={previous}>Prev</button>
                            <button className='bg-slate-100 hover:bg-slate-300 p-3 mr-1 flex items-center justify-center rounded-md'
                                onClick={next}>Next</button>
                        </div>
                    </div>
                </div>
                <div className=" -mx-2">
                    <div className="slider-container">
                        <Slider ref={sliderRef} {...settings}>
                            {reviews.map((review, index) => (
                                <ReviewCard {...review} key={review.user}></ReviewCard>
                            ))}
                        </Slider>
                    </div>

                </div>
            </div>
        </section>
    )
}