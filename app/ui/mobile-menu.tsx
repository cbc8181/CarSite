import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import AddressCard from "./addressCard";
import MobileHeader from "./mobile-header";
import WorkTime from "./work-time";
import {links} from "@/app/ui/main-header";


export default function MobileMenu() {
    return (
        <>
            <div className="w-full px-4 sm:px-8 pb-2 bg-white">
                {/* Nav menu */}
                <div>
                    <div className="h-11 py-3 font-semibold text-base text-slate-500">
                        Menu
                    </div>
                    <div className="flex flex-col">
                        {links.map((link, index) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "basis-11 px-2 py-3 rounded-sm",
                                    { "bg-slate-150": index % 2 == 0 }
                                )}
                            >{link.name}</Link>
                        ))
                        }
                    </div>
                </div>
                <div>
                    <AddressCard></AddressCard>
                </div>
                <div className="">
                    <div className="h-11 py-3 font-semibold text-base text-slate-600">
                        Hours of Operation
                    </div>
                    {/* <div className="flex flex-col">
                        <div className={
                            clsx(
                                "basis-11 bg-slate-150 px-2 py-3 rounded-sm grid grid-cols-2",
                                { "font-semibold": 1 == new Date().getDay() }
                            )}>
                            <span>Monday</span>
                            <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div className={
                            clsx(
                                "basis-11 px-2 py-3 rounded-sm grid grid-cols-2",
                                { "font-semibold": 2 == new Date().getDay() }
                            )
                        }>
                            <span>Tuesday</span>
                            <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div className={clsx(
                            "basis-11 bg-slate-150 px-2 py-3 rounded-sm grid grid-cols-2",
                            { "font-semibold": 3 == new Date().getDay() }
                        )}>
                            <span>Wednesday</span>
                            <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div className={
                            clsx(
                                "basis-11 px-2 py-3 rounded-sm grid grid-cols-2",
                                { "font-semibold": 4 == new Date().getDay() }
                            )}>
                            <span>Thursday</span>
                            <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div className={
                            clsx(
                                "basis-11  bg-slate-150 px-2 py-3 rounded-sm grid grid-cols-2",
                                { "font-semibold": 5 == new Date().getDay() }
                            )}>
                            <span>Friday</span>
                            <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div className={
                            clsx(
                                "basis-11 px-2 py-3 rounded-sm grid grid-cols-2",
                                { "font-semibold": 6 == new Date().getDay() }
                            )}>
                            <span>Saturday</span>
                            <span>Closed</span>
                        </div>
                        <div className={
                            clsx(
                                "basis-11  bg-slate-150 px-2 py-3 rounded-sm grid grid-cols-2",
                                { "font-semibold": 0 == new Date().getDay() }
                            )}>
                            <span>Sunday</span>
                            <span>Closed</span>
                        </div>
                    </div> */}
                    <WorkTime></WorkTime>
                </div>
            </div>
            <div className=" bg-aem-400 text-center text-white text-sm h-14 pt-4">
                auto sale & services
            </div>
        </>
    )
}

// export default function MobileMenu({ isMenuOpen,clickButton }: { isMenuOpen: boolean ,clickButton: () => void}) {
//     return (
//         <div id="mobile-menu" className={
//             clsx(
//                 "absolute top-0 left-0 h-screen w-screen xl:hidden transition print:hidden",
//                 { "hidden": !isMenuOpen }
//             )
//         }>
//             <div className="h-screen w-screen absolute inset-0 bg-white z-[150] flex flex-col">
//                 <MobileHeader isOpen={isMenuOpen} clickButton={clickButton}></MobileHeader>
//                 <div className="px-4 sm:px-8 pb-2 bg-white">
//                     {/* Nav menu */}
//                     <div>
//                         <div className="h-11 py-3 font-semibold text-base text-slate-500">
//                             Menu
//                         </div>
//                         <div className="flex flex-col">
//                             <Link className="basis-11 bg-slate-150 px-2 py-3 rounded-sm" href="./service">Service</Link>
//                             <Link className="basis-11 px-2 py-3 rounded-sm" href="./inventory">Inventory</Link>
//                             <Link className="basis-11 bg-slate-150 px-2 py-3 rounded-sm" href="./financing">Financing</Link>
//                             <Link className="basis-11 px-2 py-3 rounded-sm" href="./trade-in-request">Trade-In Request</Link>
//                             <Link className="basis-11 bg-slate-150 px-2 py-3 rounded-sm" href="./test-drive">Request a Test Drive</Link>
//                             <Link className="basis-11 px-2 py-3 rounded-sm" href="./about">About</Link>
//                             <Link className="basis-11 bg-slate-150 px-2 py-3 rounded-sm" href="./contact">Contact</Link>
//                         </div>
//                     </div>
//                     <div>
//                         <AddressCard></AddressCard>
//                     </div>
//                     <div className="">
//                         <div className="h-11 py-3 font-semibold text-base text-slate-600">
//                             Hours of Operation
//                         </div>
//                         <div className="flex flex-col">
//                             <div className={
//                                 clsx(
//                                     "basis-11 bg-slate-150 px-2 py-3 rounded-sm grid grid-cols-2",
//                                     { "font-semibold": 1 == new Date().getDay() }
//                                 )}>
//                                 <span>Monday</span>
//                                 <span>9:00 AM - 6:00 PM</span>
//                             </div>
//                             <div className={
//                                 clsx(
//                                     "basis-11 px-2 py-3 rounded-sm grid grid-cols-2",
//                                     { "font-semibold": 2 == new Date().getDay() }
//                                 )
//                             }>
//                                 <span>Tuesday</span>
//                                 <span>9:00 AM - 6:00 PM</span>
//                             </div>
//                             <div className={clsx(
//                                 "basis-11 bg-slate-150 px-2 py-3 rounded-sm grid grid-cols-2",
//                                 { "font-semibold": 3 == new Date().getDay() }
//                             )}>
//                                 <span>Wednesday</span>
//                                 <span>9:00 AM - 6:00 PM</span>
//                             </div>
//                             <div className={
//                                 clsx(
//                                     "basis-11 px-2 py-3 rounded-sm grid grid-cols-2",
//                                     { "font-semibold": 4 == new Date().getDay() }
//                                 )}>
//                                 <span>Thursday</span>
//                                 <span>9:00 AM - 6:00 PM</span>
//                             </div>
//                             <div className={
//                                 clsx(
//                                     "basis-11  bg-slate-150 px-2 py-3 rounded-sm grid grid-cols-2",
//                                     { "font-semibold": 5 == new Date().getDay() }
//                                 )}>
//                                 <span>Friday</span>
//                                 <span>9:00 AM - 6:00 PM</span>
//                             </div>
//                             <div className={
//                                 clsx(
//                                     "basis-11 px-2 py-3 rounded-sm grid grid-cols-2",
//                                     { "font-semibold": 6 == new Date().getDay() }
//                                 )}>
//                                 <span>Saturday</span>
//                                 <span>Closed</span>
//                             </div>
//                             <div className={
//                                 clsx(
//                                     "basis-11  bg-slate-150 px-2 py-3 rounded-sm grid grid-cols-2",
//                                     { "font-semibold": 0 == new Date().getDay() }
//                                 )}>
//                                 <span>Sunday</span>
//                                 <span>Closed</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className=" bg-aem-400 text-center text-white text-sm h-14 pt-4">
//                     auto sale & services
//                 </div>
//             </div>
//         </div>
//     )
// }