import React from "react";
import Image from "next/image"; // Import Next.js Image component
// import TimeLineImage from "../../../assets/Images/TimelineImage.png";
// import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
// import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
// import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
// import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

// Define the type for TimeLine elements
interface TimeLineItem {
    Logo: String; // Use StaticImageData type for imported images
    Heading: string;
    Description: string;
}

const TimeLine: TimeLineItem[] = [
    {
        Logo: "",
        Heading: "Leadership",
        Description: "Fully committed to the success company",
    },
    {
        Logo: '',
        Heading: "Responsibility",
        Description: "Students will always be our top priority",
    },
    {
        Logo: '',
        Heading: "Flexibility",
        Description: "The ability to switch is an important skill",
    },
    {
        Logo: '',
        Heading: "Solve the problem",
        Description: "Code your way to a solution",
    },
];

const OurCommitment: React.FC = () => {
    return (
        <div className="bg-black">
            <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-8 py-12 text-white">
                {/* Job that is in Demand - Section 1 */}
                <div className="lg:mt-20 mb-10 mt-[100px] flex flex-col lg:flex-row justify-between gap-7 lg:gap-0">
                    <div className="text-4xl font-semibold lg:w-[45%]">
                        Get the skills you need for a{" "}
                        <span
                            className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB]
            text-transparent bg-clip-text font-bold"
                        >
                            job that is in demand.
                        </span>
                    </div>
                    <div className="flex flex-col gap-10 lg:w-[40%] items-start">
                        <div className="text-[16px]">
                            The modern StudyNotion is the dictates its own terms. Today, to
                            be a competitive specialist requires more than professional
                            skills.
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center">
                        <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
                            {TimeLine.map((ele, i) => {
                                return (
                                    <div className="flex flex-col lg:gap-3" key={i}>
                                        <div className="flex gap-6" key={i}>
                                            <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                                                {/* Use Next.js Image component */}
                                                <Image src="" alt={ele.Heading} />
                                            </div>
                                            <div>
                                                <h2 className="font-semibold text-[18px]">{ele.Heading}</h2>
                                                <p className="text-base">{ele.Description}</p>
                                            </div>
                                        </div>
                                        <div
                                            className={`hidden ${TimeLine.length - 1 === i ? "hidden" : "lg:block"
                                                }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                                        ></div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
                            <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 ">
                                {/* Section 1 */}
                                <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-4 py-4 lg:px-14 bg-red-400">
                                    <h1 className="text-3xl font-bold w-[75px]">10</h1>
                                    <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                                        Years experiences
                                    </h1>
                                </div>

                                {/* Section 2 */}
                                <div className="flex gap-5 items-center lg:px-14 px-7 bg-red-400">
                                    <h1 className="text-3xl font-bold w-[75px]">250</h1>
                                    <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                                        types of courses
                                    </h1>
                                </div>
                            </div>
                            <Image
                                src="https://ik.imagekit.io/kvimages/Background%20Img/pexels-zhang-kaiyv-1434580.jpg?updatedAt=1709188372849"
                                alt="timelineImage"
                                className="shadow-white shadow-[20px_20px_0px_0px] object-cover lg:h-fit"
                                width={700}  // Replace with your desired width
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCommitment;
