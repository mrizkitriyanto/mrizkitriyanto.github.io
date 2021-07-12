import React from 'react'

function Menu({ menuItem }) {
    return (
        <div className="mt-5">
            {
                menuItem.map((item) => {
                    return <div ckey={item.id}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer"className="flex border-blue-500 flex-row lg:mx-60 md:mx-10 mx-10 p-4 items-center font-sans text-xl lg:text-3xl text-gray-900 dark:text-gray-300 font-normal rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900 " >
                            <img src={item.image} alt="" className="w-10 h-10"/>
                            <h2 className="pl-4">{item.title}</h2>
                        </a>
                    </div>
                })
            }


        </div>
    )
}

export default Menu
