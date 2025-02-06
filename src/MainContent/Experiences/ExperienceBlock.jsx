import React from 'react';
import styles from './ExperienceBlock.module.css';


export default function ExperienceBlock({data}) {
    return (
        <div className={`w-fill h-[380px]`}>
            <h2>{data.company} - {data.title}</h2>
            <div className='flex flex-row p-[50px]'>
                <div className='w-fit flex flex-col'>
                    <img src={data.image} alt={data.company} className=' float-left h-[200px] w-[200px] object-cover'/>
                    <h3 className='text-center pt-[20px]'>{data.date}</h3>
                </div>
                <ul className='w-[80%] p-[20px]'>
                    {data.bullets.map((bullet, index) => {
                        return (
                            <li key={index}>{bullet}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}