import TextBar from "../../Components/TextBar/TextBar"
import ProjectBlock from "./ProjectBlock"
import styles from './Projects.module.css'
import projblockStyles from './ProjectBlock.module.css'

import { useState, useEffect } from "react"
import projectdata from './projectdata.jsx' 

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
  
        window.addEventListener('resize', handleResize);
  
        // Cleanup the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  
    return width;
};
  

export default function Projects({animationOn}) {
    const width = useWindowWidth();
    let small = width <= 1024 ? true : false;

    const [activeProject, setActiveProject] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            /*if(small) {*/
                const projects = document.querySelectorAll('.project');
                const scrollY = window.scrollY;
                // console.log('scroll ' + scrollY + ' innerhegiht ' + window.innerHeight)
                const center = (window.innerHeight / 2)
                let noneInFocus = true
                for (let i = 0; i < projects.length; i++) {
                    const rect = projects[i].getBoundingClientRect()
                    const elementTop = rect.top;
                    const elementBottom = rect.bottom;
                    // console.log('top: ' + elementTop + ' bottom: ' + elementBottom + ' center: ' + center);
                    if(center < elementBottom && center > elementTop) {
                        setActiveProject(i)
                        noneInFocus = false;
                    }
                }
                if(noneInFocus) setActiveProject(-1)    
            //}
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div className='section bg-black' id='Projects' >
            <h1>
                Projects
            </h1>
            <div className={styles.sectionTwo}>
                {projectdata.map((project, index) => (
                    <ProjectBlock 
                        title={project.title} 
                        date={project.date} 
                        imageUrl={project.imageUrl}
                        page={project.page}
                        slug={project.slug}
                        activeProject = {activeProject === index ? true : false}
                        mobile = {small}
                        key = {index}
                    />
                ))}
                <ProjectBlock 
                    title={'...'} 
                    imageUrl={'/assets/images/ProjectThumbnails/continueIcon.png'}
                    date={'To be continued!'}
                    activeProject = {activeProject === 6 ? true : false}
                    mobile = {small}
                />
            </div>
        </div>
    )
}