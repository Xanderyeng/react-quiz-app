import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
const mins = Math.floor(secondsRemaining /60);
const seconds = secondsRemaining % 60;

  useEffect(function () {
    
    const id = setInterval(function () {
        dispatch({ type: "tick"});
    }, 1000);

    return() => clearInterval(id);

  }, [dispatch]);

  return <div className='timer'>{mins < 0 && "0"}{mins}&#58;{seconds < 10 && "0"}{seconds}</div>;
}

export default Timer;
