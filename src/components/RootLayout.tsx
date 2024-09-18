// RootLayout.tsx (Client Component)
"use client";

import { Inter } from "next/font/google";
import "../app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "./Footer";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <html lang="en" className="dark">
            <body className={inter.className}>
                <div className="relative w-full flex items-center justify-center">
                    <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                </div>
                {/* Add the conditional class based on isMenuOpen */}
                <div className={isMenuOpen ? "hidden" : ""}>
                    {children}
                </div>
                <div><Footer /></div>
            </body>
        </html>
    );
}