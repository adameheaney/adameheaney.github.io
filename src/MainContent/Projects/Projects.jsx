import TextBar from "../../Components/TextBar/TextBar"
import ProjectBlock from "./ProjectBlock"
import styles from './Projects.module.css'
import projblockStyles from './ProjectBlock.module.css'

import { useState, useEffect } from "react"

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
        <div className='section bg-black' id='projects' >
            <h1>
                Projects
            </h1>
            <div className={styles.sectionTwo}>
                <ProjectBlock 
                    title={'Laser Defender'} 
                    date={'Summer of \'21'} 
                    imageUrl={'/assets/images/ProjectThumbnails/laserdefenderthumbnail.png'}
                    page={'https://machooey.itch.io/plane-defender-game'}
                    activeProject = {activeProject === 0 ? true : false}
                    mobile = {small}
                />
                <ProjectBlock 
                    title={'Photo to Color Palette'} 
                    date={'Nov \'22 - May \'23'} 
                    imageUrl={'/assets/images/ProjectThumbnails/ptcProjectIcon2.0.png'}
                    page={'https://www.github.com/adameheaney/PTC-GUI'}
                    activeProject = {activeProject === 1 ? true : false}
                    mobile = {small}
                />

                <ProjectBlock 
                    title={'Personal Website'} 
                    date={'April \'23 - Current'} 
                    imageUrl={'/assets/images/ProjectThumbnails/adamheaneywebsite.png'}
                    page={'https://www.github.com/adameheaney/adameheaney.github.io-react'}
                    activeProject = {activeProject === 2 ? true : false}
                    mobile = {small}
                />
                <ProjectBlock 
                    title={'Daily Geography'} 
                    date={'May \'23 - Aug \'23'} 
                    imageUrl={'/assets/images/ProjectThumbnails/dailygeographyicon.png'}
                    page={'https://www.github.com/adameheaney/daily-geography'}
                    activeProject = {activeProject === 3 ? true : false}
                    mobile = {small}
                />
                <ProjectBlock 
                    title={'Backgammon'} 
                    date={'Sep \'23 - Feb \'24'}
                    imageUrl={'/assets/images/ProjectThumbnails/backgammonIcon.png'}
                    page={'https://www.github.com/adameheaney/backgammon-game'}
                    activeProject = {activeProject === 4 ? true : false}
                    mobile = {small}
                />
                <ProjectBlock 
                    title={'SKITICK'} 
                    date={'May \'24 - August \'24'} 
                    activeProject = {activeProject === 5 ? true : false}
                    mobile = {small}
                />
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