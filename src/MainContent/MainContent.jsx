import AboutMe from "./AboutMe/AboutMe";
import BlogPosts from "./BlogPosts/BlogPosts";
import Projects from "./Projects/Projects";
import Hello from './Hello/Hello'
import Sidebar from "../Sidebar/Sidebar";

import styles from './MainContent.module.css'
import { useState } from "react";
import Experiences from "./Experiences/Experiences";
import ContactMe from "./ContactMe/ContactMe";
import PerspectiveDistortCard from "../Components/PerspectiveDistortCard/PerspectiveDistortCard";

export default function MainContent() {
    const [animationOn, setAnimationOn] = useState(true)

    function setAnimation() {
        setAnimationOn(!animationOn)
    }

    return (
        <>
        <Sidebar setAnimationOn={setAnimation} animationOn={animationOn}/>
            <div className={`${styles.Container} w-full sm:ml-[18%]`}>
                <Hello />
                <AboutMe animationOn={animationOn} />
                <Projects animationOn={animationOn} />
                <Experiences animationOn={animationOn} />
                {/* <BlogPosts animationOn={animationOn} /> */}
                <ContactMe animationOn={animationOn} />
            </div>
        </>
    )
}