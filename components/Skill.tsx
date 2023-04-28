import React from 'react'
import { motion } from 'framer-motion'

interface SkillsProps {
    data: {
        id: number;
        logo: string;
        title: string;
        proficiency: number;
    };
}

export default function Skill({ data }: SkillsProps) {
    return (
        <div key={data.id} className="relative group flex cursor-pointer">
            <motion.img
                className='h-24 w-24 md:h-28 md:w-28 rounded-full border border-gray-500 object-cover'
                src={data.logo} alt="" />
            <div className="h-24 w-24 md:h-28 md:w-28 rounded-full absolute group-hover:bg-white opacity-0 group-hover:opacity-80 flex flex-col justify-center items-center transition-all duration-500 ease-in-out">
                <p className="text-black opacity-100 text-2xl font-bold">{data.proficiency}%</p>
                <p className="text-black opacity-100 text-lg font-bold">{data.title}</p>
            </div>
        </div>
    )
}