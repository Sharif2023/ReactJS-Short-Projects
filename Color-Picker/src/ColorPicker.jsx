import React, {useState, useEffect} from "react";

const ColorPicker =()=>{
    return (
        <div>
            <label for="favcolor">Select your favorite color:</label>
            <input type="color" id="favcolor" value="#ff0000" />
        </div>
    );
}

export default ColorPicker;