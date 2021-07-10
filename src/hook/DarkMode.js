import { useState,useEffect } from "react";

//Reference: https://www.youtube.com/watch?v=2IfTD-muRF4
export default function DarkMode() {
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() =>{
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);

        //Digunakan untuk menyimpan di local storage atau cache browser supaya ketika mengakses dan merubah tema maka selanjutnya ketika mengakses kembali akan sama seperti tema terakhir sebelum di tutup
        localStorage.setItem('theme', theme)
    },[theme, colorTheme]);

    return [colorTheme,setTheme];
}
