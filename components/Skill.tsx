import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Skill({ }: Props) {
    return (
        <div className="relative group flex cursor-pointer">
            <motion.img
                className='h-24 w-24 md:h-28 md:w-28 rounded-full border border-gray-500 object-cover'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png' />
            <div className="h-24 w-24 md:h-28 md:w-28 rounded-full absolute group-hover:bg-white opacity-0 group-hover:opacity-80 flex justify-center items-center transition-all duration-500 ease-in-out">
                <p className="text-black opacity-100 text-2xl font-bold">100%</p>
            </div>
        </div>
    )
}