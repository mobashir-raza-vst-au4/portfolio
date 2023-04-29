import React from 'react'
import { PhoneIcon, MapIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}

export default function ContactMe({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        //mailto
        const mailto = `mailto:mdmobashirraza@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}, ${data.message}`;
        window.location.href = mailto;
    };

    return (
        <div className='md:h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center md:mb-0 mb-12'>
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contact
            </h3>

            <div className="flex flex-col md:space-y-24 space-y-12 mt-40 md:mt-0">
                <h4 className="md:text-4xl text-2xl font-semibold text-center">
                    I have got just what you need.{" "}
                    <span className="decoration-[#F7AB0A]/50 underline">Let's Talk.</span>
                </h4>
                <div className="grid grid-cols-12 items-center md:space-y-0 space-y-12">
                    <div className="col-span-12 md:col-span-5 ">
                        <div className="md:space-y-10 space-y-6 flex flex-col items-center md:items-start md:text-2xl text-lg">
                            <div className="flex items-center justify-center space-x-5">
                                <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                                <a href="tel:+917003321176"><p className="">+917003321176</p></a>
                            </div>

                            <div className="flex items-center justify-center space-x-5">
                                <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                                <a href="mailto:mdmobashirraza@gmail.com" target="_blank"><p className="">mdmobashirraza@gmail.com</p></a>
                            </div>

                            <div className="flex items-center justify-center space-x-5">
                                <MapIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                                <p className="">Bangalore 560100</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 flex items-center justify-center">
                        <div className="h-52 border-r-2 border-[#F7AB0A]/40 hidden md:block"></div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 col-span-12 md:col-span-5 md:w-fit w-full mx-auto'>
                        <div className="flex md:flex-row flex-col md:space-x-2 tablet:space-y-2">
                            <input {...register("name")} placeholder="Name" type="text" className="contactInput" required />
                            <input {...register("email")} placeholder="Email" type="email" className="contactInput" required />
                        </div>

                        <input {...register("subject")} placeholder="Subject" type="text" className='contactInput' required />

                        <textarea {...register("message")} placeholder="Message" className='contactInput' required />

                        <button className="bg-[#F7AB0A] md:py-5 py-4 px-10 rounded-md text-black font-bold text-lg">Submit</button>
                    </form>

                </div>
            </div>
        </div>
    )
}