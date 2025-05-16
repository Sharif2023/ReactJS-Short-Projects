import React, { useState } from "react";

const CounterProgram = () => {
    const [count, setCount] = useState(0);
    const [incClicks, setIncClicks] = useState(0);
    const [decClicks, setDecClicks] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
        setIncClicks(incClicks + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
        setDecClicks(decClicks + 1);
    };

    const reset = () => {
        setCount(0);
    }

    return (
        <div className="container">
            <h1 className="title">Smart Counter</h1>
            <div className="counter-display">{count}</div>
            <div className="button-group">
                <button className="btn decrement" onClick={handleDecrement}>
                    -
                </button>
                <button className="btn reset" onClick={reset}>Reset</button>
                <button className="btn increment" onClick={handleIncrement}>
                    +
                </button>
            </div>
            <div className="clicks">
                <p>Increment Clicks: <strong>{incClicks}</strong></p>
                <p>Decrement Clicks: <strong>{decClicks}</strong></p>
            </div>
        </div>
    );
};

export default CounterProgram;
