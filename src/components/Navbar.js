import React from 'react';
import {useState} from 'react';
import Logo from "../images/Logo.png";
import { Link } from 'react-router-dom';

function Navbar() {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div className="bg-gray-800 fixed z-50 w-full">
            <div className="flex flex-col lg:flex-row">
                <div className="flex justify-between items-center px-4 py-4 lg:py-0 p">
                    <div>
                        <Link to="/" className="ml-9 flex items-center text-white font-mono ">
                            <img src={Logo} alt="Logo" className="h-8 mr-1" />
                            RIYAN
                        </Link>
                    </div>
                    <div>
                        <button onClick={() => setIsOpen(!isOpen)} className="mr-9 focus:outline-none text-white block lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path className={!isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                <path className={isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} lg:flex flex-col lg:flex-row justify-between w-full`}>
                    <div className="flex flex-col lg:flex-row py">
                        {/* Ini Buat Space biar yg kiri kosong */}
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <Link className="block px-12 py-4 text-white font-mono hover:text-blue-500" to="/">Home</Link>
                        <Link className="block px-12 py-4 text-white font-mono hover:text-blue-500" to="/about">About</Link>
                        <Link className="block px-12 py-4 text-white font-mono hover:text-blue-500" to="/articles">Articles</Link>
                        <Link className="block px-12 py-4 text-white font-mono hover:text-blue-500" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
