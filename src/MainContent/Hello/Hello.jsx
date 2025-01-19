import styles from './Hello.module.css'
import { BsArrowDown, BsArrowLeft } from 'react-icons/bs'
import { useState, useEffect } from 'react';

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
            <div className={isInactive ? styles.inactive : ''} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop:'auto', paddingBottom:'10px'}}>
                <BsArrowDown className={styles.arrowContainer} size={30}/> Scroll
            </div>
        </div>
    )
}