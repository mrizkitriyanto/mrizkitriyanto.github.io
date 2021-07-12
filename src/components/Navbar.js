import React from 'react';
import { useState } from 'react';
import Logo from "../images/Logo.png";
import { Link, NavLink } from 'react-router-dom';
import themeContext from '../hook/DarkMode';

export default function Navbar() {

    // Inisialisasi drop down tertutup ditandai dengan useState(false) -->sebelum menggunakan useState harus diimport terlebih dahulu
    const [isOpen, setIsOpen] = useState(false);

    // Sebagai permulaan tema yang digunakan adalah sama seperti sebelum di tutup tema akan tersimpan di cache browser
    const [colorTheme, setTheme] = themeContext();

    return (
        <div className="bg-gray-800 fixed z-50 top-0 w-full ">
            <div className="flex flex-col lg:flex-row">
                <div className="flex justify-between items-center px-4 py-4 lg:py-0 p">

                    {/* Button buat ganti tema */}
                    <button onClick={() => setTheme(colorTheme)}>
                        {colorTheme === 'light' ?
                            // SVG bulan untuk Dark Mode
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-200 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                            :
                            // SVG matahari untuk Light Mode
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            </svg>
                        }
                    </button>


                    <div>
                        <Link to="/" className="ml-9 flex items-center text-white font-mono ">
                            <img src={Logo} alt="Logo" className="h-8 mr-1" />
                            RIYAN
                        </Link>

                    </div>
                    <div>

                        {/* Button ketika di klik akan mengeset isOpen menjadi not isOpen */}
                        <button onClick={() => setIsOpen(!isOpen)} className="mr-9 focus:outline-none text-white block lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                {/* Path pertama burger bar jika not isOpen (menu dropdown tertutup) maka blok jika isOpen(menu dropdown terbuka) maka akan menghilang */}
                                <path className={!isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />

                                {/* Path kedua berbentuk X jika isOpen(menu dropdown terbuka) maka blok jika not isOpen(menu dropdown tertutup) maka akan menghilang */}
                                <path className={isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </button>

                    </div>
                </div>

                {/* Sama seperti di atas jika isOpen(Menu terbuka maka blok yakni komponen di bawah akan muncul namun jika not isOpen(Menu dropdown tertutup maka komponen di bawah ini akan tidak terlihat)) */}
                <div className={`${isOpen ? 'block' : 'hidden'} lg:flex flex-col lg:flex-row justify-between w-full`}>
                    <div className="flex flex-col lg:flex-row py">
                        {/* Ini Buat Space biar yg kiri kosong */}
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        {/* Sebelumnya ada warning no duplicate props allowed tapi bisa di atasi dengan --> https://stackoverflow.com/questions/42367236/why-am-i-getting-this-warning-no-duplicate-props-allowed-react-jsx-no-duplicate */}
                        <NavLink className="block px-12 py-4 text-white font-mono hover:text-blue-500" activeClassName="nav-link--selected" to="/" exact>Home</NavLink>
                        <NavLink className="block px-12 py-4 text-white font-mono hover:text-blue-500" activeClassName="nav-link--selected" to="/about">About</NavLink>
                        <NavLink className="block px-12 py-4 text-white font-mono hover:text-blue-500" activeClassName="nav-link--selected" to="/articles">Articles</NavLink>
                        <NavLink className="block px-12 py-4 text-white font-mono hover:text-blue-500" activeClassName="nav-link--selected" to="/contact">Contact</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
