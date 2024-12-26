import TextBar from "../../Components/TextBar/TextBar";
import styles from './AboutMe.module.css'

export default function AboutMe({animationOn}) {
    return (
        <div className={'section bg-black'} id='about-me'>
            <h1>
                About Me
            </h1>
            <section  className='flex flex-col sm:flex-row animate-fadeIn transition-opacity'>
                <div className={`${styles.whoAmI} sm:w-[62%]`}>
					<h2>Who am I?</h2>
                    <p> 
                        Hi, I'm Adam Heaney, a junior at Brandeis University, where I’m pursuing a B.S. in Computer Science with a minor in Business.
                        <br/><br/>My interest in computers and technology started early, sparked by my dad's computer science textbooks and my love for video games, which began at age 3. In the summer of 2021, I brought my dream of creating games to life by designing and coding a laser defender game in Unity, crafting everything from the art to the gameplay. Taking AP Computer Science in high school solidified my passion for programming, as I discovered a deep love for problem-solving and building from scratch.
                        <br/><br/>Now, at Brandeis University, I’ve continued to expand my knowledge. I’ve taken foundational courses like Data Structures, Algorithms, and Operating Systems, as well as specialized ones such as Compiler Design, Introduction to AI, and Natural Language Processing. In addition, I’ve joined the Tamid Chapter at Brandeis, where I’ve had the opportunity to help Israeli start-ups with their technology needs. I’m also a teaching assistant for a financial accounting course, which has been a rewarding experience.
                        Looking ahead, I’m focused on my goal of becoming a software engineer. One day, though, I hope to work in cybersecurity.
                    </p>
				</div>
                <div className={`${styles.funStuff} p-[50px] pt-[0px] sm:w-[38%] sm:border-l-white sm:border-l-2 sm:p-[50px]`}>
                    <div className={styles.facts}>
                        <h2>Fun facts</h2>
                        <ul>
                                <li>
                                    Despite entering almost every spelling bee from 1st to 8th grade, I never won once 🤧
                                </li>
                                <li>
                                    I love listening to music through Spotify, and have created 50+ catered playlists in my library 🎧
                                </li>
                                <li>
                                    I can name every country (if given a map) 🌏
                                </li>
                                {/* <li>
                                    I love to play videogames here and there. Minecraft, Valorant, and Rocket League are among my favorites. 
                                    Though I used to be a Nintendo kid at heart ❤️
                                </li> */}
                            </ul>
                    </div>
                    <div className={styles.interests}>
                        <h2> Interests and Hobbies </h2>
                            <ul>
                                <li>
                                    Sports such as tennis and frisbee 🎾
                                </li>
                                <li>
                                    Videogames like Minecraft, Valorant, and Rocket League 🎮
                                </li>
                                <li>
                                    Coding side projects (like this website itself) 👨‍💻
                                </li>
                                <li>
                                    Geology 🪨, Geography 🗺️, and Nature 🌱
                                </li>
                            </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}