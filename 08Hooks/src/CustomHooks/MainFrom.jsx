import { useEffect, useState } from "react";

function Form(){

    const [value, setValue] = useState('');

        function handleChange(e){
        setValue(e.target.value);
    }
    // handleChange();


    return (
        <>
        <form action="">
            <input type="text" placeholder="name"  />
            <input type="password" placeholder="password"  />
            <select name="" id="" value={value}  onChange={handleChange}>
                <option value="1">1</option>
                 <option value="2">2</option>
                  <option value="3">3</option>
            </select>
            {value}
        </form>
        </>
    )
}
export default Form;