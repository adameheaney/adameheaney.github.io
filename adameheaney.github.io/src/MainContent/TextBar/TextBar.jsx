import { useRef, useEffect, useState } from "react";
import styles from "./TextBar.module.css";

export default function TextBar({ text, animationOn, left = true }) {
    return (
        <div className={styles.scrollingtextcon}>
            <p
                className={`${left? styles.scrollingtextleft: styles.scrollingtextright} ${!animationOn? styles.paused: ""}`}
            >
                {text}
            </p>
            <p
                className={`${left? styles.scrollingtextleft: styles.scrollingtextright} ${!animationOn? styles.paused: ""}`}
            >
                {text}
            </p>
        </div>
    );
}
