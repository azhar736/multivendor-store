import React, { useEffect, useState } from "react";

function CountDown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft (){
    const difference = +new Date("2024-01-01") - +new Date();
    // console.log("The Difference is ",difference);
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };
    // console.log("Time left",timeLeft);
    return timeLeft;
  };

  const timerComponents = Object.keys(timeLeft).map((interval)=>{
    if(!timeLeft[interval]){
        return null;
    }
    return (
        <span className="text-[25px] text-[#475ad2]">
        {timeLeft[interval]} {interval} {" "}
    </span>
    )
  })
  return (
    <div>
        {timerComponents.length ? timerComponents : <spa className="text-[red] text-[25px]">Time's up!</spa>}
    </div>
  );
}

export default CountDown;
