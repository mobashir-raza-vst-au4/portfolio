import { motion } from 'framer-motion'
import React from 'react'

interface ExperienceCardProps {
  data: {
    id: number;
    company: string;
    role: string;
    logo: string;
    technologies: {
      id: number;
      logo: string;
      title: string;
    }[];
    summary: string[];
    startDate: string;
    endDate: string;
  };
}

export default function ExperienceCard({ data }: ExperienceCardProps) {
  const modifiedDate = (date: string) => {
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleString('en-us', { month: 'short', year: 'numeric' });
    return formattedDate;
  }

  return (
    <article key={data.id} className='flex flex-col flex-shrink-0 items-center space-y-7 rounded-lg bg-[#292929] text-gray-400 p-10'>
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
        className='w-16 h-16 rounded-full object-cover object-center bg-white p-2'
        src={data.logo}
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>{data.role}</h4>
        <p className='text-2xl font-bold mt-1'>{data.company}</p>
        <div className='flex flex-wrap my-5 gap-3'>
          {/* Tech used */}
          {data.technologies.map((tech, index) => {
            return (
              <div key={index}>
                <img
                  key={index}
                  className='h-10 w-10 rounded-full object-cover'
                  src={tech.logo} alt="" title={tech.title} />

              </div>
            )
          })}
        </div>
        <p className="uppercase py-5 text-gray-300">{modifiedDate(data.startDate)} - {data.endDate ? modifiedDate(data.endDate) : 'Present'}</p>
        <div className='overflow-y-auto h-52 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
          <ul className="list-disc space-y-4 ml-5 text-lg pr-5">
            {
              data.summary.map((summary, index) => {
                return (
                  <li key={index}>{summary}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </article>
  )
}