import React from 'react'
import Foto from "../images/HomeProfile.png"
import { Link } from 'react-router-dom';
import GridBackground from './GridBackground';
import Typical from 'react-typical';

function Content() {
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center dark:bg-grey-900 relative py-10">
            {/* background */}
            <GridBackground />

            {/* content */}
            <div className="relative h-screen flex flex-col justify-center items-center">
                <img src={Foto} alt="Profile" className="lg:h-3/5 md:h-2/5 h-2/5  " />
                <h1 className="lg:text-6xl md:text-5xl sm:text-2xl text-2xl font-black mb-7 font-mono text-white">
                    Muhamad Rizki Triyanto
                </h1>
                <h2 className="text-white font-mono lg:text-2xl md:text-1xl sm:text-base text-base mb-8 ">
                    {/* Menggunakan modul Typical yang harus di instal terlebih dahulu https://www.npmjs.com/package/react-typical */}
                    <Typical
                        steps={['Hello 👋 ', 1000, 'I am computer science student', 1000, 'at Diponegoro University', 1000, 'Do you want more about me? ', 1000, '👇 Click Below 👇', 1000,]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </h2>
                <Link className="py-3 px-8
            bg-blue-900 rounded-full text-3xl hover:bg-blue-700 text-white font-mono transition duration-300 ease-in-out flex items-center animate-bounce"
            to="/about">
                    About Me
                    <svg className="ml-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
                </Link>
            </div>

        </div>
    )
}

export default Content
