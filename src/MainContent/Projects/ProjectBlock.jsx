import styles from './ProjectBlock.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";


export default function ProjectBlock({title, date, imageUrl, page}) {
    
    
    return (
        <>
            <div className={styles.projectContainer}>
                <div className={styles.blockContainer}>
                    <a className={styles.projectContent} href={page} target='_blank'>
                        {title} <br/>
                        {date}
                    </a>
                    <div className={`${styles.overlay}`}></div>
                    <Link to= {page} target='_blank' className={styles.link}>
                        <img
                                className={styles.image}
                                src={imageUrl}
                                alt=""
                        />
                    </Link>
                </div>
               <div className={styles.arrowContainer}>
                    <FaArrowRightLong className={styles.arrow}/>
               </div>
            </div>
        </>
    )
}