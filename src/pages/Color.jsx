import {ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { useState } from 'react';


// function Color() {
//     const [color, setColor] = useColor("#94A7AE");
//     return <div> <h1>Pick a color</h1><ColorPicker color={color} onChange={setColor} />
//     <input></input>
//     </div>
// }
// export default Color;

// försöker usestate istället av usecolor
function Color() {
    const [color, setColor] = useState("#94A7AE");
    const eventColorPicker = (e) => {
        setColor(ne.target.value)
    };

    return <div style={{ backgroundColor: color}}> 
        <h1>Pick a color</h1>
        <label for="colorChoice">Pick a color:</label>
         <input type="color" id="colorChoice" value={color} onChange={eventColorPicker}>
        </input>
    </div>
}
export default Color;
