import React from 'react'
import { motion } from 'framer-motion'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type Props = {}

export default function Projects({ }: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // fade: true,
    adaptiveHeight: true,
  };

  const projectsData = [
    {
      id: 1,
      name: 'Telemedicine Web App',
      startDate: "2020-10-01",
      endDate: "2022-03-01",
      logo: `/doctegrity-dashboard.png`,
      description: "The project is an online consultation platform connecting patients with doctors for medical advice and prescriptions. Patients can schedule appointments based on doctor availability, with doctors calling at the scheduled time. The platform includes an admin panel for managing patient information, including adding and deleting profiles, and allows family members to manage patient profiles. After consultation, doctors can prescribe medication and send it to the nearest pharmacy for delivery to the patient's address, streamlining the prescription and delivery process. The platform aims to provide an efficient and user-friendly experience for patients seeking medical advice."
    },
    {
      id: 2,
      name: "Data Importer Web App",
      startDate: "2021-03-01",
      endDate: "2021-09-01",
      logo: `/doctegrity-data-importer.png`,
      description: "The Data Importer web app is designed to help admins create employee accounts in bulk for the Telemedicine web app. This is done by allowing admins to import employee data using a CSV file. The app ensures that the imported data is associated with the correct company and avoids creating duplicate entries. Once the data is imported, the app sends a welcome email to each new employee with their login credentials to access the Telemedicine web app. This process saves time for admins and ensures that new employees are quickly onboarded into the system without errors or omissions."
    },
    {
      id: 3,
      name: "ADP Connector App",
      startDate: "2021-07-01",
      endDate: "2021-12-01",
      logo: `/adp-dashboard.png`,
      description: "ADP Connector is a web app that integrates with ADP API to pull employee data for a company, authenticated via API credentials. Once retrieved, data is sent to the Telemedicine app, with a check to prevent duplicate employees. The app only sends new employee data, allowing automatic updates to existing data. An API allows admins to cancel subscriptions, and a daily cron job pulls the latest employee data from ADP API to keep Telemedicine data up-to-date. The ADP Connector streamlines managing employee data for Telemedicine by automating data pulling and updating."
    },
    {
      id: 4,
      name: "Covid Test Web App",
      startDate: "2022-01-01",
      endDate: "2022-03-01",
      logo: `/snaptest-dashboard.png`,
      description: "The Covid Test WebApp is an online platform for Covid-19 testing. Admins can create user profiles for companies, and users receive a Covid-19 instant kit and login credentials via email. After providing personal information and watching a demo video, users submit a video and photos of the completed test. Admins check the submission, and users receive their test result via email, with guidance for positive results. The platform offers a convenient and reliable way to get tested for Covid-19 from home, leveraging technology to minimize virus spread and ensure public health."
    },
    {
      id: 5,
      name: "Blockchain Web App",
      startDate: "2022-03-01",
      endDate: "2022-02-01",
      logo: `/terablock-dashboard.png`,
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
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:ml-0 ml-5">Projects</h3>
      <div className="md:w-[60%] w-[80%] z-20 md:mt-0 mt-12">
        <Slider {...settings}>
          {projectsData.map((project, index) => (
            <div key={index}>
              <div className="space-y-10 px-0 md:px-10 max-w-6xl flex flex-col items-center justify-center">
                <img
                 src={project.logo} alt="" width={500}
                />
                <h4 className='md:text-4xl text-xl font-semibold text-center'>
                  <span className="underline decoration-[#F7AB0A]/50">Case Study {index + 1} of {projectsData.length}:</span>{" "}{project.name}
                </h4>
                <p className="text-lg text-justify px-2 tablet:h-52  tablet:overflow-y-auto">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="w-full h-[500px] absolute bg-[#F7AB0A]/10 left-0 top-[30%]"></div>
    </motion.div>
  )
}