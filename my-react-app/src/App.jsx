function StopWatch() {
  return (
    <>
      <div id="sw-container">
        <h1>⏱️Stop Watch⏱️</h1>
        <div id="sw-clock">
          00:00:00
        </div>
        <div id="btn-grp">
          <button>Start</button>
          <button>Stop</button>
          <button>Reset</button>
        </div>
      </div>
    </>
  )
}

export default StopWatch