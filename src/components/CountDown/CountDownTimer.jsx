import React from "react";
import { useCountdown } from "../../Hooks/useCountdown";
import "./CountDown.css";

const CountDownTimer = () => {
  const targetDate = new Date("2026-03-11");
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <div className="countdown-wrapper">
      <div className="countdown-overlay"></div>
      <h2 className="countdown-heading">Event Countdown</h2>
      <div className="countdown-main">
        <div className="countdown-timer">
          <div className="countdown-card">
            <h3 className="countdown-number">{days}</h3>
            <p className="countdown-label">days</p>
          </div>
        </div>
        <h3 className="countdown-separator">:</h3>
        <div className="countdown-timer">
          <div className="countdown-card">
            <h3 className="countdown-number">{hours}</h3>
            <p className="countdown-label">Hours</p>
          </div>
        </div>
        <h3 className="countdown-separator">:</h3>
        <div className="countdown-timer">
          <div className="countdown-card">
            <h3 className="countdown-number">{minutes}</h3>
            <p className="countdown-label">Minutes</p>
          </div>
        </div>
        <h3 className="countdown-separator">:</h3>
        <div className="countdown-timer">
          <div className="countdown-card">
            <h3 className="countdown-number">{seconds}</h3>
            <p className="countdown-label">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
