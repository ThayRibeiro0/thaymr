import background from './video/backvideo.mp4'
import './css/Home.css'
import { motion } from 'framer-motion'
import ComputersCanvas from './gltf/Computers'

const Home = () => {
  return (
    <div className='home-container'>
      
      <div className="videoback">
        <video autoPlay loop muted plays-inline id='bg-video'> 
          <source src={background} type="video/mp4" />
          
        </video>

        
        <div className='content-text'>
          <h1>Hi, I am <span className='myname'>&nbsp;Thays Moia Ribeiro</span></h1>
          <p>I have Graduation degree in Law ⚖, and Association degree in System Developement 💻and Administration 📊</p>
        </div>
        <div className='content-people' style={{width: 1500, height: 400, marginTop: -100}}>
          <ComputersCanvas />
        </div>
      </div>


    </div>
  )
}

export default Home