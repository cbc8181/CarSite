'use client';

import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import MobileHeader from "./mobile-header";
import { useState } from "react";

export const links = [
    { name: 'Home', href: '/' },
    { name: 'Inventory', href: '/inventory'},
    { name: 'Service', href: '/carservice' },
    // { name: 'Financing', href: '/financing' },
    // { name: 'Trade-In Request', href: '/trade-in-request' },
    // { name: 'Request a Test Drive', href: '/test-drive' },
    // { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.position = isOpen ?  'relative':'fixed';
    };

    return (
        <>
            <header className="header-desktop hidden border-b border-slate-300 xl:block w-full print:hidden" id="header">
                <div className="container">
                    <div className="flex flex-row py-3 items-center">
                        <div className="mr-3 flex items-center xl:content-start">
                            {/* home page */}
                            <Link href={links[0].href}>
                                <Image
                                    src={"/logo.jpg"}
                                    alt="logo image"
                                    width={180}
                                    height={100}
                                    className="mx-auto"
                                >
                                </Image>
                            </Link>
                        </div>
                        <div className="flex-grow flex items-center desktop-menu">
                            <div id="primary-menu" className="p-3 print:hidden w-full">
                                <div id="menu-navigation" className="flex justify-end gap-x-10">
                                    {links.map((link) => ( 
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                        >{link.name}</Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <MobileHeader isOpen={isOpen} clickButton={toggleMenu}></MobileHeader>
            <MobileMenu isMenuOpen={isOpen} clickButton={toggleMenu}></MobileMenu> */}

            <div className={`${isOpen ? "absolute top-0 left-0 h-screen w-screen max-w-full z-[150] bg-white overflow-y-scroll" : "relative"}`}>
                <MobileHeader isOpen={isOpen} clickButton={toggleMenu}></MobileHeader>
                {isOpen && <MobileMenu ></MobileMenu>}
            </div>
        </>
    )
}