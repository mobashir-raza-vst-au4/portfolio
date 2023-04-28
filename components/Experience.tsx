import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {}

export default function Experience({ }: Props) {
    const experienceData = [
        {
            id: 1,
            company: 'AttainU',
            role: 'Full Stack Web Development (Course)',
            logo: 'https://attainu.com/images/logo.png',
            technologies: [
                {
                    "id": 1,
                    "title": "HTML",
                    "logo": "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png"
                },
                {
                    "id": 2,
                    "title": "CSS",
                    "logo": "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                },
                {
                    "id": 3,
                    "title": "JavaScript",
                    "logo": "https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
                },
                {
                    "id": 4,
                    "title": "NodeJs",
                    "logo": "https://e7.pngegg.com/pngimages/247/558/png-clipart-node-js-javascript-express-js-npm-react-github-angle-text.png"
                },
                {
                    "id": 5,
                    "title": "ExpressJs",
                    "logo": "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
                },
                {
                    "id": 6,
                    "title": "MongoDB",
                    "logo": "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg"
                },
                {
                    "id": 7,
                    "title": "ReactJs",
                    "logo": "https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png"
                },
                {
                    "id": 8,
                    "title": "Redux",
                    "logo": "https://img.favpng.com/6/2/11/redux-react-javascript-freecodecamp-npm-png-favpng-6F2x50visKuC0trBQ0952Cm1E_t.jpg"
                },
                {
                    "id": 9,
                    "title": "JQuery",
                    "logo": "https://image.pngaaa.com/864/6103864-middle.png"
                }
            ],
            summary: ["AttainU provided an 8-month course in full stack web development", "Learned various technologies including HTML, CSS, Bootstrap, JavaScript, Node.js, Express.js, MongoDB, Mongoose, jQuery, and Ajax", "Built Musicme, an application for listening to HD music and radio without ads", "Used JavaScript as the primary language for both front-end and back-end development", "Implemented React framework for the front-end to allow creating large web applications that can change data without reloading the page", "Used Node.js and Express as a server, as they are minimal, open-source, and flexible web app frameworks for developing websites", "Implemented PostgreSQL as the database", "Called YouTube APIs for music and converted a YouTube URL into an MP3 using the node’s YTDL module", "Implemented login and signup with validation and used security mechanisms like Bcrypt and Joi for authentication and validation, thus increasing security."],
            startDate: '2019-11-20',
            endDate: '2020-07-20'
        },
        {
            id: 2,
            company: 'HyScaler, formerly known as NetTantra Technologies',
            role: 'Software Developer (Full-time)',
            logo: 'tantralogo.png',
            technologies: [
                {
                    "id": 1,
                    "title": "HTML",
                    "logo": "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png"
                },
                {
                    "id": 2,
                    "title": "CSS",
                    "logo": "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                },
                {
                    "id": 3,
                    "title": "JavaScript",
                    "logo": "https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
                },
                {
                    "id": 4,
                    "title": "NodeJs",
                    "logo": "https://e7.pngegg.com/pngimages/247/558/png-clipart-node-js-javascript-express-js-npm-react-github-angle-text.png"
                },
                {
                    "id": 5,
                    "title": "ExpressJs",
                    "logo": "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
                },
                {
                    "id": 6,
                    "title": "MongoDB",
                    "logo": "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg"
                },
                {
                    "id": 7,
                    "title": "ReactJs",
                    "logo": "https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png"
                },
                {
                    "id": 8,
                    "title": "Tailwind",
                    "logo": "https://yt3.googleusercontent.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj"
                },
                {
                    "id": 9,
                    "title": "Redux",
                    "logo": "https://img.favpng.com/6/2/11/redux-react-javascript-freecodecamp-npm-png-favpng-6F2x50visKuC0trBQ0952Cm1E_t.jpg"
                },
                {
                    "id": 10,
                    "title": "JQuery",
                    "logo": "https://image.pngaaa.com/864/6103864-middle.png"
                },
                {
                    "id": 11,
                    "title": "PostgresSQL",
                    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9V9h0YPPf0o-faAi5mrr7-x3ZjkgcdCkPKA&usqp=CAU"
                },
                {
                    "id": 12,
                    "title": "NextJs",
                    "logo": "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
                },
                {
                    "id": 13,
                    "title": "SailsJs",
                    "logo": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1483559617/xdbc84lavvt8a6ptd55t.png",
                },
                {
                    "id": 14,
                    "title": "StrapiJs",
                    "logo": "https://www.gartner.com/pi/vendorimages/strapi_1611785450017.jpg",
                },
                {
                    "id": 15,
                    "title": "Moralis",
                    "logo": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/xi2ibotrclcxf9njqrfm",
                },
                {
                    "id": 16,
                    "title": "Web3Js",
                    "logo": "data:image/jpeg;base64,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",
                },
            ],
            summary: ["Experienced in developing blockchain-based web applications for buying, selling, and tracking various cryptocurrencies using Moralis authentication and Web3.js integration.", "Developed a telemedicine web application that provides patients with medical advice and prescription services, allowing doctors to manage patient information and pharmacies to deliver medications.", "Created a Covid-19 test web application that enables users to receive testing kits at home, record themselves taking the test, and receive their test results via email, helping to minimize the spread of the virus.", "Developed an ADP connector web application that integrates with the ADP API to pull and update employee data for the telemedicine web application, streamlining the process of managing employee information.", "Created a data importer web application that allows admins to create employee accounts in bulk by importing data using a CSV file and sending welcome emails to new employees with their login credentials, improving the onboarding process."],
            startDate: '2020-09-08',
            endDate: ''
        },
    ].reverse()

    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5
            }}
            className='h-screen relative overflow-hidden flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center'>
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Experience
            </h3>

            <div className='w-full flex space-x-5 overflow-x-auto p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {
                    experienceData && experienceData.map((experience, index) => (
                        <ExperienceCard data={experience} />
                    ))

                }
            </div>
        </motion.div>
    )
}