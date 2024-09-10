"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [activeMainService, setActiveMainService] = useState<string | null>(null);

    const toggleMainService = (service: string) => {
        setActiveMainService((activeMainService === service) ? null : service)
    }
    return (
        <div
            className={cn("fixed top-0 sm:top-6 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                    <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
                </Link>
                {/* <Link href={"/services"}>
                    <MenuItem setActive={setActive} active={active} item="Our Services"></MenuItem>
                </Link> */}

                <MenuItem setActive={setActive} active={active} item="Services">
                    <div className="sm:flex flex-row hidden space-x-8 ">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href={"/services"}>
                                <div className="font-extrabold">
                                    Third Party Hardware</div>
                                <div className="font-extrabold">Maintenance</div>
                            </HoveredLink>
                            <hr />
                            <HoveredLink href="/storagemaintenance">Storage Maintenance</HoveredLink>
                            <HoveredLink href="/servermaintenance">Server Maintenance</HoveredLink>
                            <HoveredLink href="/networkmaintenace">Network Maintenance</HoveredLink>
                        </div>

                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href={"/services"}>
                                <div className="font-extrabold">
                                    Infrastructure Managed</div>
                                <div className="font-extrabold">Services</div>
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
                                <div className="font-extrabold">
                                    Professional Services</div>
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

                    {/* Small Screen */}
                    <div className="sm:hidden block">
                        <div className="flex flex-col space-y-4">
                            <button onClick={() => toggleMainService("ThirdParty")}>
                                <div className="font-semibold">
                                    Third Party Hardware</div>
                                <div className="font-semibold">Maintenance</div>
                            </button>
                            {activeMainService === "ThirdParty" && (
                                <div className="flex flex-col items-center space-y-2">
                                    <HoveredLink href="/storagemaintenance">Storage Maintenance</HoveredLink>
                                    <HoveredLink href="/servermaintenance">Server Maintenance</HoveredLink>
                                    <HoveredLink href="/networkmaintenance">Network Maintenance</HoveredLink>
                                </div>
                            )}

                            <button onClick={() => toggleMainService("Infrastructure")}>
                                <div className="font-semibold">
                                    Infrastructure Managed</div>
                                <div className="font-semibold">Services</div>
                            </button>
                            {activeMainService === "Infrastructure" && (
                                <div className="flex flex-col items-center space-y-2">
                                    <HoveredLink href="/hardwaremonitoring">Hardware Monitoring</HoveredLink>
                                    <HoveredLink href="/baselevelsupport">Base Level Support</HoveredLink>
                                    <HoveredLink href="/pluslevelsupport">Plus Level Support</HoveredLink>
                                    <HoveredLink href="/hardlevelsupport">Full Level Support</HoveredLink>
                                </div>
                            )}

                            <button onClick={() => toggleMainService("Professional")}>
                                <div className="font-semibold">
                                    Professional Services</div>
                            </button>
                            {activeMainService === "Professional" && (
                                <div className="flex flex-col items-center space-y-2">
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
                            )}
                        </div>
                    </div>

                </MenuItem>
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar
