import React, { useState } from 'react'

function CustomInp() {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (event) =>{
        setInputValue(event.target.value);
    }
    return (
        <input type="text" value = {inputValue} onChange={handleChange}/>
    )
}

export default CustomInp