import React from 'react'
import Foto from "../images/HomeProfile.png";
import OSCP from "../images/oscp.png";
import FE from "../images/fend.png";
import Figma from "../images/figma.png";
import Network from "../images/comptia-network-plus.png";



function about() {
    return (
        <div className="overflow-y-auto pt-20 lg:pt-0 bg-gray-900">
            <div className="flex flex-col lg:pl-40 lg:pt-40 lg:flex-row justify-center lg:justify-between items-center">
                <div className="mx-9 flex justify-center items-center ">
                    <img src={Foto} alt="Construct" className="h-60 mb-10" />
                </div>
                <div className="flex flex-col w-2/3 mx-10 lg:pl-10 lg:pr-40 items-center lg:items-start">
                    <h1 className="text-xl font-black mb-3 font-mono text-gray-300">
                        I am Muhamad Rizki Triyanto
                    </h1>
                    <h2 className="ext-1xl k mb-3 font-mono text-center lg:text-justify text-gray-300">Computer Science Undergraduate Student</h2>
                    <h2 className="text-md  mb-3 font-mono text-center lg:text-justify text-gray-300">
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


            <div className="mt-10 flex flex-row w-2/3 mx-14 items-center lg:items-start">
                <p className="text-white text-sm font-extrabold font-mono">Riyan/</p>
                <a href="https://github.com/mrizkitriyanto" className="text-blue-500 text-sm font-extrabold font-mono hover:text-gray-300">Github/</a>
                <a href="https://t.me/muhamadrizkitriyanto" className="text-blue-500 text-sm font-extrabold font-mono hover:text-gray-300">Telegram/</a>
                <a href="https://www.instagram.com/thecyberwarboy" className="text-blue-500 text-sm font-extrabold font-mono hover:text-gray-300">Instagram/</a>
                <a href="https://www.linkedin.com/in/muhamad-rizki-triyanto" className="text-blue-500 text-sm font-extrabold font-mono hover:text-gray-300">Linkedin/</a>
            </div>

            <div className="mt-10 flex flex-col justify-between w-full">
                <div className="text-xl font-black px-20 mb-8 font-mono text-gray-300 items-start">
                    Specialization.
                </div>

                <div className="flex flex-col lg:flex-row justify-center lg:flex-between lg:px-10 items-center w-full ">
                    <div className="m-5 p-5 h-70 w-4/12 bg-white rounded flex flex-col items-start ">
                        <img src={OSCP} alt="Security" className="h-12 mb-2" />
                        <h1 className="text-gray-900 font-black font-mono text-xl">
                            Cyber Security
                        </h1>
                        <p className="mt-6 text-gray-900 font-mono font-medium text-xs lg:text-sm">
                            Testing the security of our software, reporting on any security vulnerabilities found. Implements comprehensive information security monitoring, controls assessment, intelligence.
                        </p>
                    </div>
                    <div className="m-5 p-5 h-70 w-4/12 bg-white rounded">
                        <img src={Figma} alt="UI/UX" className="h-12 mb-2" />
                        <h1 className="text-gray-900 font-black font-mono text-xl">
                            UI/UX Design
                        </h1>
                        <p className="mt-6 text-gray-900 font-mono font-medium text-xs lg:text-sm ">
                            Make design and implementation of all the experiences a user has when interacting with a digital tool, such as a website or mobile apps.<br /><span className="text-white">.</span>
                            <br /><span className="text-white">.</span>
                        </p>
                    </div>
                    <div className="m-5 p-5 h-70 w-4/12 bg-white rounded">
                        <img src={FE} alt="Front-End" className="h-12 mb-2" />
                        <h1 className="text-gray-900 font-black font-mono text-xl">
                            Front-End
                            Development
                        </h1>
                        <p className="mt-6 text-gray-900 font-mono font-medium text-xs lg:text-sm">
                            Implementing visual and interactive elements that users engage with through their web browser when using a web application.<br /><span className="text-white">.</span>
                            <br /><span className="text-white">.</span>
                        </p>
                    </div>
                    <div className="m-5 p-5 h-70 w-4/12 bg-white rounded">
                        <img src={Network} alt="Network" className="h-12 mb-2" />
                        <h1 className="text-gray-900 font-black font-mono text-xl">
                            Networking
                        </h1>
                        <p className="mt-6 text-gray-900 font-mono font-medium text-xs lg:text-sm">
                            Maintaining and controlling computer networks and any computer environment. Troubleshooting, diagnosing and resolving problems, as well as implementing and designing network solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about
