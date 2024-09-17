"use client";

import React from 'react'
import { HiArrowRight } from "react-icons/hi";
import { HoveredLink } from "./ui/navbar-menu";

function NavbarItem() {
    return (
        <div className='w-screen lg:w-3/12 h-screen overflow-y-scroll z-20 bg-black p-4 mt-4'>
            <div className="flex flex-col space-y-3 mt-14 ml-4">
                <HoveredLink href={"/services"}>
                    <div className="flex flex-row items-center font-semibold text-lg">
                        Third Party Hardware Maintenance <HiArrowRight className="ml-1" /></div>
                </HoveredLink>
                <hr />
                <HoveredLink href="/storagemaintenance">Storage Maintenance</HoveredLink>
                <HoveredLink href="/servermaintenance">Server Maintenance</HoveredLink>
                <HoveredLink href="/networkmaintenace">Network Maintenance</HoveredLink>
            </div>

            <div className="flex flex-col space-y-3 mt-4 ml-4">
                <HoveredLink href={"/services"}>
                    <div className="flex flex-row items-center font-semibold text-lg ">
                        Infrastructure Managed Services <HiArrowRight className="ml-1" /></div>
                </HoveredLink>
                <hr />
                <HoveredLink href="/hardwaremonitoring">Hardware Monitoring</HoveredLink>
                <HoveredLink href="/baselevelsupport">Base Level Support</HoveredLink>
                <HoveredLink href="/pluslevelsupport">Plus Level Support</HoveredLink>
                <HoveredLink href="/hardlevelsupport">Full Level Support</HoveredLink>
                <HoveredLink href="/vmwaretechnical">VMware Technical Support</HoveredLink>
            </div>

            <div className="flex flex-col space-y-3 mt-4 ml-4">
                <HoveredLink href={"/services"}>
                    <div className="flex flex-row items-center font-semibold text-lg">
                        Professional Services <HiArrowRight className="ml-1" /></div>
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
    )
}

export default NavbarItem