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
        <div className='w-screen lg:w-3/12 h-screen overflow-y-scroll z-20 bg-black p-4 mt-4 text-white'>
            <div className='flex flex-col space-y-3 mt-14 ml-4'>
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
            </div>

            <div className="flex flex-col space-y-3 mt-4 ml-4 text-base">
                <div className="flex flex-row items-center font-semibold text-lg" onClick={() => toggle("thirdpartyhardware")}>
                    Third Party Hardware Maintenance <HiArrowRight className="ml-1" />
                </div>
                <hr />
                {isOpenService === "thirdpartyhardware" &&
                    <>
                        <HoveredLink href={"/services/third-party-hardware/storage-maintenance"} onClick={toggleMenu}>Storage Maintenance</HoveredLink>
                        <HoveredLink href="/services/third-party-hardware/server-maintenance" onClick={toggleMenu}>Server Maintenance</HoveredLink>
                        <HoveredLink href="/services/third-party-hardware/network-maintenance" onClick={toggleMenu}>Network Maintenance</HoveredLink>
                    </>}
            </div>

            <div className="flex flex-col space-y-3 mt-4 ml-4 text-base">
                <div className="flex flex-row items-center font-semibold text-lg"
                    onClick={() => toggle("infrastructuremanage")}>
                    Infrastructure Managed Services <HiArrowRight className="ml-1" /></div>
                <hr />
                {isOpenService === "infrastructuremanage" &&
                    <>
                        <HoveredLink href="/services/infrastructure-services/hardware-monitoring" onClick={toggleMenu}>Hardware Monitoring</HoveredLink>
                        <HoveredLink href="/services/infrastructure-services/base-level-support" onClick={toggleMenu}>Base Level Support</HoveredLink>
                        <HoveredLink href="/services/infrastructure-services/plus-level-support" onClick={toggleMenu}>Plus Level Support</HoveredLink>
                        <HoveredLink href="/services/infrastructure-services/full-level-support" onClick={toggleMenu}>Full Level Support</HoveredLink>
                        <HoveredLink href="/services/infrastructure-services/vmware-technical-support" onClick={toggleMenu}>VMware Technical Support</HoveredLink>
                    </>}
            </div>

            <div className="flex flex-col space-y-3 mt-4 ml-4 text-base">
                <HoveredLink href={"/services"}>
                    <div className="flex flex-row items-center font-semibold text-lg"
                        onClick={() => toggle("professionalservice")}>
                        Professional Services <HiArrowRight className="ml-1" /></div>
                </HoveredLink>
                <hr />
                {isOpenService === "professionalservice" &&
                    <>
                        <HoveredLink href="/services/professional-services/wireless-transformation" onClick={toggleMenu}>Wireless Transformation</HoveredLink>
                        <HoveredLink href="/services/professional-services/it-asset-disposition" onClick={toggleMenu}>IT Asset Disposition</HoveredLink>
                        <HoveredLink href="/services/professional-services/storage-and-data-migration" onClick={toggleMenu}>Storage & Data Migration</HoveredLink>
                        <HoveredLink href="/services/professional-services/cloud-support" onClick={toggleMenu}>Cloud Support</HoveredLink>
                        <HoveredLink href="/services/professional-services/imac-services" onClick={toggleMenu}>IMAC Services</HoveredLink>
                        <HoveredLink href="/services/professional-services/it-deployements" onClick={toggleMenu}>IT Deployments</HoveredLink>
                        <HoveredLink href="/services/professional-services/software-development" onClick={toggleMenu}>Software Development</HoveredLink>
                    </>}
            </div>
        </div>
    )
}

export default NavbarItem