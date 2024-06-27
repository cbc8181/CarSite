import CtasCard from "@/app/ui/ctas-card";
import CarSvg  from "@/public/cts-car.svg"
// import FinanSvg from "@/public/cts-finan.svg";
// import LoanSvg from "@/public/cts-finan.svg"
import FinanIcon from "@/public/cts-finan.svg";
import ServiceSvg from "@/public/cts-service.svg";

export default function Ctas() {
    return (
        <section className=" bg-aem-500 py-10 lg:py-12">
            <div className=" container">
                <div className="relative  flex flex-col md:flex-row  lg:-mt-20 lg:w-10/12 ">
                    <CtasCard
                        imgUrl="/car_inventory.jpeg"
                        title="View Inventory"
                        description="Browse our selection of used cars"
                        svg={ <CarSvg className=" text-aem-500 fill-current "></CarSvg> }
                        link="/inventory"
                    >
                    </CtasCard>
                    <CtasCard
                        imgUrl="/car_finance.jpeg"
                        title="Apply for Financing"
                        description="Apply for financing today."
                        // svg={ <FinanSvg className=" text-aem-500 fill-current "></FinanSvg> }
                        svg={ <FinanIcon className=" text-aem-500 fill-current "></FinanIcon> }
                        link="/finance"
                    >
                    </CtasCard>
                    <CtasCard
                        imgUrl="/car_repair.jpeg"
                        title="Trade-In"
                        description="Get an instant trade-in value on your current vehicle."
                        svg={ <ServiceSvg className=" text-aem-500 fill-current "></ServiceSvg> }
                        link="/trade-in"
                    >
                    </CtasCard>
                </div>
            </div>
        </section>
    )
}