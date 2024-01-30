import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem/>', () => {
    const title = 'Saitama'
    const url = 'https://onepunchman.fandom.com/es/wiki/Saitama'
    test('Should match with snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })

    test('Display the image using the url and the alt indicated', () => {
        render(<GifItem title={title} url={url} />)
        //screen.debug()
        /*  console.log(screen.getByRole('img').src) //get the url of the image
         console.log(screen.getByRole('img').alt) //get the alt of the image */
        // expect(screen.getByRole('img').src).toBe(url)
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(alt)

    })
}) 