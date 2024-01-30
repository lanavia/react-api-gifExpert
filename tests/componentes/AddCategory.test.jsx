const { render, screen, fireEvent } = require("@testing-library/react")
import { AddCategory } from "../../src/components/AddCategory"


describe('Test in <AddCategory /> ', () => {
    test('It must to change the value of textbox', () => {

        render(<AddCategory onNewCategory={() => { }} />)
        const input = screen.getByRole('textbox')

        //trigger an event, input, change, this time 
        fireEvent.input(input, { target: { value: 'Saitama' } })
        expect(input.value).toBe('Saitama')
        screen.debug()


    })
})