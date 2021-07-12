import React from 'react'

function Menu({ menuItem }) {
    return (
        <div className="mt-5">
            {
                // Membuat menu atau link Atikel otomatis menggunakan menuItem
                menuItem.map((item) => {
                    return <div ckey={item.id}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer"className="flex border-blue-500 flex-row lg:mx-80 md:mx-10 mx-10 p-4 items-center font-sans text-lg lg:text-xl text-gray-900 dark:text-gray-300 font-normal rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900 font-mono " >
                            <img src={item.image} alt="" className="w-10 h-10"/>
                            <h2 className="lg:pl-6 pl-4">{item.title}</h2>
                        </a>
                    </div>
                })
            }


        </div>
    )
}

export default Menu
