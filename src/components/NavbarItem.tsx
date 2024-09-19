"use client";

import React, { useState } from 'react'
import { HiArrowRight } from "react-icons/hi";
import { VscArrowDown } from "react-icons/vsc";
import { HoveredLink } from "./ui/navbar-menu";


interface NavbarItemProps {
    toggleMenu: () => void;
}

function NavbarItem({ toggleMenu }: NavbarItemProps) {
    const [isOpenService, setOpenService] = useState<string | null>(null);

    const toggle = (service: string) => {
        setOpenService(service)
    }


    return (
        <div className='w-screen lg:w-3/12 h-screen overflow-y-scroll z-20 bg-black p-4 mt-4'>
            <div className="flex flex-col space-y-3 mt-14 ml-4">
                <HoveredLink href={"/"} onClick={toggleMenu}>
                    <h2 className="text-lg text-teal-600 font-semibold tracking-wide uppercase">Home</h2>
                </HoveredLink>
                <hr />
                <HoveredLink href={"/about"} onClick={toggleMenu}>
                    <h2 className="text-lg text-teal-600 font-semibold tracking-wide uppercase">About Us</h2>
                </HoveredLink>
                <hr />
                <HoveredLink href={"/services"} onClick={toggleMenu}>
                    <h2 className="flex flex-row items-center text-lg text-teal-600 font-semibold tracking-wide uppercase">Services <VscArrowDown className='ml-1' /></h2>
                </HoveredLink>
                <hr />
                <div className="flex flex-row items-center font-semibold text-lg" onClick={() => toggle("thirdpartyhardware")}>
                    Third Party Hardware Maintenance <HiArrowRight className="ml-1" />
                </div>
                <hr />
                {isOpenService === "thirdpartyhardware" &&
                    <>
                        <HoveredLink href="/storagemaintenance" onClick={toggleMenu}>Storage Maintenance</HoveredLink>
                        <HoveredLink href="/servermaintenance" onClick={toggleMenu}>Server Maintenance</HoveredLink>
                        <HoveredLink href="/networkmaintenace" onClick={toggleMenu}>Network Maintenance</HoveredLink>
                    </>}
            </div>

            <div className="flex flex-col space-y-3 mt-4 ml-4">
                <div className="flex flex-row items-center font-semibold text-lg"
                    onClick={() => toggle("infrastructuremanage")}>
                    Infrastructure Managed Services <HiArrowRight className="ml-1" /></div>
                <hr />
                {isOpenService === "infrastructuremanage" &&
                    <>
                        <HoveredLink href="/hardwaremonitoring" onClick={toggleMenu}>Hardware Monitoring</HoveredLink>
                        <HoveredLink href="/baselevelsupport" onClick={toggleMenu}>Base Level Support</HoveredLink>
                        <HoveredLink href="/pluslevelsupport" onClick={toggleMenu}>Plus Level Support</HoveredLink>
                        <HoveredLink href="/hardlevelsupport" onClick={toggleMenu}>Full Level Support</HoveredLink>
                        <HoveredLink href="/vmwaretechnical" onClick={toggleMenu}>VMware Technical Support</HoveredLink>
                    </>}
            </div>

            <div className="flex flex-col space-y-3 mt-4 ml-4">
                <HoveredLink href={"/services"}>
                    <div className="flex flex-row items-center font-semibold text-lg"
                        onClick={() => toggle("professionalservice")}>
                        Professional Services <HiArrowRight className="ml-1" /></div>
                </HoveredLink>
                <hr />
                {isOpenService === "professionalservice" &&
                    <>
                        <HoveredLink href="/hardwaremonitoring" onClick={toggleMenu}>Wireless Transformation</HoveredLink>
                        <HoveredLink href="/baselevelsupport" onClick={toggleMenu}>IT Asset Disposition</HoveredLink>
                        <HoveredLink href="/pluslevelsupport" onClick={toggleMenu}>Storage & Data Migration</HoveredLink>
                        <HoveredLink href="/hardlevelsupport" onClick={toggleMenu}>Data Center Relocation</HoveredLink>
                        <HoveredLink href="/cloudsupport" onClick={toggleMenu}>Cloud Support</HoveredLink>
                        <HoveredLink href="/remotehands" onClick={toggleMenu}>Remote Hands</HoveredLink>
                        <HoveredLink href="/imacservices" onClick={toggleMenu}>IMAC Services</HoveredLink>
                        <HoveredLink href="/itdeployments" onClick={toggleMenu}>IT Deployments</HoveredLink>
                        <HoveredLink href="/softwaredevelopment" onClick={toggleMenu}>Software Development</HoveredLink>
                    </>}
            </div>
        </div>
    )
}

export default NavbarItem