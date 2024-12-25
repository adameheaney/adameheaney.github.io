import AboutMe from "./AboutMe/AboutMe";
import BlogPosts from "./BlogPosts/BlogPosts";
import Projects from "./Projects/Projects";
import Hello from './Hello/Hello'

import styles from './MainContent.module.css'
import { useState } from "react";
import Experiences from "./Experiences/Experiences";
import ContactMe from "./ContactMe/ContactMe";

export default function MainContent({animationOn=true}) {

    return (
        <div className={styles.Container}>
            <Hello />
            <AboutMe animationOn={animationOn} />
            <Projects animationOn={animationOn} />
            {/* <Experiences animationOn={animationOn} /> */}
            {/* <BlogPosts animationOn={animationOn} /> */}
            <ContactMe animationOn={animationOn} />
        </div>
    )
}