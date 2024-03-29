import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon ball'])
    console.log(categories)

    const handleNewCategory = (newCategory) => {
        setCategories((prevCategories) => [...prevCategories, newCategory]);
    };
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            {/* Listado de Gif */}
            <AddCategory onNewCategory={handleNewCategory} />

            {/* acá usamos el event 
            <button onClick={onAddCategory}>add category</button>*/}

            {/* versión 4 simplificada */}
            {categories.map((category) => (<GifGrid key={category} category={category} />))}


            {/* Gift Item */}
        </>
    )
}
