import styles from './ProjectBlock.module.css'
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



export default function ProjectBlock({title, date, imageUrl, page, mobile = false, activeProject=false}) {
    
    return (
        <>
            <div className={`${styles.projectContainer} project`}>
                <div className={`${styles.blockContainer} h-[120px] justify-center w-[100%] lg:h-auto lg:justify-normal lg:w-[66%]`}>
                    <a className={`${styles.projectTitle} ${mobile ? activeProject ? styles.inactive : styles.active : ''} sm:pl-[50px]`} href={page} target='_blank'>
                        {title} <br/>
                        {date}
                    </a>
                    {/* <div className={`${styles.overlay} ${activeProject ? styles.inactive : styles.active}`}></div> */}
                    <Link to= {page} target='_blank' className={styles.link}>
                        <img
                                className={`${styles.image} ${mobile ? activeProject? styles.active : styles.inactive : ''} delay-200 transition-opacity ease-in duration-500 border-r-white border-none border-[3px] lg:border-solid lg:delay-0`}
                                src={imageUrl}
                                alt=""
                        />
                    </Link>
                </div>
               <div className={`${styles.buttonContainer} ${mobile ? activeProject? styles.active : styles.inactive : ''} hidden justify-center p-[10px] sm:p-[50px] sm:justify-end lg:flex`}>
                    <button className={`${styles.readMoreButton} ${mobile ? activeProject ? styles.active : styles.inactive : ''} text-[10px] lg:text-[14px]`}> Read more <MdOutlineKeyboardArrowRight /> </button>
               </div>
            </div>
        </>
    )
}