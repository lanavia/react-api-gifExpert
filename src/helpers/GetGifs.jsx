export const getGifs = async (category) => {


    const url = `https://api.giphy.com/v1/gifs/search?api_key=BNBqn3cvy33JxVhwnhzVU434qGO3b0Sf&q=${category}&limit=3`
    const resp = await fetch(url)
    const { data } = await resp.json()

    //no necesito todo lo q viene de la data, así q extraigo solo la necesaria
    //retorno el objeto ()
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs

}