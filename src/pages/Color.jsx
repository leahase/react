import {ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

function Color() {
    const [color, setColor] = useColor("#94A7AE");
    return <div> <h1>Pick a color</h1><ColorPicker color={color} onChange={setColor} />;
    </div>
}
export default Color;