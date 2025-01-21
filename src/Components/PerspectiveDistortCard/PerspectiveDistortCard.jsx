import React, { useEffect, useRef } from 'react';
import styles from './PerspectiveDistortCard.module.css';

export default function PerspectiveDistortCard({content, title, customStyle}) {

    const cardRef = useRef(null);
    const scaleRef = useRef(null);
    const translateRef = useRef(null);

    const linearTransform = (x, max) => {
        return ((x - 1) / max) * 2 + 1;
    };

    const shadowLinearTransform = (x, max) => {
        return ((x - 1) / max) * 10 + 5;
    }


    const applyRotation = (event) => {
        const rect = cardRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        const width = rect.width;
        const height = rect.height;
        // console.log(x, y);

        const xRotation = linearTransform(x - width, width);
        const yRotation = linearTransform(y - height, height);

        const xShadow = shadowLinearTransform(x - width, width);
        const yShadow = shadowLinearTransform(y - height, height);

        // console.log(xShadow, yShadow);
        cardRef.current.style.transform = "rotate3d( " + yRotation*-1 + "," + xRotation + ", 0, 20deg)";
        cardRef.current.style.boxShadow = " " + xShadow*-1 + "px " + yShadow*-1 + "px 0px 2px rgba(255, 255, 255, 1)";
        cardRef.current.style.boxShadow = " " + xShadow*-1 + "px " + yShadow*-1 + "px 0px 2px rgba(255, 255, 255, 1)";
        cardRef.current.style.transformStyle = 'preserve-3d';
        scaleRef.current.style.transform = "scale(1.08)";
    };

    function removeRotation() {
        cardRef.current.style.transform = "none";
        cardRef.current.style.boxShadow = "none";
        scaleRef.current.style.transform = "none";
        cardRef.current.style.transformStyle = 'flat';
    }

    // const addDrag = (event) => {
    //     addEventListener("mousemove", drag);
    //     addEventListener("mouseup", drop);
    // }

    // const drag = (event) => {
    //     let first = true;
    //     const x = event.pageX;
    //     const y = event.pageY;
    //     let firstX = 0;
    //     let firstY = 0;

    //     if(first) {     
    //         first = false;
    //         firstX = x;
    //         firstY = y;
    //     }
    //     translateRef.current.style.top = `${y}px`;
    //     translateRef.current.style.left = `${x}px`;
    //     translateRef.current.style.position = 'absolute';
    //     console.log(x, y);
    // }

    // function drop() {
    //     translateRef.current.style.top = `0px`;
    //     translateRef.current.style.left = `0px`;
    //     translateRef.current.style.position = 'relative';
    //     removeEventListener("mousemove", drag);
    //     removeEventListener("mouseup", drop);
    // }

    return (
        // <div ref={translateRef} style={{}} >
            <div ref={scaleRef} className={styles.scaler} style={customStyle}>
                <div ref={cardRef} className={`${styles.cardContainer}`} 
                    onMouseMove={applyRotation} 
                    onMouseLeave={removeRotation} 
                    // onMouseUp={drop}
                    // onClick={addDrag}
                >
                    <div className={styles.textContainer}>
                        <h3>
                            {title}
                        </h3>
                        {content}
                    </div>
                </div>
            </div>
        // </div>
    );
}