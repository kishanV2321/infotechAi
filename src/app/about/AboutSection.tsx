import React from "react";
// import BannerImage1 from "../../../assets/Images/aboutus1.webp";
// import BannerImage2 from "../../../assets/Images/aboutus2.webp";
// import BannerImage3 from "../../../assets/Images/aboutus3.webp";
import Quote from "./Quote";
import OurProcess from "./OurProcess";
import Image from "next/image";
// import FoundingStory from "../../../assets/Images/FoundingStory.png";


const AboutSection: React.FC = () => {
    return (
        <div className="w-full">
            <section className="bg-[#2c333f] py-12">
                <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-6 text-center text-white">
                    <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
                        <h2 className="text-center text-4xl font-semibold tracking-[-0.72px]">
                            Empowering Digital Transformation Through{" "}
                            <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
                                Innovative IT Solutions
                            </span>
                        </h2>
                        <p className="mx-auto mt-4 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
                            Info Tech AI is dedicated to empowering businesses through innovative IT solutions. We are passionate about transforming your digital landscape by providing expert services in cloud support, datacenter management, and OS support. Our commitment to excellence ensures that you can achieve your goals with the latest technologies while optimizing performance and security across your infrastructure.
                        </p>
                    </header>
                    <div className="sm:h-[70px] lg:h-[150px]"></div>
                    <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[50%] grid-cols-3 gap-3 lg:gap-5">
                        <div className="relative w-full h-[100px] md:h-[300px]">
                            <Image
                                src="https://ik.imagekit.io/kvimages/Infotech-Ai/Aigenerated/software_development_service_4fb6b0e7-5b58-41d6-8457-7a00d82c30db.png?updatedAt=1727778920538"
                                alt="Banner 1"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="relative w-full h-[100px] md:h-[300px]">
                            <Image
                                src="https://ik.imagekit.io/kvimages/Infotech-Ai/cloud-6515064_1280.jpg?updatedAt=1727778861807"
                                alt="Banner 2"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="relative w-full h-[100px] md:h-[300px]">
                            <Image
                                src="https://ik.imagekit.io/kvimages/Infotech-Ai/Aigenerated/storage,server,_network_maintenanace_c1d7627e-1f9b-4f3c-8928-1154ca10f7ad.png?updatedAt=1727778920724"
                                alt="Banner 3"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Quote Section */}
            <section className="border-b border-richblack-700">
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
                    <div className="h-[100px] "></div>
                    <Quote />
                </div>
            </section>

            <section>
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
                    <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
                        <div className="my-24 flex lg:w-[50%] flex-col gap-10">
                            <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
                                Our Founding Story
                            </h1>
                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                                Our journey at Info Tech AI began with a shared vision and passion for empowering businesses through cutting-edge IT solutions. It started with a group of technology enthusiasts, engineers, and industry experts who recognized the challenges organizations faced in managing their IT infrastructure in an ever-evolving digital landscape.
                            </p>
                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                                Having worked in various sectors, we understood the complexities and limitations of traditional IT support. We believed that businesses should not struggle with fragmented solutions or face downtime that hampers growth. Our vision was to create a comprehensive platform that provides seamless integration, exceptional support, and innovative services, enabling businesses to thrive in a competitive environment and maximize their potential.
                            </p>
                        </div>

                        <div>
                            <Image
                                src="https://ik.imagekit.io/kvimages/cardimages/b8.jpg?updatedAt=1704467488087"
                                alt="Founding Story"
                                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
                                height={400}
                                width={500}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
                        <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                            <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%]">
                                Our Vision
                            </h1>
                            <p className="text-base font-medium text-white lg:w-[95%]">
                                With this vision in mind, we embarked on a journey to empower businesses through innovative IT solutions. Our dedicated team of experts works tirelessly to deliver robust and reliable services that combine advanced technology with personalized support, ensuring seamless integration and optimization of IT infrastructure. We aim to foster a secure and efficient digital environment where organizations can thrive and adapt to the ever-changing landscape of the digital world.
                            </p>
                        </div>
                        <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                            <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%]">
                                Our Mission
                            </h1>
                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                                Our mission extends beyond providing exceptional IT solutions; we aim to build lasting partnerships with businesses. We are committed to creating a supportive environment where organizations can leverage our expertise to optimize their IT infrastructure. We believe that success is achieved through collaboration and innovation, and we foster this spirit by offering tailored solutions, proactive support, and continuous improvement initiatives that empower our clients to excel in their digital transformation journey.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
                <OurProcess />

            </section>
        </div>
    );
};

export default AboutSection;
