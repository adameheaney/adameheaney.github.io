import { useState } from 'react'
import styles from './App.module.css'

import Sidebar from './Sidebar/Sidebar'
import MainContent from './MainContent/MainContent'

function App() {
  const [animationOn, setAnimationOn] = useState(true)

  function setAnimation() {
      setAnimationOn(!animationOn)
      console.log('changed animation')
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <Sidebar setAnimationOn={setAnimation} animationOn={animationOn}/>
        <MainContent animationOn={animationOn}/>
      </div>
    </>
  )
}

export default App
