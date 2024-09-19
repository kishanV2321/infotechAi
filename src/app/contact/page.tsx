"use client";

import React from "react";
import { BackgroundBeams } from "@/components/ui/background.beams";
import ContactDetails from "./ContactDetails";
import ContactUs from "./ContactUs";

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 relative">
            {' '}
            {/* Ensure the container is relative */}
            {/* BackgroundBeams with adjusted z-index */}
            <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
            {/* Content with higher z-index */}
            <div className="relative z-10">
                <div className="w-full">
                    <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
                        {/* Contact Details */}
                        <div className="lg:w-[40%] h-fit bg-[#2c333f] rounded-xl text-white">
                            <ContactDetails />
                        </div>
                        {/* Contact Form */}
                        <div className="lg:w-[60%]">
                            <ContactUs />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
