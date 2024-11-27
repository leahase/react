import {ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

function Color() {
    const [color, setColor] = useColor("#94A7AE");
    return <div> <ColorPicker color={color} onChange={setColor} />;
    </div>
}
export default Color;