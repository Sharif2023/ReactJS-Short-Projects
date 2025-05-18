import React, { useState, useEffect } from "react";
import { FiCopy } from "react-icons/fi"; //npm install react-icons

const ColorPicker = () => {
    const [color, setColor] = useState("FFFFFF");
    const [copied, setCopied] = useState(false);

    function handleColorChange(event) {
        setColor(event.target.value);
        setCopied(false);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(color).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        });
    };

    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
                <button className="copy-button" onClick={handleCopy} title="Copy color">
                <FiCopy size={18} />
                </button>
            </div>
            <label for="favcolor">Select your favorite color:</label>
            <input type="color" id="favcolor" value={color} onChange={handleColorChange} />
            {copied && <p className="copied-message">Copied!</p>}
        </div>
    );
}

export default ColorPicker;