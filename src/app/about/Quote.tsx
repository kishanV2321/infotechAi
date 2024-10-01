import React from "react";

const Quote: React.FC = () => {
    return (
        <div className="text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
            <h2 className="text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
            We are passionate about transforming the way businesses operate. Our innovative solutions{" "}
                <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
                integrate technological expertise
                </span>
                <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
                    {" "}
                    comprehensive support
                </span>
                , and a client-centric approach to deliver an
                <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
                    {" "}
                    unparalleled IT experience.
                </span>
            </h2>
        </div>
    );
};

export default Quote;
