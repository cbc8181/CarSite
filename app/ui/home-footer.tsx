import clsx from "clsx";
import WorkTime from "./work-time";
import Link from "next/link";


export default function HomeFooter() {

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Inventory', href: '/inventory' },
        { name: 'Service', href: '/carservice' },
        // { name: 'Financing', href: '/financing' },
        // { name: 'Trade-In Request', href: '/trade-in-request' },
        // { name: 'Request a Test Drive', href: '/test-drive' },
        // { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <div className=" bg-aem-background-600 py-5 md:py-6">
            <div className=" container text-gray-600 py-10">
                <div className=" grid grid-cols-12 gap-y-6 gap-x-4 md:gap-x-6">
                    <div className=" col-span-full md:col-span-5 lg:col-span-2 mb-4">
                        {/* <div > */}
                        <h3 className=" mb-5 text-xl font-semibold text-white "> Important Links </h3>
                        <div className=" flex flex-col justify-start whitespace-nowrap text-white">
                            {links.map((link) => (
                                <Link key={link.name} href={link.href}>{link.name}</Link>
                            ))}
                        </div>
                    </div>
                    <div className=" col-span-full md:col-span-6 lg:col-span-4 mb-4">
                        <h3 className=" mb-5 text-xl font-semibold text-white  "> Dealearship </h3>
                        <div className="flex flex-col text-sm text-white">
                            <div className={
                                clsx(
                                    "basis-11  py-3 rounded-sm grid grid-cols-2",
                                    { "font-semibold": 1 == new Date().getDay() }
                                )}>
                                <span>Monday</span>
                                <span>9:00 AM - 6:00 PM</span>
                            </div>
                            <div className={
                                clsx(
                                    "basis-11  py-3 rounded-sm grid grid-cols-2",
                                    { "font-semibold": 2 == new Date().getDay() }
                                )
                            }>
                                <span>Tuesday</span>
                                <span>9:00 AM - 6:00 PM</span>
                            </div>
                            <div className={clsx(
                                "basis-11  py-3 rounded-sm grid grid-cols-2",
                                { "font-semibold": 3 == new Date().getDay() }
                            )}>
                                <span>Wednesday</span>
                                <span>9:00 AM - 6:00 PM</span>
                            </div>
                            <div className={
                                clsx(
                                    "basis-11  py-3 rounded-sm grid grid-cols-2",
                                    { "font-semibold": 4 == new Date().getDay() }
                                )}>
                                <span>Thursday</span>
                                <span>9:00 AM - 6:00 PM</span>
                            </div>
                            <div className={
                                clsx(
                                    "basis-11  py-3 rounded-sm grid grid-cols-2",
                                    { "font-semibold": 5 == new Date().getDay() }
                                )}>
                                <span>Friday</span>
                                <span>9:00 AM - 6:00 PM</span>
                            </div>
                            <div className={
                                clsx(
                                    "basis-11  py-3 rounded-sm grid grid-cols-2",
                                    { "font-semibold": 6 == new Date().getDay() }
                                )}>
                                <span>Saturday</span>
                                <span>Closed</span>
                            </div>
                            <div className={
                                clsx(
                                    "basis-11  py-3 rounded-sm grid grid-cols-2",
                                    { "font-semibold": 0 == new Date().getDay() }
                                )}>
                                <span>Sunday</span>
                                <span>Closed</span>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-full md:col-span-6 lg:col-span-3 mb-4">
                        <h3 className=" mb-5 text-xl font-semibold text-white  "> Address </h3>
                        <div className=" flex flex-col text-white">
                            <span> 1234 Main St. </span>
                            <span> Springfield, ON </span>
                            <span className=" mt-5 mb-1 "> (217) 555-5555 </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}