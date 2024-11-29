import TextBar from "../TextBar/TextBar";
import styles from './AboutMe.module.css'

export default function AboutMe({animationOn}) {
    return (
        <>
            <TextBar animationOn={animationOn} text='ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME&nbsp;'/>
            <section className={styles.sectionOne}>
                <div className={styles.whoAmI}>
					<h2>Who am I?</h2>
                    <p> 
                        Hi, I'm Adam Heaney, a junior at Brandeis University, where I’m pursuing a B.S. in Computer Science with a minor in Business. I’m originally from West Long Branch, New Jersey, where I live with my mom, dad, and four siblings—my identical twin brother, a 17-year-old brother, a 15-year-old sister, and a 5-year-old sister. We are part of the small Sephardic Jewish community known as the Deal Syrian community.
                        <br/><br/>My interest in computers and technology started at an early age. My dad introduced me to computer science with his massive textbooks, which 6-year-old me could barely fathom reading. Growing up, video games were also a huge part of my childhood, and I was introduced to them at the ripe age of 3 (thanks, dad!). This early exposure sparked my curiosity, and I always dreamed of creating my own games. That dream became a reality in the summer of 2021 when I learned the Unity game engine and created a version of a laser defender game from scratch. I designed the art, wrote the code, and crafted the gameplay, style, and theme—all from my own ideas. The process of building something entirely from the ground up was both motivating and fulfilling.
                        It wasn’t until I took AP Computer Science in high school that I truly fell in love with programming. As someone who thrives on problem-solving, it felt like a natural fit. I couldn’t stop once I started, and the more I learned, the more passionate I became .
                        <br/><br/>Now, at Brandeis University, I’ve continued to expand my knowledge. I’ve taken foundational courses like Data Structures, Algorithms, and Operating Systems, as well as specialized ones such as Compiler Design, Introduction to AI, and Natural Language Processing. In addition, I’ve joined the Tamid Chapter at Brandeis, where I’ve had the opportunity to help Israeli start-ups with their technology needs. I’m also a teaching assistant for a financial accounting course, which has been a rewarding experience.
                        Looking ahead, I’m focused on my goal of becoming a software engineer. One day, though, I hope to work in cybersecurity— working on things that I can't even tell anyone 🤫.
                    </p>
				</div>
                <div className={styles.funStuff}>
                    <div className={styles.facts}>
                        <h2>Fun facts</h2>
                        <ul>
                                <li>
                                    Despite entering almost every spelling bee from 1st to 8th grade, I never won once. 
                                    I distinctly remember losing on the words "royal", "environment", "calendar", and "basting", among others 🤧
                                </li>
                                <li>
                                    I love listening to music through Spotify, and have created 50+ catered playlists in my library 🎧🎵
                                </li>
                                <li>
                                    I can name every country (if given a map) 🌏
                                </li>
                                <li>
                                    I love to play videogames here and there. Minecraft, Valorant, and Rocket League are among my favorites. 
                                    Though I used to be a Nintendo kid at heart ❤️
                                </li>
                            </ul>
                    </div>
                    <div className={styles.interests}>
                        <h2> Interests and Hobbies </h2>
                            <ul>
                                <li>
                                    Sports such as tennis and frisbee , though these days I just go to the gym 💪
                                </li>
                                <li>
                                    Videogames like Minecraft, Valorant, and Rocket League 🎮
                                </li>
                                <li>
                                    Coding side projects (like this website itself) 👨‍💻
                                </li>
                                <li>
                                    Geology 🪨, Geography 🗺️, and Nature 🌱 (I love a good nature walk) 
                                </li>
                            </ul>
                    </div>
                </div>
            </section>
        </>
    )
}