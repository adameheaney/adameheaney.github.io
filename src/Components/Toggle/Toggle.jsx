import styles from './Toggle.module.css'

import React, { useState } from "react";

export default function Toggle({ isOn, onToggle, label, styling}) {

  return (
    <div className={styles.toggle} style={styling}>
      {label && <span className={styles.toggleLabel}>{label}</span>}
      <div
        className={`${styles.switch} ${isOn ? styles.on : styles.off}`}
        onClick={onToggle}
      >
        <div className={styles.toggleThumb}></div>
        <p style={{fontSize:'10px', marginLeft:'auto', paddingRight:'6px', textAlign:'center', color:'#c7c7c7', userSelect:'none'}}>Marquee On</p>
      </div>
    </div>
  );
}
