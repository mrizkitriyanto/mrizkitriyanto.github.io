import React from 'react'

function contact() {
    return (
        <div className="h-screen flex justify-center items center bg-gray-900">
            <div className="mt-40 w-full">
                <div className="text-center">
                    <h1 className="text-4xl text-gray-200 font-mono font-black">Contact</h1>
                </div>
                <div className="lg:ml-20 ">
                    <div className="m-10 ">
                        <h2 className="mt-10 mb-5 mx-20 text-2xl text-gray-200 font-black font-mono">Email</h2>
                        <a href="mailto:muhamadrizkitriyanto@protonmail.com" className="mx-20 text-lg text-gray-200 font-black font-mono hover:text-blue-600" target="_blank" rel="noopener noreferrer">muhamadrizkitriyanto@protonmail.com</a>
                    </div>

                    <div className="m-10">
                        <h2 className="mt-10 mb-5 mx-20 text-2xl text-gray-200 font-black font-mono">Address</h2>
                        <a href="https://goo.gl/maps/qNHrwHgP7nbZ3pdZ8" className="mx-20 text-lg text-gray-200 font-black font-mono hover:text-blue-600" target="_blank" rel="noopener noreferrer">Semarang, Jawa Tengah, Indonesia</a>
                    </div>

                    <div className="m-10">
                        <h2 className="mt-10 mb-5 mx-20 text-2xl text-gray-200 font-black font-mono">Telegram</h2>
                        <a href="https://t.me/muhamadrizkitriyanto" className="mx-20 text-lg text-gray-200 font-black font-mono hover:text-blue-600" target="_blank" rel="noopener noreferrer">@muhamadrizkitriyanto</a>
                    </div>

                    <div className="m-10">
                        <h2 className="mt-10 mb-5 mx-20 text-2xl text-gray-200 font-black font-mono">Instagram</h2>
                        <a href="https://www.instagram.com/thecyberwarboy" className="mx-20 text-lg text-gray-200 font-black font-mono hover:text-blue-600" target="_blank" rel="noopener noreferrer">@thecyberwarboy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contact
