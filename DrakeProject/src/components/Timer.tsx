import React from 'react'

const Timer = () => {
    document.addEventListener('DOMContentLoaded', function() {
        timeClock();
      });
    
      function timeClock()
      {
          const now = new Date();
          let hourM = now.getHours()
          document.getElementById("hours").textContent = `${hourM}` ;
      }
  return (
    <div className='text-white'>
            <p id='hours'></p>
            <p id='minutes'></p>
            <p id='zone'></p>
    </div>
  )
}

export default Timer