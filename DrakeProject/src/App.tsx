import './App.css'
import Navbar from './components/Navbar'
function App() {
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
      
          <h1>Vite + React</h1>
        
          <div className="card">
            
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </>
  )
}

export default App
