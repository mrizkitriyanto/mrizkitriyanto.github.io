import React from 'react'
import Foto from "../images/HomeProfile.png";
import OSCP from "../images/oscp.png";
import FE from "../images/fend.png";
import Figma from "../images/figma.png";
import Network from "../images/comptia-network-plus.png";



function about() {
    return (
        <div className="overflow-y-auto pt-20 lg:pt-0 bg-yellow-50 dark:bg-gray-900 transition duration-1000">

            {/* Halaman about bagian awal */}
            <div className="flex flex-col lg:pl-40 lg:pt-40 lg:flex-row justify-center lg:justify-between items-center">
                <div className="mx-9 flex justify-center items-center ">
                    <img src={Foto} alt="Construct" className="h-60 mb-10" />
                </div>
                <div className="flex flex-col lg:w-2/3 w-11/12 lg:mx-10 mx-5 lg:pl-10 lg:pr-40 items-center lg:items-start ">
                    <h1 className="lg:text-2xl text-lg font-black text-center mb-3 font-mono text-gray-800 dark:text-gray-300">
                        Muhamad Rizki Triyanto
                    </h1>
                    <h2 className="text-lg k mb-3 font-mono text-center lg:text-justify text-gray-800 dark:text-gray-300">Computer Science Undergraduate Student</h2>
                    <h2 className="text-md  mb-3 font-mono text-center lg:text-justify text-gray-800 dark:text-gray-300">
                        I am a computer science student at Diponegoro University. My studies have provided me with broad proficiency in algorithm, programming, computer network, software engineering, and information security.
                        <br /><br />
                        I love to explore new things and passionate about information technology, especially cyber security. In today's digital era, there are so many advanced technologies used by industry and of course they need security to secure their assets. Therefore, I will continue to improve my skills on cyber security to help secure their assets. Besides that, I can educate people around me about cyber security and raise awareness about personal data protection.
                        <br /><br />
                        I didn't just improve my technical skills. I'm also improving some soft skills including information analysis, teamwork, leadership and others.
                        <br /><br />
                        Want to chat? Feel free to drop me a message.
                    </h2>
                </div>
            </div>

            {/* Bagian ke dua - Link ke medsos */}
            <div className="mt-10 flex lg:flex-row md:flex-row flex-col items-start w-2/3 lg:mx-14 md:mx-10 mx-6 lg:items-start">
                <p className="text-gray-800 dark:text-white lg:text-md text-sm font-black font-mono">Riyan/</p>
                <a href="https://github.com/mrizkitriyanto" className="lg:text-md text-sm text-blue-500 text-md font-black font-mono hover:text-gray-800 dark:hover:text-gray-300" target="_blank" rel="noopener noreferrer">Github/</a>
                <a href="https://t.me/akusiapakamusiapamaukemana" className="lg:text-md text-sm text-blue-500 text-md font-black font-mono hover:text-gray-800 dark:hover:text-gray-300" target="_blank" rel="noopener noreferrer">Telegram/</a>
                <a href="https://www.instagram.com/thecyberwarboy" className="lg:text-md text-sm text-blue-500 text-md font-black font-mono hover:text-gray-800 dark:hover:text-gray-300" target="_blank" rel="noopener noreferrer">Instagram/</a>
                <a href="https://www.linkedin.com/in/rizki-triyanto" className="lg:text-md text-sm text-blue-500 text-md font-black font-mono hover:text-gray-800 dark:hover:text-gray-300" target="_blank" rel="noopener noreferrer">Linkedin/</a>
            </div>

            {/* Bagian Spesialisasi disini ada 2 (Tulisan Soesialisasi dan Item Spesialisasi) yang masing masing dipisah pakai FLEX */}
            <div className="mt-10 flex flex-col justify-between w-full">
                {/* Judul Tulisan spesialisasi */}
                <div className="text-xl font-black mb-8 font-mono text-gray-800 dark:text-gray-300 items-start text-center ">
                    Specialization.
                </div>

                {/* Bagian Item Spesialisasi ada 4 pengaturan posisi dengan menggunakan FLEX
                di bagian (UIUX dan Front end) diakhir kalimat deskripsi ada span dan Br digunakan supaya tinggi containernya sama*/}
                <div className="flex flex-col lg:flex-row justify-center lg:flex-between lg:px-10 px-0 items-center w-full ">

                    <div className="m-5 p-5 h-70 lg:w-4/12 md:w-6/12 w-full bg-gray-800 dark:bg-white rounded flex flex-col items-start ">
                        <img src={OSCP} alt="Security" className="h-12 mb-2" />
                        <h1 className="text-gray-100 dark:text-gray-800 font-black font-mono text-xl">
                            Cyber Security
                        </h1>
                        <p className="mt-6 text-gray-100 dark:text-gray-800 font-mono font-medium text-xs lg:text-sm">
                            Testing the security of our software, reporting on any security vulnerabilities found. Implements comprehensive information security monitoring, controls assessment, intelligence.
                        </p>
                    </div>


                    <div className="m-5 p-5 h-70 lg:w-4/12 md:w-6/12 w-full bg-gray-800 dark:bg-white rounded">
                        <img src={Figma} alt="UI/UX" className="h-12 mb-2" />
                        <h1 className="text-gray-100 dark:text-gray-800 font-black font-mono text-xl">
                            UI/UX Design
                        </h1>
                        <p className="mt-6 text-gray-100 dark:text-gray-800 font-mono font-medium text-xs lg:text-sm ">
                            Make design and implementation of all the experiences a user has when interacting with a digital tool, such as a website or mobile apps.<br /><span className="text-gray-800 dark:text-white">.</span>
                            <br /><span className="text-gray-800 dark:text-white">.</span>
                        </p>
                    </div>

                    <div className="m-5 p-5 h-70 lg:w-4/12 md:w-6/12 w-full bg-gray-800 dark:bg-white rounded">
                        <img src={FE} alt="Web -Dev" className="h-12 mb-2" />
                        <h1 className="text-gray-100 dark:text-gray-800 font-black font-mono text-xl">
                            Web
                            Development
                        </h1>
                        <p className="mt-6 text-gray-100 dark:text-gray-800 font-mono font-medium text-xs lg:text-sm">
                        Assisting with the creation of websites and updating existing web applications<br /><br /><br /><span className="text-gray-700 dark:text-white">.</span>
                            <br /><span className="text-gray-800 dark:text-white">.</span>
                        </p>
                    </div>

                    <div className="m-5 p-5 h-70 lg:w-4/12 md:w-6/12 w-full bg-gray-800 dark:bg-white rounded">
                        <img src={Network} alt="Network" className="h-12 mb-2" />
                        <h1 className="text-gray-100 dark:text-gray-800 font-black font-mono text-xl">
                            Networking
                        </h1>
                        <p className="mt-6 text-gray-100 dark:text-gray-800 font-mono font-medium text-xs lg:text-sm">
                            Maintaining and controlling computer networks and any computer environment. Troubleshooting, diagnosing and resolving problems, as well as implementing and designing network solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about
