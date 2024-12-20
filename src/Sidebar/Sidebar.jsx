import styles from './Sidebar.module.css'
import Adam from '../assets/images/adamsuit.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Toggle from '../Components/Toggle/Toggle';
import { TbSpiralOff } from "react-icons/tb";


export default function Sidebar({setAnimationOn, animationOn}) {
    
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
	
	
	return (
        <div className={styles.sidebar}>
			<p>Animation Off</p>
			<Toggle 
				label= <TbSpiralOff size={'25px'} style={{color:'white', left:'0px'}}/>
				onToggle={setAnimationOn}
				isOn={animationOn}
				styling = {{marginTop: '15px'}}
			/>
			{/* <div className={styles.inner}>
				<ul className={styles.tabsList}>
					<li className={styles.tab} onClick={() => scrollToSection('about-me')}>
						About Me
					</li>
					<li className={styles.tab} onClick={() => scrollToSection('projects', 1)}>
						Projects
					</li>
					<li className={styles.tab} >
						Experiences
					</li>
					<li className={styles.tab} onClick={() => scrollToSection('blog-posts')}>
						Blog Posts
					</li>
				</ul>
			</div> */}
			<div className={styles.inner}>
				<a href="#" className="image avatar"><img src="images/adamheaney.png" alt="" /></a>
				<p style={{fontSize:'18px'}}>
					👋 Hey there! I'm&nbsp; 
					  <a className={styles.link} href="https://www.linkedin.com/in/adam-heaney-9a1085266/">
					Adam Heaney</a>
				</p>
				<img src={Adam} style={{width: '200px', height: 'auto', borderRadius:'20px', border:"solid #c7c7c7 3px"}}></img>
				<p style={{fontSize:'18px'}}>
					Welcome to my website!
				</p>
			</div>
			<div className={styles.footer}>
				<div className= {styles.icons}>
						<a className={styles.link} href="https://github.com/adameheaney">
							<FontAwesomeIcon icon={faGithub} style={{textDecoration:'underline'}}/> Github&nbsp;  
						</a>
						<a className={styles.link} href="https://mail.google.com/mail/u/0/?fs=1&to=adamheaney@brandeis.edu&tf=cm">
							<FontAwesomeIcon icon={faEnvelope} style={{textDecoration:'underline'}}/>	Email 
						</a>
				</div>
				<div className= {styles.copyright}>
					<p>&copy; Adam Heaney all rights reserved</p>
				</div> 
			</div>
		</div>
    )
}