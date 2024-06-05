"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

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
                <Link href={"/services"}>
                    <MenuItem setActive={setActive} active={active} item="Our Services"></MenuItem>
                </Link>

                {/* <MenuItem setActive={setActive} active={active} item="Our Services">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/services">All Services</HoveredLink>
                        <HoveredLink href="/webdevelopment">Web Development</HoveredLink>
                        <HoveredLink href="/appdevelopment">App Development</HoveredLink>
                        <HoveredLink href="/seo">Custom Software Development</HoveredLink>
                        <HoveredLink href="/app-dev">Search Engine Optimization</HoveredLink>
                    </div>
                </MenuItem> */}
                <Link href={"/contact"}>
                    <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar
