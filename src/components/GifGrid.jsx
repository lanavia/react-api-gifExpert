import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs'
import { GifItem } from './GifItem'


export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([])

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
    }

    useEffect(() => {
        getImages()
    }, [])



    getGifs(category)
    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>

                {/* opcion 1
                images.map(({ id, title, url }) => (

                    <GifItem key={id} title={title} url={url} />
                ))

                */}

                { //opcion 2 esparcir todas las propiedades de la imagen con el operador spread ...
                    images.map((image) => (

                        <GifItem key={image.id} {...image} />
                    ))

                }
            </div>
        </>
    )
}
