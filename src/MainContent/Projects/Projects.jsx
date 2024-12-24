import TextBar from "../../Components/TextBar/TextBar"
import ProjectBlock from "./ProjectBlock"
import styles from './Projects.module.css'


export default function Projects({animationOn}) {
    return (
        <>
            <TextBar id='projects' left={false} animationOn={animationOn} text='PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS PROJECTS&nbsp;'/>
            <div  className={styles.sectionTwo}>
                <div className={styles.row}>
                    <ProjectBlock 
                        title={'Laser Defender'} 
                        date={'Summer of \'21'} 
                        imageUrl={'/assets/images/ProjectThumbnails/gameProjectIcon.png'}
                        page={'https://machooey.itch.io/plane-defender-game'}
                    />
                    <ProjectBlock 
                        title={'Photo to Color Palette'} 
                        date={'Nov \'22 - May \'23'} 
                        imageUrl={'/assets/images/ProjectThumbnails/ptcProjectIcon.png'}
                        page={'https://www.github.com/adameheaney/PTC-GUI'}
                    />
                    <ProjectBlock 
                        title={'Personal Website'} 
                        date={'April \'23 - Current'} 
                        imageUrl={'/assets/images/ProjectThumbnails/websiteProjectIcon.png'}
                        page={'https://www.github.com/adameheaney/adameheaney.github.io-react'}
                    />
                </div>
                <div className={styles.row}>
                    <ProjectBlock 
                        title={'Daily Geography'} 
                        date={'May \'23 - Aug \'23'} 
                        imageUrl={'/assets/images/ProjectThumbnails/Daily Geography Thumbnail.png'}
                        page={'https://www.github.com/adameheaney/daily-geography'}
                    />
                    <ProjectBlock 
                        title={'Backgammon'} 
                        date={'Sep \'23 - Feb \'24'}
                        
                        page={'https://www.github.com/adameheaney/backgammon-game'}
                    />
                    <ProjectBlock 
                        title={'SKITICK'} 
                        date={'May \'24 - August \'24'} 
                    />
                </div>
                <div className={styles.row}>
                    <ProjectBlock 
                        title={'...'} 
                        date={'To be continued!'} 
                    />
                </div>
            </div>
        </>
    )
}