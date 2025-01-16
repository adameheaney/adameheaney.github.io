import styles from './ProjectBlock.module.css'
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



export default function ProjectBlock({title, date, imageUrl, page, slug, mobile = false, activeProject=false}) {
    
    return (
        <>
            <div className={`${styles.projectContainer} project flex-col lg:flex-row`}>
                <div className={`${styles.blockContainer}  h-auto justify-center w-[100%] lg:h-[150px] lg:justify-normal lg:w-[66%]`}>
                    <Link onClick={() => window.scrollTo(0, 0)} className={`${styles.projectTitle} ${mobile ? activeProject ? styles.inactive : styles.active : ''} sm:pl-[50px]`} to={'/project/' + slug}>
                        {title} <br/>
                        {date}
                    </Link>
                    {/* <div className={`${styles.overlay} ${activeProject ? styles.inactive : styles.active}`}></div> */}
                    <Link onClick={() => window.scrollTo(0, 0)} to= {'/project/' + slug} className={styles.link}>
                        <img
                                className={`${styles.image} ${mobile ? activeProject? styles.active : styles.inactive : ''} delay-200 transition-opacity ease-in duration-500 border-b-white border-solid border-t-0 border-l-0 border-r-0 border-[3px] lg:border-r-white lg:border-r-[3px] lg:border-solid lg:delay-0
                                                                                                                            `}
                                src={imageUrl}
                                alt=""
                        />
                    </Link>
                </div>
               <div className={`${styles.buttonContainer} ${/*mobile ? activeProject? styles.active : styles.inactive : ''*/''} flex justify-center p-[10px] sm:justify-end lg:flex`}>
                    <p className={`${styles.projectRightTitle} ${mobile ? activeProject ? styles.active : styles.inactive : ''} flex pr-[50px] delay-200 transition-opacity ease-in duration-500 lg:hidden lg:delay-0`}>
                        {title}</p>
                    <Link onClick={() => window.scrollTo(0, 0)} to={'/project/' + slug} className={`${styles.readMoreButton} ${mobile ? activeProject ? styles.active : styles.inactive : ''} delay-200 transition-opacity ease-in duration-500 text-[10px] lg:text-[14px] lg:delay-0`}> Read more <MdOutlineKeyboardArrowRight /> </Link>
               </div>
            </div>
        </>
    )
}