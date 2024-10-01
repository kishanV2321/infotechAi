import React from "react";
import Button from "@/components/Button";

// Define the type for the items in LearningGridArray
interface OurProcessGridItem {
    order: number;
    heading: string;
    highlightText?: string; // Optional, since not all items have this
    description: string;
    BtnText?: string; // Optional, since not all items have this
    BtnLink?: string; // Optional, since not all items have this
}

// Define the array with the appropriate type
const OurProcessGridArray: OurProcessGridItem[] = [
    {
        order: -1,
        heading: "Comprehensive IT Solutions for",
        highlightText: "Businesses of All Sizes",
        description:
            "We collaborate with leading enterprises to deliver scalable, secure, and innovative IT solutions tailored to your organization’s needs.",
        BtnText: "Discover More",
        BtnLink: "/contact",
    },
    {
        order: 1,
        heading: "Tailored Support Services",
        description:
            "Our support services are customized to meet the unique requirements of your IT infrastructure, ensuring optimal performance and reliability.",
    },
    {
        order: 2,
        heading: "Proactive Monitoring & Maintenance",
        description:
            "We implement state-of-the-art monitoring tools to proactively address potential issues, minimizing downtime and maximizing efficiency.",
    },
    {
        order: 3,
        heading: "Expert Consultation",
        description:
            "Our team of experienced consultants works closely with your organization to identify challenges and provide strategic solutions for your IT landscape.",
    },
    {
        order: 4,
        heading: "Robust Security Solutions",
        description:
            "We prioritize your security with comprehensive solutions designed to safeguard your data and protect against evolving cyber threats.",
    },
    {
        order: 5,
        heading: "Seamless Cloud Integration",
        description:
            "We help you transition smoothly to the cloud, ensuring your infrastructure is agile, scalable, and aligned with your business goals.",
    },
];


const OurProcess: React.FC = () => {
    return (
        <div className="grid mx-auto w-[350px] xl:w-fit grid-cols-1 xl:grid-cols-4 mb-12">
            {OurProcessGridArray.map((card, i) => (
                <div
                    key={i}
                    className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"} ${card.order % 2 === 1
                            ? "bg-red-700 h-[294px]"
                            : card.order % 2 === 0
                                ? "bg-cyan-800 h-[294px]"
                                : "bg-transparent"
                        } ${card.order === 3 && "xl:col-start-2"}`}
                >
                    {card.order < 0 ? (
                        <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                            <div className="text-4xl font-semibold ">
                                {card.heading}{" "}
                                {card.highlightText && (
                                    <span
                                        className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]
            text-transparent bg-clip-text font-bold"
                                    >
                                        {card.highlightText}
                                    </span>
                                )}
                            </div>
                            <p className="text-richblack-300 font-medium">
                                {card.description}
                            </p>
                            {card.BtnText && card.BtnLink && (
                                <div className="w-fit mt-2">
                                    <Button active={true} linkto={"/contact"}>
                                        Contact
                                    </Button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="p-8 flex flex-col gap-8">
                            <h2 className="text-richblack-5 text-lg">{card.heading}</h2>
                            <p className="text-richblack-300 font-medium">
                                {card.description}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default OurProcess;
