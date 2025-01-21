import PerspectiveDistortCard from "../../Components/PerspectiveDistortCard/PerspectiveDistortCard";
import TextBar from "../../Components/TextBar/TextBar";
import styles from './AboutMe.module.css'

export default function AboutMe({animationOn}) {
    return (
        <div className={'section bg-black'} id='About'>
            <h1>
                About Me
            </h1>
            <div className='p-[20px] w-[calc(100%-100px)] border-white border-2 rounded-[30px] flex flex-col m-[50px] h-fit
            mb-0'>
                
                <h3>👋 Hello!</h3>        
                <br/>Hi, I'm Adam Heaney, a junior at Brandeis University, where I’m pursuing a B.S. in Computer Science with a minor in Business.
                I have a strong passion for technology and programming, and I am always eager to learn new things and take on new challenges.
                <br/> <br/>Here you can find a little bit about who I am, my education, skills, interests, and even some fun facts!
                            
            </div>
            <div className='flex flex-col sm:flex-row transition-opacity p-[50px] box-border w-full flex-wrap justify-around'>
                <div className = 'flex flex-col gap-5 w-[25%]'>
                    <PerspectiveDistortCard 
                        title='🏫 Education'
                        content={(
                            <p style={{justifyContent:'center'}}> 
                                <br/>
                                B.S. in Computer Science with a minor in Business at Brandeis University. <br/>I have a GPA of 3.8 and
                                expect to graduate by May 2026
                            </p>
                        )}
                        customStyle={{width:'100%', height:'fit-content'}}
                    />
                    <PerspectiveDistortCard 
                        title='⭐ Skills'
                        content={(
                            <ul style={{justifyContent:'center'}}> 
                                <li>
                                    <b>Languages:</b> Python, Java, JavaScript <br/>
                                </li>
                                <li>
                                    <b>Web:</b> React, Node.js, HTML/CSS, TypeScript, Spring, Tailwind
                                </li>
                                <li>
                                    <b>Tools:</b> GitHub, Unity, Figma, Photoshop
                                </li>
                                <li>
                                    <b>Fun:</b> Juggling, Rubik's Cubes, Videogames, Piano
                                </li>
                                
                            </ul>
                        )}
                        customStyle={{width:'100%', height:'fit-content'}}
                    />
                    {/* <PerspectiveDistortCard
                        title='💬 Languages'
                        content={(
                            <p>
                               English
                               <br/> Hebrew 
                            </p>
                        )}
                        customStyle={{width:'100%', height:'fit-content'}}
                    /> */}
                </div>
                <div className = 'flex flex-col w-[35%] gap-5'>
                    <PerspectiveDistortCard 
                        title='📍 Location'
                        content={(
                            <p style={{justifyContent:'center'}}> 
                                <br/>
                                🏠 West Long Branch, New Jersey <br/>
                                🏫 Waltham, Masachussetts   
                            </p>
                        )}
                        customStyle={{width:'100%', height:'fit-content'}}
                    />
                    <PerspectiveDistortCard 
                        title='🎉 Fun Facts'
                        content={(
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
                                <li>
                                    I love to play videogames here and there. Minecraft, Valorant, and Rocket League are among my favorites. 
                                    Though I used to be a Nintendo kid at heart ❤️
                                </li> 
                                <li>
                                    I am an identical twin (I'm the younger twin by a whole 46 minutes!)
                                </li>
                            </ul>
                        )}
                        customStyle={{width:'100%', height:'fit-content'}}
                    />
                </div>
                <div className = 'flex flex-col w-[33%] gap-5 '>
                    <PerspectiveDistortCard 
                        title='📕 Courses'
                        content={(
                            <p style={{justifyContent:'center'}}> 
                                <br/>
                                <b>CS:</b> OOP, Data Structures, Algorithms, AI, Operating Systems,
                                Compiler Design, NLP, Human Computer Interaction, Computer Security  <br/><br/>
                                <b>Math:</b>  Calculus, Linear Algebra, Discrete Math<br/><br/>
                                <b>Business:</b>  Microeconomics, Financial Accounting, Managerial Accounting, Intermediate Accounting
                            </p>
                        )}
                        customStyle={{width:'100%', height:'fit-content'}}
                    />

                    <PerspectiveDistortCard 
                        title='🔎 Interests'
                        content={(
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
                        )}
                        customStyle={{width:'100%', height:'fit-content'}}
                    />
                </div>
                
                
                
                {/* <div className={`${styles.whoAmI} sm:w-[62%]`}>
					<h2>Who am I?</h2>
                    <p> 
                        Hi, I'm Adam Heaney, a junior at Brandeis University, where I’m pursuing a B.S. in Computer Science with a minor in Business.
                        <br/><br/>My interest in computers and technology started early, sparked by my dad's computer science textbooks and my love for video games, which began at age 3. In the summer of 2021, I brought my dream of creating games to life by designing and coding a laser defender game in Unity, crafting everything from the art to the gameplay. Taking AP Computer Science in high school solidified my passion for programming, as I discovered a deep love for problem-solving and building from scratch.
                        <br/><br/>Now, at Brandeis University, I’ve continued to expand my knowledge. I’ve taken foundational courses like Data Structures, Algorithms, and Operating Systems, as well as specialized ones such as Compiler Design, Introduction to AI, and Natural Language Processing. In addition, I’ve joined the Tamid Chapter at Brandeis, where I’ve had the opportunity to help Israeli start-ups with their technology needs. I’m also a teaching assistant for a financial accounting course, which has been a rewarding experience.
                        Looking ahead, I’m focused on my goal of becoming a software engineer. One day, though, I hope to work in cybersecurity.
                    </p>
				</div>*/}
            </div>
        </div>
    )
}