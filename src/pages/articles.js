import React from 'react';
import Foto from "../images/under_construction.png";
import Typical from 'react-typical';

function articles() {
    return (
        <div className="h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center bg-gradient-to-r from-blue-800 to-green-400">
            <div className="mx-9 flex justify-center items-center ">
                <img src={Foto} alt="Construct" className="h-60 mb-10" />
            </div>
            <div className="w-2/3 mx-10">
                <h1 className="lg:text-6xl md:text-5xl sm:text-2xl text-2xl font-black mb-3 font-sans text-black">
                    {/* Menggunakan modul Typical yang harus di instal terlebih dahulu https://www.npmjs.com/package/react-typical */}
                    <Typical
                        steps={['C ', 500, 'Coming Soon! 🤙', 500]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </h1>
                <h2 className="lg:text-4xl md:text-2xl sm:text-1xl text-1xl k mb-3 font-sans text-black">I AM WORKING HARD TO GIVE YOU A BETTER EXPERIENCE.</h2>
                <h2 className="lg:text-3xl md:text-1xl sm:text-md text-md  mb-3 font-sans text-black">I am working hard on it and the site may go live very soon. I promise, it will be worth the wait!</h2>
            </div>
        </div>
    )
}

export default articles
