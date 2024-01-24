import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'


export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category)

    console.log({ images, isLoading })
    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>


                { //opcion 2 esparcir todas las propiedades de la imagen con el operador spread ...
                    images.map((image) => (

                        <GifItem key={image.id} {...image} />
                    ))

                }
            </div>
        </>
    )
}
