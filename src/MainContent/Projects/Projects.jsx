import TextBar from "../../Components/TextBar/TextBar"
import ProjectBlock from "./ProjectBlock"
import styles from './Projects.module.css'


export default function Projects({animationOn}) {
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
                />
                <ProjectBlock 
                    title={'Photo to Color Palette'} 
                    date={'Nov \'22 - May \'23'} 
                    imageUrl={'/assets/images/ProjectThumbnails/ptcProjectIcon2.0.png'}
                    page={'https://www.github.com/adameheaney/PTC-GUI'}
                />

                <ProjectBlock 
                    title={'Personal Website'} 
                    date={'April \'23 - Current'} 
                    imageUrl={'/assets/images/ProjectThumbnails/adamheaneywebsite.png'}
                    page={'https://www.github.com/adameheaney/adameheaney.github.io-react'}
                />
                <ProjectBlock 
                    title={'Daily Geography'} 
                    date={'May \'23 - Aug \'23'} 
                    imageUrl={'/assets/images/ProjectThumbnails/dailygeographyicon.png'}
                    page={'https://www.github.com/adameheaney/daily-geography'}
                />
                <ProjectBlock 
                    title={'Backgammon'} 
                    date={'Sep \'23 - Feb \'24'}
                    imageUrl={'/assets/images/ProjectThumbnails/backgammonIcon.png'}
                    page={'https://www.github.com/adameheaney/backgammon-game'}
                />
                <ProjectBlock 
                    title={'SKITICK'} 
                    date={'May \'24 - August \'24'} 
                />
                <ProjectBlock 
                    title={'...'} 
                    imageUrl={'/assets/images/ProjectThumbnails/continueIcon.png'}
                    date={'To be continued!'} 
                />
            </div>
        </div>
    )
}