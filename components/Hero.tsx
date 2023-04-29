import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Md Mobashir Raza",
            "I'm a Software Developer living in India. I love to code and play games.",

        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <img
                className='rounded-full relative h-32 w-32'
                src="https://media.licdn.com/dms/image/C4E03AQFoRAatR_JwMw/profile-displayphoto-shrink_800_800/0/1628084618579?e=1685577600&v=beta&t=jLp2E1BZ-wQaEmTTdtH9FLOMqTy85BizKnoPWk0KEPg"
            />
            <div className='z-20'>
                <h2 className='text-gray-500 uppercase tracking-[15px] pb-2'>Software Developer</h2>
                <h1 className='md:text-5xl text-lg font-semibold px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor='red' />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}