import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{ duration: 1.5 }}
            className="h-screen max-w-7xl relative flex flex-col justify-evenly mx-auto text-center items-center px-10 md:text-left md:flex-row">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>
            <motion.img
                src="https://media.licdn.com/dms/image/C4E03AQFoRAatR_JwMw/profile-displayphoto-shrink_800_800/0/1628084618579?e=1685577600&v=beta&t=jLp2E1BZ-wQaEmTTdtH9FLOMqTy85BizKnoPWk0KEPg"
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background</h4>
                <p className="text-base">
                    As a full-stack web developer With three years of experience in full-stack web development, I specialize in using the MERN stack (MongoDB, Express.js, React.js, Node.js), as well as Next.js. My expertise includes developing web applications for various industries using NodeJs for backend, MongoDB for database management, and React for front-end development. I also have knowledge in HTML, CSS, Bootstrap, Tailwind, and Web3.Js.
                    My experience with various software development methodologies, such as agile, combined with my knowledge of libraries and frameworks such as Redux, Moralis, Webpack, and GIT, allows me to collaborate with cross-functional teams to deliver high-quality software products. I'm always eager to stay up-to-date with the latest trends and technologies in web development, and I'm committed to using my expertise to remain innovative in my work.
                </p>
            </div>
        </motion.div>
    )
}