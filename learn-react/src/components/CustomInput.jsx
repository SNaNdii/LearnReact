import React, { useState } from 'react'

function CustomInput() {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (event) =>{
        setInputValue(event.target.value);
    }
    return (
        <input type="text" value = {inputValue} onChange={handleChange}/>
    )
}

export default CustomInput