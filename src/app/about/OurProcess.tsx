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
        heading: "World-Class Learning for",
        highlightText: "Anyone, Anywhere",
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
        BtnText: "Learn More",
        BtnLink: "/",
    },
    {
        order: 1,
        heading: "Curriculum Based on Industry Needs",
        description:
            "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
        order: 2,
        heading: "Our Learning Methods",
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
        order: 3,
        heading: "Certification",
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
        order: 4,
        heading: `Rating "Auto-grading"`,
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
        order: 5,
        heading: "Ready to Work",
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring",
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
                                        Contact Us
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
