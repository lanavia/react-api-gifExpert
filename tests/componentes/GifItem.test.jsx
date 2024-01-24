import { render } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem/>', () => {
    const title = 'Saitama'
    const url = 'https://onepunchman.fandom.com/es/wiki/Saitama'
    test('Should match with snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
    })
}) 