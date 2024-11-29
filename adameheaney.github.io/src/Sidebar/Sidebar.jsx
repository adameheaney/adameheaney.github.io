import styles from './Sidebar.module.css'
import Adam from '../assets/images/adamsuit.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import Toggle from '../Components/Toggle/Toggle';
import { TbSpiralOff } from "react-icons/tb";


export default function Sidebar({setAnimationOn, animationOn}) {
    return (
        <div className={styles.sidebar}>
			<Toggle 
				label= <TbSpiralOff size={'25px'} style={{color:'white', left:'0px'}}/>
				onToggle={setAnimationOn}
				isOn={animationOn}
				styling = {{marginTop: '15px'}}
			/>
			<div className={styles.inner}>
				<a href="#" className="image avatar"><img src="images/adamheaney.png" alt="" /></a>
				<p style={{fontSize:'18px'}}>
					👋 Hey there! I'm&nbsp; 
					  <a href="https://www.linkedin.com/in/adam-heaney-9a1085266/" style={{color:"white"}}>
					Adam Heaney</a>
				</p>
				<img src={Adam} style={{width: '200px', height: 'auto', borderRadius:'20px', border:"solid #c7c7c7 3px"}}></img>
				<p style={{fontSize:'18px'}}>
					Welcome to my website!
				</p>
			</div>
			<div className={styles.footer}>
				<ul className= {styles.icons}>
					<li>
						<a href="https://github.com/adameheaney">
							<FontAwesomeIcon icon={faGithub} style={{textDecoration:'underline'}}/> Github 
						</a>
					</li>
					<li>
						<a href="https://mail.google.com/mail/u/0/?fs=1&to=adamheaney@brandeis.edu&tf=cm">
							<FontAwesomeIcon icon={faEnvelope} style={{textDecoration:'underline'}}/>	Email 
						</a>
					</li>
				</ul>
				<ul className= {styles.copyright}>
					<li>&copy; Adam Heaney all rights reserved</li>
				</ul>
			</div>	
		</div>
    )
}