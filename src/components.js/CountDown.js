import React, { useState, useEffect } from 'react';

const CountDown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('10/05/2025 10:20:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <div className="countDown">
        {timeLeft.days !== undefined && (
          <div className="container">
            <span className="a">{timeLeft.days}</span>
          </div>
        )}
        {timeLeft.hours !== undefined && (
          <div className="container">
            <span className="a">{timeLeft.hours}</span>
          </div>
        )}
        {timeLeft.minutes !== undefined && (
          <div className="container">
            <span className="a">{timeLeft.minutes}</span>
          </div>
        )}
        {timeLeft.seconds !== undefined && (
          <div className="container">
            <span className="a">{timeLeft.seconds}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountDown;
