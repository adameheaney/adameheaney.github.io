import styles from './Sidebar.module.css'

import Toggle from '../Components/Toggle/Toggle';
import { FaHouse } from "react-icons/fa6";

import { PiHandWavingFill } from "react-icons/pi";
import { MdInfo } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

export default function Sidebar({setAnimationOn, animationOn}) {
    
	const [activeTab, setActiveTab] = useState('w');
	let lastScrollY = 0;
	let tabs = ['Welcome', 'About', 'Skills', 'Projects', 'Experiences', 'Contact'];
	let icons = [<PiHandWavingFill />, <MdInfo />, <FaLaptop />, <FaDiagramProject />, <FaStar />, <IoMail />];

	const scrollToSection = (id, offset = 0) => {
		const targetElement = document.getElementById(id);
		if (targetElement) {
			const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
			const selector = document.getElementById('selector');
		  	window.scrollTo({
				behavior: "smooth",
				top: elementPosition,
		  	})
		} else {
		  console.error(`Element with id "${id}" not found.`);
		}
	};
	
	const handleScroll = () => {
		const selector = document.getElementById('selector');
		let currentSection = activeTab;
		const currentScrollY = window.scrollY
		for (let i = 0; i < tabs.length; i++) {
			if(document.getElementById(tabs[i]) === null) 
				continue;
			let section = document.getElementById(tabs[i]);
			const rect = section.getBoundingClientRect();
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;
			
			//up
			if ((currentScrollY > lastScrollY && (rect.top >= 0 && rect.top <= window.innerHeight / 1.5))) {
				currentSection = section.id;
			}
			//down
			if((currentScrollY <= lastScrollY && (window.scrollY >= sectionTop - sectionHeight / 4))) {
				currentSection = section.id;
			}
		}
		lastScrollY = currentScrollY
		if(currentSection !== 'w') {
			setActiveTab(currentSection);
			selector.style.top = 165 + (tabs.indexOf(currentSection)) * 65 + 'px';
		}
	};
	
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	
	
	return (
        <div className={`${styles.sidebar} h-1/6 w-full hidden sm:flex sm:w-[18%] top-0 left-0 sm:h-full`}>
			{/* <Toggle 
				// label= <TbSpiralOff size={'25px'} style={{color:'white', left:'0px'}}/>
				onToggle={setAnimationOn}
				isOn={animationOn}
				styling={{marginTop:'20px'}}
			/> */}
			<div className={styles.inner}>
				<Link onClick={() => window.scrollTo(0, 0)} to={'/'} className={`${styles.backToHome} `}> 
						<FaHouse size={32} fill='white'/>
				</Link>
				<ul className={`${styles.tabsList} flex flex-row sm:flex-col text-center text-[12px] sm:text-[18px]`}>
					<div id='selector' className={styles.tabSelector}></div>
					{tabs.map((tab, index) => (
						<li key={tab} className={`${styles.tab} ${activeTab === tab ? styles.active : ''} ${activeTab === 'w' && tab==='Welcome' ? styles.active : ''} flex items-center`} onClick={() => scrollToSection(tab)}>
							{icons[index]} {tab}
						</li>
					))}
				</ul>
			</div>
		</div>
    )
}