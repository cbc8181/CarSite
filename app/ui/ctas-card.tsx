import clsx from "clsx";
import Link from "next/link";

type CtasCardProps = {
    imgUrl: string;
    title: string;
    description: string;
    svg: React.ReactNode;
    className?: string;
    link: string;
};

export default function CtasCard({ imgUrl, title, description, svg, className, link }: CtasCardProps) {

    return (
        <div className="relative w-full md:w-1/3 p-2 pl-0 lg:max-w-sm transition-transform duration-300 md:hover:-translate-y-3">
            <Link href={link}
                className= {clsx( 
                    "relative w-full h-full block bg-center px-8 py-5 md:p-8 rounded-md ",
                    className
                )}
                style={{ backgroundImage: `url(${imgUrl})` , backgroundSize: 'cover'}}
            >
                <span className=" absolute top-0 bottom-0 left-0 right-0 w-full h-full block bg-gradient-to-b from-aem-400 to-aem-700 opacity-60 rounded-md "></span>
                <div className="flex flex-row md:flex-col gap-3">
                    <div className=" bg-white p-4 scale-100 w-12 h-12 rounded-full flex justify-center items-center mb-5">
                        <span>
                            {svg}
                            {/* {svgUrl} */}
                            {/* <CarLogo className=" bg-white text-yellow-500 fill-current " /> */}
                        </span>
                    </div>
                    <div className="flex flex-col z-10 text-white gap-2">
                        <span className=" font-semibold">{title}</span>
                        <span>{description}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}