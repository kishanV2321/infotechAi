import React, { useEffect, useState, useRef } from "react";
import Input from "./Input";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface ContactFormData {
    fullname: string;
    email: string;
    phonenumber: string;
    message: string;
}

function ContactForm() {
    const [loading, setLoading] = useState(false);
    const formRef = useRef<HTMLFormElement | null>(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<ContactFormData>();


    const submitContactForm: SubmitHandler<ContactFormData> = async (data) => {
        try {
            setLoading(true);

            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

            if (formRef.current) {
                await emailjs.sendForm(
                    serviceId,
                    templateId,
                    formRef.current,
                    publicKey
                );
                console.log("Form Data - ", data);
            } else {
                throw new Error("Form reference is null");
            }
            setLoading(false);
        } catch (error: any) {
            console.log("ERROR OBJECT - ", error);
            if (error.text) {
                console.log("ERROR TEXT - ", error.text);
            }
            setLoading(false);
        }
    };


    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: "",
                fullname: "",
                message: "",
                phonenumber: "",
            });
        }
    }, [reset, isSubmitSuccessful]);

    return (
        <form
            ref={formRef}
            className="flex flex-col gap-7"
            onSubmit={handleSubmit(submitContactForm)}
        >

            <div className="flex flex-col gap-2">
                <Input
                    label="Full Name"
                    type="text"
                    id="fulltname"
                    placeholder="Enter first name"
                    className="bg-[#2c333f]"
                    {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Please enter your first name.
                    </span>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <Input
                    label="Email Address"
                    type="email"
                    id="email"
                    placeholder="Enter email address"
                    className="bg-[#2c333f]"
                    {...register("email", { required: true })}
                />
                {errors.email && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Please enter your Email address.
                    </span>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <Input
                    label="Phone Number"
                    type="number"
                    id="phonenumber"
                    placeholder="12345 67890"
                    className="bg-[#2c333f]"
                    {...register("phonenumber", {
                        required: {
                            value: true,
                            message: "Please enter your Phone Number.",
                        },
                        maxLength: { value: 12, message: "Invalid Phone Number" },
                        minLength: { value: 10, message: "Invalid Phone Number" },
                    })}
                />
                {errors.phonenumber && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        {errors.phonenumber.message}
                    </span>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="message"
                    className="flex items-center gap-1"
                >
                    Message
                    <sup className="text-pink-200">*</sup>
                </label>
                <textarea
                    id="message"
                    cols={30}
                    rows={7}
                    placeholder="Enter your message here"
                    className="bg-[#2c333f] p-4 rounded-lg"
                    {...register("message", { required: true })}
                />
                {errors.message && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Please enter your Message.
                    </span>
                )}
            </div>

            <button
                disabled={loading}
                type="submit"
                className={`rounded-md bg-yellow-500 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
        ${!loading &&
                    "transition-all duration-200 hover:scale-95 hover:shadow-none"
                    }  disabled:bg-richblack-500 sm:text-[16px] `}
            >
                {loading ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}

export default ContactForm;
