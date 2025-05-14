import React, { useEffect, useState } from "react"

const StopWatch = () => {
  //state to store time
  const [time, setTime] = useState(0);
  //check stopwatch running or not
  const [isRunning, setisRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => { setTime(t => t + 1) }, 10);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  // Hours calculation
  const hours = Math.floor(time / 360000);

  // Minutes calculation
  const minutes = Math.floor((time % 360000) / 6000);

  // Seconds calculation
  const seconds = Math.floor((time % 6000) / 100);

  // Milliseconds calculation
  const milliseconds = time % 100;

  const start = () => {
    setisRunning(true);
  }

  const stop = () => {
    setisRunning(false);
  }

  const reset = () => {
    setisRunning(false);
    setTime(0);
  }


  return (
    <>
      <div id="sw-container">
        <h1>⏱️Stop Watch⏱️</h1>
        <div id="sw-clock">
          {hours.toString().padStart(2, "0")}:
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}:
          {milliseconds.toString().padStart(2, "0")}
        </div>
        <div id="btn-grp">
          <button className="start" onClick={start}>Start</button>
          <button className="stop" onClick={stop}>Stop</button>
          <button className="reset" onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
};
export default StopWatch