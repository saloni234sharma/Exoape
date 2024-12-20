import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import WorkSec from './components/WorkSec'
import Playreel from './components/Playreel'
import Images from './components/Images'
import Spread from './components/Spread'
import Black from './components/Black'
import LocomotiveScroll from 'locomotive-scroll';




const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full'>
      <Navbar/>
      <Landing/>
      <WorkSec/>
      <Playreel/>
      <Images/>
      <Spread/>
      <Black/>
    </div>
  )
}

export default App