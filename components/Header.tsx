import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function Header({ }: Props) {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])


    return (
        <>
            {isClient && (
                <header className='sticky top-0 flex items-start xl:items-center justify-between max-w-7xl mx-auto z-20 p-5'>
                    <motion.div
                        initial={{
                            x: -500,
                            opacity: 0,
                            scale: 0.5
                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            duration: 1.5,
                        }}
                        className='flex items-center'>
                        {/* Social Icons from react-social-icons */}
                        <SocialIcon url='https://github.com/mobashir-raza-vst-au4'
                            fgColor='gray'
                            bgColor='transparent'
                            target="_blank"
                        />

                        <SocialIcon url='https://www.linkedin.com/in/md-mobashir-raza-83b281190/'
                            fgColor='gray'
                            bgColor='transparent'
                            target="_blank"
                        />

                        <SocialIcon url='https://www.instagram.com/iammobashir/'
                            fgColor='gray'
                            bgColor='transparent'
                            target="_blank"
                        />
                    </motion.div>
                    <Link href="#contact">
                        <motion.div
                            initial={{
                                x: 500,
                                opacity: 0,
                                scale: 0.5
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                scale: 1
                            }}
                            transition={{
                                duration: 1.5,
                            }}
                            className='flex justify-center items-center gap-x-4 text-gray-300 cursor-pointer'>
                            <SocialIcon
                                className='cursor-pointer'
                                network='email'
                                fgColor='gray'
                                bgColor='transparent'
                            />
                            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>

                        </motion.div>
                    </Link>

                </header >)}
        </>
    )
}