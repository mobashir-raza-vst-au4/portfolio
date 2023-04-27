import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function ExperienceCard({ }: Props) {
  return (
    <article className='flex flex-col flex-shrink-0 items-center space-y-7 rounded-lg w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] text-gray-400 p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        className='w-16 h-16 rounded-full  object-cover object-center'
        src='https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Software Developer</h4>
        <p className='text-2xl font-bold mt-1'>NetTantra Technologies</p>
        <div className='flex space-x-2 my-2'>
          {/* Tech used */}
          <img
            className='h-10 w-10 rounded-full object-cover'
            src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="" />
          <img
            className='h-10 w-10 rounded-full object-cover'
            src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="" />
          <img
            className='h-10 w-10 rounded-full object-cover'
            src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">Sep 2020 - Present</p>
        <div className='overflow-y-auto h-52 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
          <ul className="list-disc space-y-4 ml-5 text-lg pr-5">
            <li>Summary Points Summary Points Summary Points Summary</li>
            <li>Summary Points Summary Points Summary Points Summary</li>
            <li>Summary Points Summary Points Summary Points Summary</li>
            <li>Summary Points Summary Points Summary Points Summary</li>
            <li>Summary Points Summary Points Summary Points Summary</li>
            <li>Summary Points Summary Points Summary Points Summary</li>
            <li>Summary Points Summary Points Summary Points Summary</li>
            <li>Summary Points Summary Points Summary Points Summary</li>
            <li>Summary Points Summary Points Summary Points Summary</li>
          </ul>
        </div>
      </div>
    </article>
  )
}