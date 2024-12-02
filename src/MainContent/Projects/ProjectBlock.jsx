import styles from './ProjectBlock.module.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProjectBlock({title, date, imageUrl, page}) {
    
    
    return (
        <>
            <div className={styles.projectContainer}>
                <div className={`${styles.overlay}`}></div>
                <a className={styles.projectContent} href={page} >
                    {title} <br/>
                    {date}
                </a>
                <Link to= {page} className={styles.link}>
                    <img
                            className={styles.image}
                            src={imageUrl}
                            alt=""
                    />
                </Link>
               
            </div>
        </>
    )
}