import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Timer from './components/Timer'
import Login from './components/Login'
import { useEffect, useState } from 'react'




{/*I CAN GET THE ACCESS TOKEN, NEED TO MAKE FUNCTION OR SOME OTHER THING 
SO THAT IT AUTOMATICALLY PUTS THE ALBUM IMAGES INTO CAROUSEL COMPONENT*/}
const CLIENT_ID = "e1635bb6cf544f28a1aa7c4844000ff7"
const CLIENT_SECRET = "d2114d03781c4b328b2756a755f81d49"

function App() {
  

  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get('code');
  
  return (
    <>
      <div className = "pageView">
        <div id = "home-hero">
          <div className='home-hero-logo'>
              <img src='../../ovo.png'></img>
          </div>
          <Navbar></Navbar>
          <video loop autoPlay playsInline muted>
            <source src='../../drake.mp4' type='video/mp4'></source>
            Your browser doesnt support this
          </video>
          <Timer></Timer>
        </div>
        { (code ? <About code={code}  /> : <Login />)}
        {code}
      </div>
    </>
  )
}

export default App;
