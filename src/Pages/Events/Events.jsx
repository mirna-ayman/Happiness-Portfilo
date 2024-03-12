import React, { useEffect, useState } from "react";
import events from '../../Assets/events.png'
function Events() {
    // get Date
const today = new Date();
const Years = today.getUTCFullYear()

// // day-num
 const day = today.getDate();

// // dayName
let dayName = today.getDay();
switch (dayName) {
    case 0:
        dayName = 'Sunday'
        break;
    case 1:
        dayName = 'Monday'
        break;
    case 2:
        dayName = 'Tuesday'
        break;
    case 3:
        dayName = 'Wednesday'
        break;
    case 4:
        dayName = 'Thursday'
        break;
    case 5:
        dayName = 'Friday'
        break;
    default:
        dayName = 'Saturday'
        break;
}


// // Get time in UTC
 const utcHours = today.getUTCHours();


// // Calculate Cairo time by adding the time zone offset
const egyptOffset = 2; // UTC +2 for Cairo
const egyptHours = utcHours + egyptOffset;


// // Convert Cairo time to 12-hour format
// // Update elements with Cairo time
const isPM = egyptHours >= 12;
const hours = egyptHours % 12;
const ampm = isPM ? "PM" : "AM";

  // seconds , minutes
const [time, setTime] = useState({
    seconds: new Date().getSeconds(),
    minutes: new Date().getMinutes(),
  });
// console.log(time)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        let newSeconds = prevTime.seconds + 1;
        let newMinutes = prevTime.minutes;

        if (newSeconds >= 60) {
          newSeconds = 0;
          newMinutes++;
        }

        return {
          seconds: newSeconds,
          minutes: newMinutes,
        };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>
    {/* <!-- Start Events --> */}
    <div className="events" id="events">
        <h2 className="main-title">Latest Events</h2>
        <div className="container">
            <img src={events} alt=""/>
            <div className="info">
                <div className="time">
                    <div className="unit">
                        <span id="day-num">{day}</span>
                        <span id="day-name">{dayName}</span>
                    </div>
                    <div className="unit">
                        <span id="hours">{hours}</span>
                        <span id="hour-time">{ampm}</span>
                    </div>
                    <div className="unit">
                        <span id="minutes">{time.minutes}</span>
                        <span>Minutes</span>
                    </div>
                    <div className="unit">
                        <span id="seconds">{time.seconds}</span>
                        <span>Seconds</span>
                    </div>
                </div>
                <h2 className="title">Event {Years}</h2>
                <p className="description">A technical event is being prepared to express the company's interest in development and interest in keeping pace with modern technical developmentز</p>
            </div>
            
        </div>
    </div>
    <div className="spikes"></div>
    {/* <!-- End Events --> */}
  </div>;
}

export default Events;
