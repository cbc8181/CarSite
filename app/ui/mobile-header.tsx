import Image from "next/image";
import Link from "next/link";
import { PhoneIcon } from "@heroicons/react/24/outline"
import { MapPinIcon } from "@heroicons/react/24/outline"


export default function MobileHeader({ isOpen, clickButton }: { isOpen: boolean, clickButton: () => void }) {
    return (
        <header className="xl:hidden border-b border-slate-300 shadow-sm print:hidden">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
                <div className="h-auto mx-3">
                    {/* <div className="bg-center mx-auto md:ml-0" style={{backgroundImage:'url(/Seanlogo.png)'}}></div> */}
                    <Link href="/">
                        <Image
                            src={"/logo.jpeg"}
                            alt="logo image"
                            width={180}
                            height={100}
                            className="mx-auto my-4 md:ml-0"
                        >
                        </Image>
                    </Link>
                </div>
                <div className="grow flex flex-row w-full justify-between items-center gap-4 h-18 border-t md:border-0">
                    <div className="h-full grow border-l flex flex-row gap-2 pl-2  items-center">
                        {!isOpen &&
                            <Link className="px-2 py-2 h-fit grow md:grow-0  bg-aem-500 hover:bg-aem-600   text-white   rounded-sm text-center" href="./service">
                                <PhoneIcon className="h-6 w-6 rotate-[15deg] mx-auto" />
                            </Link>}
                        {!isOpen &&
                            <Link className="px-2 py-2 h-fit grow md:grow-0 bg-aem-500 hover:bg-aem-600 text-white rounded-sm text-center" href="./service">
                                <MapPinIcon className="h-6 w-6 mx-auto" />
                            </Link>}
                    </div>
                    <div className="pr-2 h-full flex justify-center items-center border-l pl-2">
                        <div className="text-center h-fit cursor-pointer" onClick={() => clickButton()}>
                            {isOpen ? 'Close Menu' : 'Open Menu'}
                            {/* Open Menu */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
        // </div>
    )
}

// export default function MobileHeader({clickButton}: {clickButton: () => void}){
//     return (
//         <header className="xl:hidden border-b border-slate-300 shadow-sm print:hidden">
//             <div className="flex flex-col md:flex-row md:justify-between items-center">
//                 <div className="h-auto mx-3">
//                     <Image
//                         src={"/Seanlogo.png"}
//                         alt="logo"
//                         width={200}
//                         height={100}
//                         className="mx-auto my-4 md:ml-0"
//                     >
//                     </Image>
//                 </div>
//                 <div className="grow flex flex-row w-full justify-between items-center gap-4 h-18 border-t md:border-0">
//                     <div className="h-full grow border-l flex flex-row gap-2 pl-2  items-center">
//                         <Link className="px-2 py-2 h-fit grow md:grow-0 md:basis-16 bg-aem-600 hover:bg-aem-500 text-white rounded-sm text-center" href="./service">call</Link>
//                         <Link className="px-2 py-2 h-fit grow md:grow-0 md:basis-16 bg-aem-600 hover:bg-aem-500 text-white rounded-sm text-center" href="./service">Loca</Link>
//                     </div>
//                     <div className="mr-2 h-full flex justify-center items-center border-l pl-2">
//                         <div className="m-auto text-center h-fit" onClick={()=>clickButton()}>
//                             Open Menu
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     )
// }