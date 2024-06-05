'use client'
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { Vortex } from "./ui/vortex";

function Herosection() {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            {/* <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="blue"
            /> */}
            <Vortex
                backgroundColor="black"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
                <div className="p-4 relative z-10 w-full text-center">
                    <h1 className="mt-20 md:mt-0 text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                        Web application development services using industry leading
                        technologies
                    </h1>
                    <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                        Harness the power of modern web frameworks to build progressive web
                        apps that scale
                    </p>
                    <div className="mt-4">
                        <Link href={"/services"}>
                            <Button
                                borderRadius="1.75rem"
                                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                            >
                                Let&apos;s get started!
                            </Button>
                        </Link>
                    </div>
                </div>
            </Vortex>
        </div>
    );
}

export default Herosection;
