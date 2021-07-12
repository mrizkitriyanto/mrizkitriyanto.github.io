import React, { useState } from 'react'
import items from '../articles-data/allData'
import Judul from '../articles-data/Judul'
import Button from '../articles-data/Buttons'

import Menu from '../articles-data/Menu'


const allCategories = ['All', ...new Set(items.map(item => item.category))];


export default function ArticleContent() {
    const [menuItem, setMenuItem] = useState(items);
    const [buttons] = useState(allCategories);

    const filter = (button) => {
        if(button === 'All'){
            setMenuItem(items);
            return;
        }
        const filterData = items.filter(item => item.category === button);
        setMenuItem(filterData);
    }

    return (
        <div className="bg-yellow-50 dark:bg-gray-900 min-h-screen transition duration-1000">
            <Judul />
            <Button button={buttons} filter={filter}/>
            <Menu menuItem={menuItem} />
        </div>
    )
}
