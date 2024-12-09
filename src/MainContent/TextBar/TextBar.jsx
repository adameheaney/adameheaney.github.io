import { useRef, useEffect, useState } from "react";
import styles from "./TextBar.module.css";

export default function TextBar({ text, animationOn, left = true, id }) {
    return (
        <div id = {id} className={styles.scrollingtextcon}>
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
