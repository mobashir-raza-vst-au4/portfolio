import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects({ }: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
      className="h-screen relative overflow-hidden flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
            initial={{
              y: -300
            }}
            transition={{
              duration: 1.2
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
            }}
            src="https://thedailyguardian.com/wp-content/uploads/2022/09/Netflix.jpg" alt="" width={500} />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className='text-4xl font-semibold text-center'>
                <span className="underline decoration-[#F7AB0A]/50">Case Study {index + 1} of {projects.length}:</span>{" "}UPS clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dicta ipsum incidunt iusto nostrum omnis voluptas id dolorum libero suscipit voluptates,
                eum nemo distinctio autem repellat natus consectetur asperiores debitis quo.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-[500px] absolute bg-[#F7AB0A]/10 left-0 -skew-y-12 top-[30%]"></div>
    </motion.div>
  )
}