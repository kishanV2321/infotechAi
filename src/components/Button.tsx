import React from "react";
import Link from "next/link";

// Define the prop types
interface CTAButtonProps {
    children: React.ReactNode; // Content inside the button
    active?: boolean; // Optional prop for active state
    linkto: string; // The link destination
}

const Button: React.FC<CTAButtonProps> = ({ children, active = false, linkto }) => {
    return (
        <Link href={linkto} passHref>
            <div
                className={`text-center text-[13px] sm:text-[16px] px-4 py-3 rounded-md font-bold
        shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] ${active ? "bg-yellow-500 text-black" : "bg-richblack-800"
                    } hover:shadow-none hover:scale-95 transition-all duration-200`}
            >
                {children}
            </div>
        </Link>
    );
};

export default Button;
