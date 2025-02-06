import styles from './Hello.module.css'
import { BsArrowDown, BsArrowLeft } from 'react-icons/bs'
import { useState, useEffect } from 'react';
import ExternalLink from '../../Components/ExternalLink/ExternalLink';
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";



export default function Hello() {
    const [isInactive, setIsInactive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsInactive(true); // Set to true when the page is scrolled
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);  // Cleanup on component unmount
        };
    }, []);

    return (
        <div id= 'Welcome' className = {`${styles.helloContainer} section justify-center text-center sm:text-left`}>
            {/* <p className={isInactive ? styles.inactive : ''} style={{paddingLeft:'2vh', color:'#575757', alignItems:'center', display:'flex'}}> <BsArrowLeft /> &nbsp;&nbsp;&nbsp;Want marquee on?</p> */}
            <span className={`${styles.fadeIn} text-[50px] sm:text-[70px]`}> Adam Heaney </span>
            <p className={styles.fadeIn} style={{fontSize:'20px', color:'#878787'}}>
                    Software Engineering | Web Development | Computer Science
            </p>
            <div className={`${styles.fadeIn} mt-[40px] flex row gap-10 h-[50px]`}>
                <ExternalLink 
                    link={'https://drive.google.com/file/d/1UAIq_9aLVVYzpRgZxyxD9IIiBj8Duh-X/view?usp=drive_link'}
                    text={'Resume'}
                    icon={<IoDocumentTextSharp size={20}/>}
                />
                <ExternalLink 
                    link={'https://github.com/adameheaney'}
                    text={'GitHub'}
                    icon={<FaGithub size={20}/>}
                />
                <ExternalLink 
                    link={'https://linkedin.com/in/adam-heaney'}
                    text={'LinkedIn'}
                    icon={<BsLinkedin size={20}/>}
                />
            </div>

            <div className={isInactive ? styles.inactive : ''} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop:'auto', paddingBottom:'10px'}}>
                <BsArrowDown className={styles.arrowContainer} size={30}/> Scroll
            </div>
        </div>
    )
}