import styles from './Sidebar.module.css'

import Toggle from '../Components/Toggle/Toggle';

import { useState, useEffect } from 'react';

export default function Sidebar({setAnimationOn, animationOn}) {
    
	const [activeTab, setActiveTab] = useState('w');
	let lastScrollY = 0;

	const scrollToSection = (id, offset = 0) => {
		const targetElement = document.getElementById(id);
		if (targetElement) {
			const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    		const offsetPosition = elementPosition + offset;
		  	window.scrollTo({
				behavior: "smooth",
				top: offsetPosition,
		  	});
		} else {
		  console.error(`Element with id "${id}" not found.`);
		}
	};
	
	const handleScroll = () => {
		const sections = document.querySelectorAll('.section');
		let currentSection = activeTab;
		const currentScrollY = window.scrollY


		for (let i = 0; i < sections.length; i++) {
			let section = sections[i]
			const rect = section.getBoundingClientRect();
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;

			if ((currentScrollY > lastScrollY && (rect.top >= 0 && rect.top <= window.innerHeight / 1.5))) {
				currentSection = section.id;
			}
			else if((currentScrollY <= lastScrollY && (window.scrollY >= sectionTop - sectionHeight / 4))) {
				currentSection = section.id;
			}
		}
		lastScrollY = currentScrollY
		if(currentSection != 'w')
			setActiveTab(currentSection);
	};
	
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	
	
	return (
        <div className={`${styles.sidebar} h-1/6 w-full sm:w-3/12 top-0 left-0 sm:h-full`}>
			{/* <Toggle 
				// label= <TbSpiralOff size={'25px'} style={{color:'white', left:'0px'}}/>
				onToggle={setAnimationOn}
				isOn={animationOn}
				styling={{marginTop:'20px'}}
			/> */}
			<div className={styles.inner}>
				<ul className={`${styles.tabsList} flex flex-row sm:flex-col align-middle justify-center text-center
							   text-[12px] sm:text-[18px]`}>
					<li className={`${styles.tab} ${activeTab === 'welcome' || activeTab === 'w'? styles.active : ''} flex items-center`} onClick={() => scrollToSection('welcome')}>
						Welcome
					</li>
					<li className={`${styles.tab} ${activeTab === 'about-me' ? styles.active : ''} flex items-center`} onClick={() => scrollToSection('about-me')}>
						About Me
					</li>
					<li className={`${styles.tab} ${activeTab === 'projects' ? styles.active : ''} flex items-center`} onClick={() => scrollToSection('projects', 1)}>
						Projects
					</li>
					{/* <li className={styles.tab} onClick={() => scrollToSection('experiences')}>
						Experiences
					</li> */}
					{/* <li className={`${styles.tab} ${activeTab === 'blog-posts' ? styles.active : ''}`} onClick={() => scrollToSection('blog-posts')}>
						Blog Posts
					</li> */}
					<li className={`${styles.tab} ${activeTab === 'contact-me' ? styles.active : ''} flex items-center`} onClick={() => scrollToSection('contact-me')}>
						Contact Me
					</li>
				</ul>
			</div>
		</div>
    )
}