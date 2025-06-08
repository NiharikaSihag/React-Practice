import { useState } from "react";
function FormInput(initialValue){
    const [value, setValue] = useState(initialValue);
    function handleChange(e){
        setValue(e.target.value)
    };
    return {
        value,
        onChange: handleChange
    }
}
export default FormInput;