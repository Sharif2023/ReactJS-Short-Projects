import React, { useState, useEffect } from "react";

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);

    }, []);

    const hours = time.getHours()
    const phours = ((hours % 12) || 12).toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    const period = (hours >= 12) ? 'PM' : 'AM';
    const date = time.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="clock-container">
            <div className="clock">
                <div className="time-segment">{phours}
                    <div className="segment-label">Hours</div>
                </div>
                <div className="time-segment">{minutes}
                    <div className="segment-label">Minutes</div>
                </div>
                <div className="time-segment">{seconds}
                    <div className="segment-label">Seconds</div>
                </div>
                <div className="time-segment">{period}
                    <div className="segment-label">Periods</div>
                </div>
            </div>
            <div className="date">{date}</div>
        </div>
    );
}

export default DigitalClock