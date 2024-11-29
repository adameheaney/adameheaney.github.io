import TextBar from "../TextBar/TextBar";
import styles from './AboutMe.module.css'

export default function AboutMe({animationOn}) {
    return (
        <>
            <TextBar animationOn={animationOn} text='ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME&nbsp;'/>
            <section className={styles.sectionOne}>
                <p>
                    Hello
                </p>
            </section>
        </>
    )
}