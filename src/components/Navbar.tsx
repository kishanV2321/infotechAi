"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { HiArrowRight } from "react-icons/hi";
import NavbarItem from "./NavbarItem";
import Image from 'next/image';
import Link from 'next/link';
import { ImCross } from "react-icons/im";

interface NavbarProps {
    isMenuOpen: Boolean;
    toggleMenu: () => void;
    className?: String;
}

function Navbar({ className, toggleMenu, isMenuOpen }: NavbarProps) {
    const [active, setActive] = useState<string | null>(null);


    return (
        <>
            <div className="bg-black fixed w-full z-50 top-0 start-0 border-b border-x-current">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image src="/docs/images/logo.svg" alt="Info TechAi" width={32} height={32} className="h-8" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Info TechAi</span>
                    </Link>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Link href={"/contact"}>
                            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-3 py-2 md:px-4 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                                Contact Us
                            </button>
                        </Link>
                        <button
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white hover:text-black rounded-lg md:hidden hover:bg-white border-2 border-white"
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            ) : (
                                <ImCross />
                            )}
                        </button>
                    </div>
                    <div className="items-center justify-between w-full md:flex md:w-auto md:order-1 hidden">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black">
                            <li>
                                <Link
                                    href="/"
                                >
                                    <MenuItem setActive={setActive} active={active} item="Home">
                                    </MenuItem>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                >
                                    <MenuItem setActive={setActive} active={active} item="About">
                                    </MenuItem>
                                </Link>
                            </li>

                            <li>
                                <Link href="#"
                                >
                                    <div className="flex">
                                        <MenuItem setActive={setActive} active={active} item="Services">
                                            <div className="flex flex-row space-x-8 ">
                                                <div className="flex flex-col space-y-4 text-sm">
                                                    <HoveredLink href={"/services"}>
                                                        <div className="font-extrabold">
                                                            Third Party Hardware</div>
                                                        <div className="flex flex-row items-center font-extrabold">
                                                            Maintenance <HiArrowRight className="ml-1" /></div>
                                                    </HoveredLink>
                                                    <hr />
                                                    <HoveredLink href={"/services/thirdpartyhardware/storagemaintenance"}>Storage Maintenance</HoveredLink>
                                                    <HoveredLink href="/servermaintenance">Server Maintenance</HoveredLink>
                                                    <HoveredLink href="/networkmaintenace">Network Maintenance</HoveredLink>
                                                </div>

                                                <div className="flex flex-col space-y-4 text-sm">
                                                    <HoveredLink href={"/services"}>
                                                        <div className="font-extrabold">
                                                            Infrastructure Managed</div>
                                                        <div className="flex flex-row items-center font-extrabold">Services <HiArrowRight className="ml-1" /></div>
                                                    </HoveredLink>
                                                    <hr />
                                                    <HoveredLink href="/hardwaremonitoring">Hardware Monitoring</HoveredLink>
                                                    <HoveredLink href="/baselevelsupport">Base Level Support</HoveredLink>
                                                    <HoveredLink href="/pluslevelsupport">Plus Level Support</HoveredLink>
                                                    <HoveredLink href="/hardlevelsupport">Full Level Support</HoveredLink>
                                                    <HoveredLink href="/vmwaretechnical">VMware Technical Support</HoveredLink>
                                                </div>

                                                <div className="flex flex-col space-y-4 text-sm">
                                                    <HoveredLink href={"/services"}>
                                                        <div className="flex flex-row items-center font-extrabold">
                                                            Professional Services <HiArrowRight className="ml-1" /></div>
                                                        <div className="mt-5"></div>
                                                    </HoveredLink>
                                                    <hr />
                                                    <HoveredLink href="/hardwaremonitoring">Wireless Transformation</HoveredLink>
                                                    <HoveredLink href="/baselevelsupport">IT Asset Disposition</HoveredLink>
                                                    <HoveredLink href="/pluslevelsupport">Storage & Data Migration</HoveredLink>
                                                    <HoveredLink href="/hardlevelsupport">Data Center Relocation</HoveredLink>
                                                    <HoveredLink href="/cloudsupport">Cloud Support</HoveredLink>
                                                    <HoveredLink href="/remotehands">Remote Hands</HoveredLink>
                                                    <HoveredLink href="/imacservices">IMAC Services</HoveredLink>
                                                    <HoveredLink href="/itdeployments">IT Deployments</HoveredLink>
                                                    <HoveredLink href="/softwaredevelopment">Software Development</HoveredLink>
                                                </div>
                                            </div>
                                        </MenuItem>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {isMenuOpen &&
                <div>
                    <NavbarItem toggleMenu={toggleMenu} />
                </div>}
        </>
    )
}

export default Navbar