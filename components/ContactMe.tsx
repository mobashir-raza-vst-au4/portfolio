import React, { useState } from 'react'
import { PhoneIcon, MapIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form';
import sendMailHandler from '../lib/api';
import { motion, AnimatePresence } from 'framer-motion'

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = {}

export default function ContactMe({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const [isLoading, setIsLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setIsLoading(true);
        sendMailHandler(data)
            .then(response => {
                if (response.success) {
                    setIsLoading(false);
                    setSuccessMsg(response.message);
                    setErrorMsg('');

                    setTimeout(() => {
                        setSuccessMsg('');
                    }, 5000)
                }
            }).catch(error => {
                setIsLoading(false);
                setErrorMsg(error.message);
                setSuccessMsg('');

                setTimeout(() => {
                    setErrorMsg('');
                }, 5000)
            })
    };

    return (
        <div className='md:h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl md:px-10 px-5 justify-evenly mx-auto items-center md:mb-0 mb-12'>
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:ml-0 ml-5">
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
                                <p className="">Bangalore</p>
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

                        <button className="bg-[#F7AB0A] md:py-5 py-4 px-10 h-14 rounded-md text-black font-bold text-lg flex items-center justify-center">
                            {isLoading ? <div role="status">
                                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-[#242424] animate-spin fill-[#F7AB0A]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div> : 'Submit'}
                        </button>
                        <AnimatePresence>
                            {successMsg || errorMsg ?
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}

                                    className="text-center custom__alert">
                                    <div className={`p-2 ${successMsg ? 'bg-green-700' : 'bg-red-700'} items-center text-indigo-100 leading-none rounded-full inline-flex`} role="alert">
                                        <span className={`flex rounded-full ${successMsg ? 'bg-green-500' : 'bg-red-500'} uppercase px-2 py-1 text-xs font-bold mr-3`}>{successMsg ? 'New' : 'Error'}</span>
                                        <span className="font-semibold mr-2 text-left flex-auto">{successMsg ? successMsg : errorMsg}</span>
                                    </div>
                                </motion.div> : ''}
                        </AnimatePresence>
                    </form>
                </div>
            </div>
        </div>
    )
}