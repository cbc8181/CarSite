import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
    return (
        <section>
            <div className="hero-container min-h-hero h-auto lg:h-hero lg:max-h-hero xl:max-h-hero relative w-full flex flex-col justify-center items-center">

                <div className="left-0 top-0 min-h-hero h-auto lg:h-hero xl:max-h-hero w-full bg-cover bg-center bg-no-repeat "
                    style={{ backgroundImage: `url(/car_store-bg.jpeg)` }}>
                    <div className="relative z-10 w-full h-auto pt-32 pb-8 sm:pb-32 text-center">
                        <h2 className="m-0 text-white text-5xl md:text-6xl lg:text-8xl font-semibold tracking-tighter">Auto Sale & Serivecs</h2>
                    </div>
                    <div className="flex z-10 flex-col mx-2 sm:mx-auto sm:flex-row sm:w-3/5 justify-center items-center gap-3">
                        <Link href="./inventory" className="px-6 py-4 text-center w-full bg-opacity-85 bg-aem-600 hover:bg-opacity-95 text-base text-white rounded-sm bg-theme-600 hover:bg-theme-700">
                            <span>View All Inventory</span>
                        </Link>
                        <Link href="/service" className="px-6 py-4 text-center w-full bg-opacity-20 bg-slate-50  hover:bg-opacity-30 text-base text-white rounded-sm bg-theme-600 hover:bg-theme-700">
                            <span>Get Your Vehicle Service</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}