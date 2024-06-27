import Link from "next/link";
import CardCarousel from "./card-carousel";
// import CardCarousel from "@/app/ui/card-carousel_copy";


export default function CarCarousel() {
    return (
        <section className="relative bg-white py-24 lg:py-32 h-auto xl:max-h-hero">
            <div className="container">
                <div>
                    <div className="relative">
                        <h2>
                            <span className="mb-5 text-left text-xl md:text-2xl font-semibold">Browse car catogray</span>
                        </h2>
                    </div>
                    <div className=" -ml-10 mt-2 ">
                        <CardCarousel />
                    </div>
                    <Link 
                        className=" inline-block font-semibold mt-6 text-slate-800 hover:text-aem-600"
                        href="/inventory"
                    >
                        View All Vehicles →
                    </Link>
                </div>
            </div>
        </section>
    )
}