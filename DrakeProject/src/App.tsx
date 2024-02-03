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
const REDIRECT_URI = "http://localhost:5173/callback";
const code = new URLSearchParams(window.location.search).get('code')
function App() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() =>{
    //API Acces Token
    var authParam ={
      method: 'POST',
      headers:{
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' +CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParam )
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))
  },[])

  
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
        {code ? <About code ={code}/> : <Login/>}
      </div>
    </>
  )
}

export default App;
