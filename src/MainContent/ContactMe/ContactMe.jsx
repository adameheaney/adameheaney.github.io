import styles from './ContactMe.module.css'
import TextBar from '../../Components/TextBar/TextBar'

import { MdLocalPhone } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";


export default function ContactMe({animationOn}) {
    return (
        <div id='contact-me' className={`${styles.ContactMeSection} section`}>
            <h1>
                Contact Me
            </h1>
            <div className={`${styles.infoContainer} flex flex-col lg:flex-row flex-grow`}>
                <span className={styles.info}>
                    <IoMail size={30}/> adamheaney@brandeis.edu </span>
                <span className={`${styles.info} `}>
                    <MdLocalPhone size={30}/> 732-343-4613</span>
                <span className={styles.info}>
                    <FaGithub size={30}/> github.com/adameheaney</span>
            </div>
        </div>
    )
}