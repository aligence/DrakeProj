import React, { useEffect, useRef } from 'react';

const Timer = () => {
  const hoursRef = useRef(null);
  const minRef = useRef(null);
  const tZRef = useRef(null);
  useEffect(() => {
    timeClock();
    getUserTimezone();
  }, []);

  function timeClock() {
    const now = new Date();
    let hourM = now.getHours();
    let minuteM = now.getMinutes();
    // Use optional chaining to avoid null/undefined error
    if (hourM > 12){
      hourM -=12;
    }
    hoursRef.current.innerHTML = `${hourM}`;
    if (minuteM <10){
      minRef.current.innerHTML = `0${minuteM}`
    }
    else{
      minRef.current.innerHTML = `${minuteM}`
    }
  }

  function getUserTimezone() {
    const now = new Date();
    const options = { timeZoneName: 'long' };
    tZRef.current.innerHTML = Intl.DateTimeFormat(undefined, options).formatToParts(now)
      .find(part => part.type === 'timeZoneName').value;
  }

  return (
    <div className='text-white flex flex-col items-center absolute bottom-64 time-date'>
      <p className='flex flex-row text-6xl font-mono'>
        <span ref={hoursRef} id='hours'></span>
        <span id ="colon" >:</span>
        <span ref = {minRef}id='minutes'></span>
      </p>
      <span ref ={tZRef} id='zone' className='text-3xl font-mono italic'></span>
    </div>
  );
};

export default Timer;
