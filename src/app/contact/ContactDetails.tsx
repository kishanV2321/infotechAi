import React from "react";
import * as Icon1 from "react-icons/bi";
import * as Icon2 from "react-icons/io5";
import * as Icon3 from "react-icons/hi2";

// Define an interface for the contactDetails array
interface ContactDetail {
    icon: string;
    heading: string;
    description: string;
    details: string;
}

// Contact details array with typed objects
const contactDetails: ContactDetail[] = [
    {
        icon: "HiChatBubbleLeftRight",
        heading: "Chat on us",
        description: "Our friendly team is here to help.",
        details: "digtal4indiait@gmail.com",
    },
    {
        icon: "BiWorld",
        heading: "Visit us",
        description: "Come and say hello at our office HQ.",
        details:
            "G1, E53 , SLF VED VIHAR , GHAZIABAD-201102",
    },
    {
        icon: "IoCall",
        heading: "Call us",
        description: "Mon - Fri From 8am to 5pm",
        details: "+91-7042610160, 8368058556",
    },
];

const ContactDetails: React.FC = () => {
    return (
        <div className="flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6">
            {contactDetails.map((ele, i) => {
                // Dynamically get the correct icon based on the icon name
                const Icon = Icon1[ele.icon as keyof typeof Icon1] ||
                    Icon2[ele.icon as keyof typeof Icon2] ||
                    Icon3[ele.icon as keyof typeof Icon3];

                // Type check for the Icon
                if (!Icon) {
                    return null; // Prevent errors if icon is not found
                }

                return (
                    <div
                        className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200"
                        key={i}
                    >
                        <div className="flex flex-row items-center gap-3">
                            <Icon size={25} />
                            <h2 className="text-lg font-semibold text-richblack-5">
                                {ele.heading}
                            </h2>
                        </div>
                        <p className="font-medium">{ele.description}</p>
                        <p className="font-semibold">{ele.details}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ContactDetails;
