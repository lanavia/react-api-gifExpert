import { useState } from "react"
import PropTypes from 'prop-types'


export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(inputValue)
        if (inputValue.trim().length <= 1) return

        setInputValue('')
        onNewCategory(inputValue.trim())
    }
    return (
        /*  Remove (event)
        <form onSubmit={(event) => onSubmit(event)}>
             <input type="text"
                 placeholder="Buscar gifs"
                 value={inputValue}
                 onChange={(event) => onInputChange(event)} />
         </form> */

        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}