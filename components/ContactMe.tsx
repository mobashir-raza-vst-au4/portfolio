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
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contact
            </h3>

            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                    I have got just what you need.{" "}
                    <span className="decoration-[#F7AB0A]/50 underline">Let's Talk.</span>
                </h4>

                <div className="space-y-10">
                    <div className="flex items-center justify-center space-x-5">
                        <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">+917003321176</p>
                    </div>

                    <div className="flex items-center justify-center space-x-5">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">mdmobashirraza@gmail.com</p>
                    </div>

                    <div className="flex items-center justify-center space-x-5">
                        <MapIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">Bangalore 560100</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className="flex space-x-2">
                        <input {...register("name")} placeholder="Name" type="text" className="contactInput" required/>
                        <input {...register("email")} placeholder="Email" type="email" className="contactInput" required/>
                    </div>

                    <input {...register("subject")} placeholder="Subject" type="text" className='contactInput' required/>

                    <textarea {...register("message")} placeholder="Message" className='contactInput' required/>

                    <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
                </form>
            </div>
        </div>
    )
}