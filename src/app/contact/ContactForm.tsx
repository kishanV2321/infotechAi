import React, { useEffect, useState } from "react";
import Input from "./Input";
import { useForm, SubmitHandler } from "react-hook-form";

interface ContactFormData {
    firstname: string;
    lastname: string;
    email: string;
    phoneNo: string;
    message: string;
    countrycode: string;
}

function ContactForm() {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<ContactFormData>();

    const submitContactForm: SubmitHandler<ContactFormData> = async (data) => {
        try {
            setLoading(true);
            // Perform API call here
            console.log("Form Data - ", data);
            setLoading(false);
        } catch (error: any) {
            console.log("ERROR MESSAGE - ", error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: "",
                firstname: "",
                lastname: "",
                message: "",
                phoneNo: "",
            });
        }
    }, [reset, isSubmitSuccessful]);

    return (
        <form
            className="flex flex-col gap-7"
            onSubmit={handleSubmit(submitContactForm)}
        >
            <div className="flex flex-col gap-5 lg:flex-row">
                <div className="flex flex-col gap-2 lg:w-[48%]">
                    <Input
                        label="First Name"
                        type="text"
                        id="firstname"
                        placeholder="Enter first name"
                        className="bg-[#2c333f]"
                        {...register("firstname", { required: true })}
                    />
                    {errors.firstname && (
                        <span className="-mt-1 text-[12px] text-yellow-100">
                            Please enter your first name.
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-2 lg:w-[48%]">
                    <Input
                        label="Last Name"
                        type="text"
                        id="lastname"
                        placeholder="Enter last name"
                        className="bg-[#2c333f]"
                        {...register("lastname", { required: true })}
                    />
                    {errors.lastname && (
                        <span className="-mt-1 text-[12px] text-yellow-100">
                            Please enter your last name.
                        </span>
                    )}
                </div>
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
                    {...register("phoneNo", {
                        required: {
                            value: true,
                            message: "Please enter your Phone Number.",
                        },
                        maxLength: { value: 12, message: "Invalid Phone Number" },
                        minLength: { value: 10, message: "Invalid Phone Number" },
                    })}
                />
                {errors.phoneNo && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        {errors.phoneNo.message}
                    </span>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <label
                    htmlFor="message"
                    className="lable-style flex items-center gap-1"
                >
                    Message
                    <sup className="text-pink-200">*</sup>
                </label>
                <textarea
                    id="message"
                    cols={30}
                    rows={7}
                    placeholder="Enter your message here"
                    className="bg-[#2c333f]"
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
                Send Message
            </button>
        </form>
    );
}

export default ContactForm;
