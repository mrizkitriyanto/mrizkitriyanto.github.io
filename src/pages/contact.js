import React from 'react'

function contact() {
    return (
        <div className="overflow-y-auto  flex justify-center items center bg-yellow-50 dark:bg-gray-900 transition duration-1000">
            <div className="mt-40 w-full">
                <div className="text-center">
                    <h1 className="text-4xl text-gray-800 dark:text-gray-300 font-mono font-black">Contact</h1>
                </div>
                <div className="lg:ml-20 flex flex-col ">
                    <div className="lg:m-10 md:m-10 m-4 ">
                        <h2 className="mt-10 mb-5 lg:mx-20 mx-0 text-2xl text-gray-800 dark:text-gray-300 font-black font-mono">Email</h2>
                        <a href="mailto:muhamadrizkitriyanto@protonmail.com" className="lg:mx-20 mx-0 lg:text-2xl md:text-lg text-xs text-gray-800 dark:text-gray-300 font-black font-mono hover:text-blue-600" target="_blank" rel="noopener noreferrer">muhamadrizkitriyanto@protonmail.com</a>
                    </div>

                    <div className="lg:m-10 md:m-10 m-4">
                        <h2 className="mt-10 mb-5 lg:mx-20 mx-0 lg:text-2xl text-lg text-gray-800 dark:text-gray-300 font-black font-mono">Address</h2>
                        <a href="https://goo.gl/maps/qNHrwHgP7nbZ3pdZ8" className="lg:mx-20 mx-0 lg:text-2xl md:text-lg text-sm text-gray-800 dark:text-gray-300 font-black font-mono hover:text-blue-600" target="_blank" rel="noopener noreferrer">Semarang, Jawa Tengah, Indonesia</a>
                    </div>
                    <div className="lg:m-10 md:m-10 m-4">
                        <h2 className="mt-10 mb-5 lg:mx-20 mx-0 text-2xl text-gray-800 dark:text-gray-300 font-black font-mono">Telegram</h2>
                        <a href="https://t.me/muhamadrizkitriyanto" className="lg:mx-20 mx-0 lg:text-2xl md:text-lg text-sm text-gray-800 dark:text-gray-300 font-black font-mono hover:text-blue-600" target="_blank" rel="noopener noreferrer">@muhamadrizkitriyanto</a>
                    </div>

                    <div className="lg:m-10 md:m-10 m-4">
                        <h2 className="mt-10 mb-5 lg:mx-20 mx-0 text-2xl text-gray-800 dark:text-gray-200 font-black font-mono">Instagram</h2>
                        <a href="https://www.instagram.com/thecyberwarboy" className="lg:mx-20 mx-0 lg:text-2xl md:text-lg text-sm text-gray-800 dark:text-gray-200 font-black font-mono hover:text-blue-600" target="_blank" rel="noopener noreferrer">@thecyberwarboy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact
