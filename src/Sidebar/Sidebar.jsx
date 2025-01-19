import styles from './Sidebar.module.css'

import Toggle from '../Components/Toggle/Toggle';
import { FaHouse } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

export default function Sidebar({setAnimationOn, animationOn}) {
    
	const [activeTab, setActiveTab] = useState('');
	let lastScrollY = 0;
	let tabs = ['Welcome', 'About', 'Skills', 'Projects', 'Experiences', 'Contact'];
	let listenerPaused = false;

	const scrollToSection = (id, offset = 0) => {
		const targetElement = document.getElementById(id);
		if (targetElement) {
			const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    		const offsetPosition = elementPosition + offset;
			const selector = document.getElementById('selector');
			listenerPaused = true;
			selector.style.top = 165 + (tabs.indexOf(id)) * 65 + 'px';
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
		if(listenerPaused) {
			return;
		}
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
		if(currentSection !== '') {
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
					<div id='selector' className={styles.tabSelector}>

					</div>
					{tabs.map((tab) => (
						<li key={tab} className={`${styles.tab} ${activeTab === tab ? styles.active : ''} flex items-center`} onClick={() => scrollToSection(tab)}>
							{tab}
						</li>
					))}
				</ul>
			</div>
		</div>
    )
}