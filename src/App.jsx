import { useState } from 'react'
import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom' 

import Sidebar from './Sidebar/Sidebar'
import MainContent from './MainContent/MainContent'

import blogdata from './MainContent/BlogPosts/blogdata'
import BlogPostPage from './MainContent/BlogPosts/BlogPostPage'

import projectdata from './MainContent/Projects/projectdata'

import NotFound from './MainContent/NotFoundPage/NotFound'
function App() {
  const [animationOn, setAnimationOn] = useState(false)

  function setAnimation() {
      setAnimationOn(!animationOn)
  }

  return (
    <>
        <div className={styles.mainContainer}>
          <Routes>
              <Route path='/' element={<MainContent animationOn={animationOn}/>} />
              {/* {blogdata.map((post) => (
                  <Route path={`/blog/${post.id}`} element={<BlogPostPage id={post.id}/>} key={post.id} />
              ))} */}
              {projectdata.map((project, index) => (
                  <Route path={`/project/${project.slug}`} element={project.pageComponent} key={index} />
              ))}  
              <Route path="*" element={<NotFound />} />   
          </Routes>
        </div>
      
    </>
  )
}

export default App
