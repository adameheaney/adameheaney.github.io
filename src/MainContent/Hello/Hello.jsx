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
        <div id= 'welcome' className = {`${styles.helloContainer} section`}>
            <p className={isInactive ? styles.inactive : ''} style={{paddingLeft:'2vh', color:'#575757', alignItems:'center', display:'flex'}}> <BsArrowLeft /> &nbsp;&nbsp;&nbsp;Want animations off?</p>
            <p style={{padding:'25vh 10vh 0 10vh'}}>  
                <span style={{fontFamily:"Gotham", fontSize:'70px', marginBottom:'0'}}> Adam Heaney </span>
            </p>
            <p style={{fontSize:'20px', color:'#878787', padding:'0 10vh 0 10vh'}}>
                    Software Engineering | Web Development | Computer Science
            </p>
            <div className={isInactive ? styles.inactive : ''} style={{alignContent:'center', display:'flex', justifyContent:'center', paddingTop:'33vh'}}>
                <BsArrowDown size={30}/>
            </div>
        </div>
    )
}