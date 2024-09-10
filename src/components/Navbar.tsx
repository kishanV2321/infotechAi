"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
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
                {/* large Screen */}
                    <div className="sm:flex flex-row hidden space-x-8 ">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href={"/services"}>
                                <div className="font-extrabold">
                                    Third Party Hardware</div>
                                <div className="flex flex-row items-center font-extrabold">
                                    Maintenance <HiArrowRight className="ml-1"/></div>
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
                                <div className="flex flex-row items-center font-extrabold">Services <HiArrowRight className="ml-1"/></div>
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
                                    Professional Services <HiArrowRight className="ml-1"/></div>
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
                    <div className="sm:hidden block min-h-screen min-w-80">
                    <div className="flex flex-col space-y-3">
                            <HoveredLink href={"/services"}>
                                <div className="flex flex-row items-center font-semibold text-lg">
                                    Third Party Hardware Maintenance <HiArrowRight className="ml-1"/></div>
                            </HoveredLink>
                            <hr />
                            <HoveredLink href="/storagemaintenance">Storage Maintenance</HoveredLink>
                            <HoveredLink href="/servermaintenance">Server Maintenance</HoveredLink>
                            <HoveredLink href="/networkmaintenace">Network Maintenance</HoveredLink>
                        </div>

                        <div className="flex flex-col space-y-3 mt-4">
                            <HoveredLink href={"/services"}>
                                <div className="flex flex-row items-center font-semibold text-lg">
                                    Infrastructure Managed Services <HiArrowRight className="ml-1"/></div>
                            </HoveredLink>
                            <hr />
                            <HoveredLink href="/hardwaremonitoring">Hardware Monitoring</HoveredLink>
                            <HoveredLink href="/baselevelsupport">Base Level Support</HoveredLink>
                            <HoveredLink href="/pluslevelsupport">Plus Level Support</HoveredLink>
                            <HoveredLink href="/hardlevelsupport">Full Level Support</HoveredLink>
                            <HoveredLink href="/vmwaretechnical">VMware Technical Support</HoveredLink>
                        </div>

                        <div className="flex flex-col space-y-3 mt-4">
                            <HoveredLink href={"/services"}>
                                <div className="flex flex-row items-center font-semibold text-lg">
                                    Professional Services <HiArrowRight className="ml-1"/></div>
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
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar
