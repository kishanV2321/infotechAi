import Image from "next/image";
// import Img2 from "../images/testimonials/pfp1.jpg";
// import Img3 from "../images/testimonials/pfp2.jpg";
import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

const Testimonials: React.FC = () => {
    return (
        <>
            <section id="testimonials" aria-label="What our customers are saying" className="bg-gradient-to-r from-indigo-800 via-purple-800 to-black py-20 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl md:text-center">
                        <h2 className="font-display font-bold tracking-tight text-4xl  text-white sm:text-4xl text-center">Customer Testimonials</h2>
                    </div>
                    <ul role="list"
                        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
                        <li className="shadow-[0_0_20px_0] shadow-[#f5ffb9] rounded-2xl">
                            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                                <li>
                                    <figure className="relative rounded-2xl bg-amber-50 p-6 shadow-xl shadow-slate-900/10">
                                        <svg aria-hidden="true"
                                            width="105" height="78" className="absolute left-6 top-6 fill-white">
                                            <path
                                                d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                                            </path>
                                        </svg>
                                        <blockquote className="relative">
                                            <p className="text-lg tracking-tight text-slate-900">The IT support team was incredibly responsive and resolved our issues quickly, ensuring minimal downtime for our operations. Highly recommend!</p>
                                        </blockquote>
                                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-400 pt-6">
                                            <div>
                                                <div className="font-display text-base text-slate-900">Sheryl Berge</div>
                                            </div>
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <Image
                                                    alt=""
                                                    className="h-14 w-14 object-cover"
                                                    style={{ color: "transparent" }}
                                                    src="https://randomuser.me/api/portraits/men/15.jpg"
                                                    width={56}  // 14 * 4 (1rem = 16px)
                                                    height={56} // 14 * 4 (1rem = 16px)
                                                />
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </li>
                        <li className="shadow-[0_0_20px_0] shadow-[#f5ffb9] rounded-2xl">
                            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                                <li>
                                    <figure className="relative rounded-2xl bg-lime-50 p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                                        width="105" height="78" className="absolute left-6 top-6 fill-white">
                                        <path
                                            d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                                        </path>
                                    </svg>
                                        <blockquote className="relative">
                                            <p className="text-lg tracking-tight text-slate-900">Exceptional service! They took the time to understand our needs and provided tailored solutions that significantly improved our IT infrastructure.</p>
                                        </blockquote>
                                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-400 pt-6">
                                            <div>
                                                <div className="font-display text-base text-slate-900">Leland Kiehn</div>
                                            </div>
                                            <div className="overflow-hidden rounded-full bg-slate-400">
                                                <Image
                                                    alt=""
                                                    className="h-14 w-14 object-cover"
                                                    style={{ color: "transparent" }}
                                                    src="https://randomuser.me/api/portraits/women/15.jpg"
                                                    width={56}  // 14 * 4 (1rem = 16px)
                                                    height={56} // 14 * 4 (1rem = 16px)
                                                />
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </li>
                        <li className="shadow-[0_0_20px_0] shadow-[#f5ffb9] rounded-2xl">
                            <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                                <li>
                                    <figure className="relative rounded-2xl bg-teal-50 p-6 shadow-xl shadow-slate-900/10"><svg aria-hidden="true"
                                        width="105" height="78" className="absolute left-6 top-6 fill-white">
                                        <path
                                            d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                                        </path>
                                    </svg>
                                        <blockquote className="relative">
                                            <p className="text-lg tracking-tight text-slate-900">Outstanding support throughout the process! Their expertise and dedication made our transition smooth and stress-free. Truly a reliable partner!</p>
                                        </blockquote>
                                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-400 pt-6">
                                            <div>
                                                <div className="font-display text-base text-slate-900">Peter Renolds</div>
                                            </div>
                                            <div className="overflow-hidden rounded-full bg-slate-50">
                                                <Image
                                                    alt=""
                                                    className="h-14 w-14 object-cover"
                                                    style={{ color: "transparent" }}
                                                    src="https://randomuser.me/api/portraits/men/10.jpg"
                                                    width={56}  // 14 * 4 (1rem = 16px)
                                                    height={56} // 14 * 4 (1rem = 16px)
                                                />
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Testimonials;