import ProjectSidebar from '../Sidebar-ProjectPages/ProjectSidebar'
import styles from './GeographyPage.module.css'

import React from 'react';
import ExternalLink from '../../../../Components/Button/ExternalLink';
import { FaGithub } from 'react-icons/fa6';
import { FaGamepad } from "react-icons/fa6";



export default function GeographyPage() {
    
    return (
        <>
            <ProjectSidebar />
            <div className={`${styles.Container} w-full sm:w-3/4 sm:ml-[25%]`}>
                <div id='welcome' className={`flex flex-col py-[30vh] text-center section`}>

                    <p className='text-[50px] sm:text-[70px]'> Daily Geography</p>
                    <p className='text-[15px] sm:text-[30px] text-gray-500'> May '23 - Aug '23</p>
                    <div className={`${styles.linkContainer}`}>
                        <ExternalLink icon={<FaGithub />} text={`GitHub`} link={'https://github.com/adameheaney/daily-geography'}/>
                        <ExternalLink icon={<FaGamepad />} text={`Web App`} link={'https://daily-geography.netlify.app/'}/>
                    </div>
                    
                </div>
                 <div id='about' className={`${styles.about} section`}>
                    <h1>About</h1>
                    <span className='p-[50px]'>
                    <h3>Story:</h3> 
                    <span className='leading-normal'>I started this project in May of 2023 when I first discovered the world of "the website".
                        Me being naive, I decided to jump straight into it with little research into web development. I knew you needed to use HTML,
                        CSS, and Javascript, so I just to jump in and create a webapp with vanilla tech. In retrospect, this was not the greatest
                        decision in terms of time-consumption and effort, but, on the other hand, it was a wonderful learning experience for me.
                        <br/><br/>
                        I decided to create a geography quiz game for a couple of reasons. First and foremost, I was just beginning to get into geography
                        and geology. It all started when I was at lunch with a friend one day and said "hey, we live on this earth, why don't we start
                        acting like it by knowing what each country is called?" Obviously, this doesn't make much sense, but it was enough to convince me
                        to start learning every country using a sporcle quiz. And so, after maybe a day or so, I had every country memorized. After completing
                        the sporcle quiz, I decided that I needed more challenges, and thought it would be cool to create my own geography quiz
                        app. So, that's what I decided to do. I created this "daily geography" quiz app with a "wordlesque" aesthetic. 
                        
                        <br/> <br/>
                        In the end, it doesn't actually work the way wordle does. Rather, it creates a new quiz each time you refresh the page.
                        This is because it was more fun for me to be able to play a new quiz whenever I wanted to (or it's because I never got
                        around to adding that functionality). Regardless, I'm still very proud of it and am happy with the results.</span>
                    <br/> <br/> <br/>
                    <h3> What I learned:</h3> 
                    <span className='leading-normal'> My first website taught me a lot. To start, it taught me JS, CSS, and HTML. It also taught
                        me to use AI, more specifically, ChatGPT, to foster my learning. ChatGPT, when used correctly, can boost your learning rather
                        than take away from it, by making sure to always ask why it is doing what it does and what it is doing. Something else that I did
                        with this project was learn datamining using Python. Using the urlopen library, I was able to scrape the internet for the data I needed. 
                        After scraping the data, I cleaned it and put it into JSON format using Python's json library.
                        This was my first experience with data mining and cleaning, and it was a very valuable skill to learn. I learned how to handle large datasets, clean them, and extract useful information from them.
                        But in total, what I learned
                        the most was creating webapps in general. This project sparked my interest in websites, and started me off on my journey to get to where
                        I am now, creating my personal site using better technologies such as React, tailwind css, and more.</span>
                    </span>
                </div>
                <div id='skills' className={`${styles.skills} section`}>
                    <h1>Skills</h1>
                    <span className='px-[50px] pb-[50px]'>
                        <br/><br/><h3>JavaScript,  &nbsp; HTML,  &nbsp;CSS</h3>
                        <span>
                            Wrote over 400 lines of JavaScript, 200 lines of CSS, and 70 lines of HTML. While not being much, this was my
                            first website, and I was very proud of it. I learned a lot about how to use JS, HTML, and CSS together to create
                            a website. I learned how to use JS to manipulate the DOM, how to use CSS to style the website, and how to use HTML
                            to create the structure of the website. This introduction to these technologies gave me a strong foundation to build
                            upon in the future.
                        </span>
                        <br/><br/><h3>Webapp development and deployment</h3>
                        <span>
                            In total, this project taught me how to create a webapp from scratch, and how to deploy it. I learned how to use
                            Netlify to deploy my website, and how to use GitHub to host my code. I learned how to use the terminal to push my code
                            to GitHub, and how to use Netlify to deploy my website. This was a very important skill to learn, as it taught me how to
                            take a project from start to finish, and how to deploy it so that others can use it.

                        </span>
                        <br/><br/><h3>Python Datamining, Data Cleaning // JSON</h3>
                        <span>
                            This project taught me how to use Python to mine data from the internet. I used the urlopen library to scrape the internet
                            for the data I needed. After scraping the data, I cleaned it and put it into JSON format using Python's json library.
                            This was my first experience with data mining and cleaning, and it was a very valuable skill to learn. I learned how to handle large datasets, clean them, and extract useful information from them.
                            By using Python to scrape the data from the web, I saved countless hours of typing each country's information meticulously into a JSON file.
                        </span>
                    </span>
                </div>
                <div id='showcase' className={`${styles.showcase} section`}>
                    <h1>Showcase</h1>
                    <h2 className='p-[50px]'>
                        You can play the game using the button in the welcome section of this page!
                    </h2>
                </div>
            </div>
        </>
    )
}