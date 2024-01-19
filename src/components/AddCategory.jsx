import { useState } from "react"

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('One Punch 2')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(inputValue)
        if (inputValue.trim().length <= 1) return

        setCategories(prevCategories =>
            prevCategories.some(category => category.toLowerCase() === inputValue.toLowerCase())
                ? (console.log("el valor ya existe", inputValue), prevCategories)
                : (console.log("valor nuevo", inputValue), [...prevCategories, inputValue])
        );
        setInputValue('')


    }
    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={(event) => onInputChange(event)} />
        </form>
    )
}
