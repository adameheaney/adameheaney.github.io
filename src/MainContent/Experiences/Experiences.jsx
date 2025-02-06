import styles from './Experiences.module.css'
import ExperienceData from './ExperienceData'
import ExperienceBlock from './ExperienceBlock'

export default function Experiences() {
    return (
        <div id='Experiences' className={styles.ExperiencesSection}>
            <h1> Experiences </h1>
            {ExperienceData.map((experience, index) => {
                return (
                    <>
                        <ExperienceBlock key={index} data={experience}/>
                    </>
                )
            })}
        </div>
    )
}