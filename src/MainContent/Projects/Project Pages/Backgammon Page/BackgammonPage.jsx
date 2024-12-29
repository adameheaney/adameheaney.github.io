import ProjectSidebar from '../Sidebar-ProjectPages/ProjectSidebar'
import styles from './BackgammonPage.module.css'

export default function BackgammonPage() {
    
    return (
        <>
            <ProjectSidebar />
            <div className={`${styles.Container} w-full sm:w-3/4 sm:ml-[25%] `}>
            <div className='flex flex-col my-[30vh] text-center'>
                <p className='text-[50px] sm:text-[70px]'> Backgammon</p>
                <p className='text-[20px] text-gray-500 px-[10vw]'> Testing and JUnit | Java, 
                                                    Data Structures, and Algorithms | Object-Oriented Programming | Documentation</p>
            </div>
                 <div id='about' className={`${styles.about} section`}>
                    <h1>About</h1>
                    <p className='p-[50px]'>
                    <h3>Motivation:</h3> 
                    <span className='leading-normal'>I started this project during my first semester as a sophomore at Brandeis University 
                        after my friend became obsessed with backgammon strategy. He’d been reading up on techniques and putting in 
                        serious effort to improve his game, and I saw this as the perfect challenge: could I create a backgammon bot 
                        capable of beating him, no matter how much he practiced? The first step, of course, was to rebuild the entire 
                        game from scratch, and that’s exactly what I set out to do. <br/> <br/>But why backgammon? It’s not just any game 
                        to me. 
                        I come from an Arabic background and grew up in a tightknit, cultural community where backgammon has always 
                        been a favorite. It’s more than a pastime—it’s part of the fabric of our social gatherings and traditions. 
                        This personal connection made the project even more exciting and gave me the motivation to see it through. </span>
                    <br/> <br/> <br/>
                    <h3> What I learned:</h3> 
                    <span className='leading-normal'> With this project, I wanted to dive deeper into object-oriented design, applying 
                        the concepts I had learned in a meaningful way. What better challenge than creating a game from scratch? 
                        I structured the code by designing distinct classes for each component of the game, such as a Dice class, 
                        a Board class, a Piece class, and a Team class. My focus was not only on implementing these concepts but also 
                        on maintaining clean, well-documented code. This approach ensures that I can revisit and tweak the project later, 
                        learning from my past decisions and identifying areas for improvement. Overall, this project provided me with 
                        a hands-on opportunity to explore object-oriented programming in a way that extended far beyond what 
                        I experienced in class assignments, and I’m grateful for the lessons it taught me. </span>
                    </p>
                </div>
                <div id='skills' className={`${styles.skills} section`}>
                    <h1>Skills</h1>
                    <p className='px-[50px] pb-[50px]'>
                        <br/><br/><h3>Object-Oriented Programming</h3>
                        <span>
                            As mentioned in the "About" section, this project in large was a great challenge for me in my
                            object-oriented programming skills. To reiterate, backgammon, or any game for that matter, is naturally
                            an object-oriented game, with pieces, a board, teams, and dice. Before coding at all, I used a notebook and pen
                            to devise a plan on how I'd separate each object and bring them together. Once I had the object-oriented design
                            down, it was simple to implement each object, and then bring them together for the final game.
                            <br/><br/>
                            A challenge during this project was deciding on how to represent the teams. Should each piece have the team stored in
                            them? Should the teams just be two separate matrices of the pieces positions? 
                        </span>
                        <br/><br/><h3>Java, Data Structures, and Algorithms</h3>
                        <span>
                            This project is coded entirely in Java, which has been my primary language for a few years now. 
                            Using Java for this project felt very natural, given it's built for object-oriented programming.
                            This project greatly solidified my Java skills, writing 1000+ lines of Java and applying what I 
                            learned in class into a real life project that I am passionate about.
                            <br/><br/>
                            In this project, I used LinkedLists to store the pieces at each coordinate on the board. In backgammon, it's
                            important to know how many pieces there are on each position in the board, and it made the most sense to use
                            a LinkedList to store the pieces, making it easy to detach pieces from one position and move it to another position
                            on the board.
                            <br/><br/>
                            In backgammon, it's very important to know every possible move in order to decide which moves are legal. It's difficult
                            to explain, so <a href='https://www.bkgm.com/rules.html' target='_blank'>here</a> is the website I used to imitate the
                            rules. As a result, I had to create an algorithm that would go through a backgammon board and derive the possible 
                            legal moves a player was allowed to make with their dice. To implement this, I ended up writing a recursive dynamic
                            programming
                            algorithm that iterates through every occupied space on the board, getting every legal move for that space with 
                            each dice that was rolled for that turn. This was no easy feat, and was the part of the project that took me the
                            most head-scratching, but it felt incredibly rewarding once it was complete and the game could run perfectly.

                        </span>
                        <br/><br/><h3>Testing and JUnit</h3>
                        <span>
                            Backgammon has many obscure rules and places where the game logic can get messy and very conditional, 
                            and when recreating a game, it's very important to catch those edge cases
                            and make sure the game logic and ruleset are working properly. In class, I learned about JUnit, and all of my
                            assignments were graded using it, but we never wrote our own JUnit tests. So, for this project, I learned to write
                            my own simple JUnit tests. Testing was a very important skill I learned from this project, teaching me the 
                            importance of testing your own code to make sure it works, and to always think outside the box for edge cases and 
                            catch them.
                        </span>
                        <br/><br/><h3>Documentation</h3>
                        <span>
                            <b>Comprehensive ReadMe:</b> This project features a comprehensive ReadMe file, describing the project in depth.
                            The ReadMe includes details on how to begin the game, the rules of the game, how to add your own code to the project,
                            and other information about the project and inner-workings of the project. The ReadMe is a very important part of the
                            documentation so that anyone unfamiliar with the project can easily get started and interact with the project!
                            <br/><br/>
                            <b>Descriptive and Extensive Javadocs:</b> This project features <i>extensive</i> Javadocs for every function, variable, 
                            and class within every file. In past projects, I rarely commented my code, deciding that it was obvious enough to
                            be able to go back and understand it without commenting. Of course, I learned from my past mistakes with those 
                            projects when I went back and it took me a painfully long time to piece together something that was so simple to me
                            back when I was working on it. So, for this project, I made sure to add a highly descriptive Javadoc for everything,
                            even where it seemed unnecessary. The skill of adding Javadocs and creating comments
                            is incredibly important, for maintainability, readability, understandability, etc.

                        </span>
                    </p>
                </div>
                <div id='showcase' className={`${styles.showcase} section`}>
                    <h1>Showcase</h1>
                </div>
            </div>
        </>
    )
}