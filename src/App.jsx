import { useState } from 'react'
import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom' 

import Sidebar from './Sidebar/Sidebar'
import MainContent from './MainContent/MainContent'
import blogdata from './MainContent/BlogPosts/blogdata'
import BlogPostPage from './MainContent/BlogPosts/BlogPostPage'

function App() {
  const [animationOn, setAnimationOn] = useState(true)

  function setAnimation() {
      setAnimationOn(!animationOn)
  }

  return (
    <>
      
        <div className={styles.mainContainer}>
          <Sidebar setAnimationOn={setAnimation} animationOn={animationOn}/>
          <Routes>
              <Route path='/' element={<MainContent animationOn={animationOn}/>} />
              {blogdata.map((post) => (
                  <Route path={`/blog/${post.id}`} element={<BlogPostPage id={post.id}/>} key={post.id} />
              ))}    
          </Routes>
        </div>
      
    </>
  )
}

export default App
