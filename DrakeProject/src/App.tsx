import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Timer from './components/Timer'
import { useEffect } from 'react'

const CLIENT_ID = "e1635bb6cf544f28a1aa7c4844000ff7"
const CLIENT_SECRET = "d2114d03781c4b328b2756a755f81d49"
function App() {

  useEffect(() =>{
    //API Acces Token
    var authParam ={
      method: 'POST',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credientials&client_id=' + CLIENT_ID + '&client_secret=' +CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParam )
      .then(result => result.json)
      .then(data => console.log(data))
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
        <About></About> 
      </div>
    </>
  )
}

export default App
