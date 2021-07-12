import React from 'react'

function Buttons({button, filter}) {
    return (
        <div className="flex flex-row justify-center flex-wrap">
            {
                button.map((cat, i)=>{
                    return <button className="bg-yellow-100 text-gray-900 dark:bg-gray-800 dark:text-gray-300 mx-2 my-3 px-3 py-1 rounded-lg hover:bg-yellow-50 dark:hover:bg-gray-900 transition duration-1000" type="button" onClick={()=> filter(cat)}>{cat}</button>
                })
            }
        </div>
    )
}

export default Buttons
