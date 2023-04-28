import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects({ }: Props) {
  const projectsData = [
    {
      id: 1,
      name: 'Telemedicine WebApp',
      startDate: "2020-10-01",
      endDate: "2022-03-01",
      logo: "https://iili.io/H8LKien.png",
      description: "The project is an online consultation platform connecting patients with doctors for medical advice and prescriptions. Patients can schedule appointments based on doctor availability, with doctors calling at the scheduled time. The platform includes an admin panel for managing patient information, including adding and deleting profiles, and allows family members to manage patient profiles. After consultation, doctors can prescribe medication and send it to the nearest pharmacy for delivery to the patient's address, streamlining the prescription and delivery process. The platform aims to provide an efficient and user-friendly experience for patients seeking medical advice."
    },
    {
      id: 2,
      name: "Data Importer Web App",
      startDate: "2021-03-01",
      endDate: "2021-09-01",
      logo: "https://iili.io/H8Lq8cN.png",
      description: "The Data Importer web app is designed to help admins create employee accounts in bulk for the Telemedicine web app. This is done by allowing admins to import employee data using a CSV file. The app ensures that the imported data is associated with the correct company and avoids creating duplicate entries. Once the data is imported, the app sends a welcome email to each new employee with their login credentials to access the Telemedicine web app. This process saves time for admins and ensures that new employees are quickly onboarded into the system without errors or omissions."
    },
    {
      id: 3,
      name: "ADP Connector App",
      startDate: "2021-07-01",
      endDate: "2021-12-01",
      logo: "https://iili.io/H8LBtLJ.png",
      description: "ADP Connector is a web app that integrates with ADP API to pull employee data for a company, authenticated via API credentials. Once retrieved, data is sent to the Telemedicine app, with a check to prevent duplicate employees. The app only sends new employee data, allowing automatic updates to existing data. An API allows admins to cancel subscriptions, and a daily cron job pulls the latest employee data from ADP API to keep Telemedicine data up-to-date. The ADP Connector streamlines managing employee data for Telemedicine by automating data pulling and updating."
    },
    {
      id: 4,
      name: "Covid Test Web App",
      startDate: "2022-01-01",
      endDate: "2022-03-01",
      logo: "https://iili.io/H8LurRR.png",
      description: "The Covid Test WebApp is an online platform for Covid-19 testing. Admins can create user profiles for companies, and users receive a Covid-19 instant kit and login credentials via email. After providing personal information and watching a demo video, users submit a video and photos of the completed test. Admins check the submission, and users receive their test result via email, with guidance for positive results. The platform offers a convenient and reliable way to get tested for Covid-19 from home, leveraging technology to minimize virus spread and ensure public health."
    },
    {
      id: 5,
      name: "Blockchain Web App",
      startDate: "2022-03-01",
      endDate: "2022-02-01",
      logo: "https://iili.io/H8LoNeI.png",
      description: "Blockchain App is an online platform that uses blockchain tech and Moralis authentication for users to buy, sell and track cryptocurrencies. Balances are updated every minute via the cron job, and the transaction watcher manages user transactions. Users can view their portfolio's value in a chart and switch between chains, such as Ethereum and Binance Smart Chain. Admins can list valid tokens, with prices and chart data provided by a third-party API. The platform also features a top loser/gainer section and supports Web3.js integration. It's a user-friendly tool for managing crypto portfolios."
    }
  ];
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
        {projectsData.map((project, index) => (
          <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
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
            src={project.logo} alt="" width={500} />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className='text-4xl font-semibold text-center'>
                <span className="underline decoration-[#F7AB0A]/50">Case Study {index + 1} of {projectsData.length}:</span>{" "}{project.name}
              </h4>
              <p className="text-lg text-center md:text-left">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-[500px] absolute bg-[#F7AB0A]/10 left-0 -skew-y-12 top-[30%]"></div>
    </motion.div>
  )
}