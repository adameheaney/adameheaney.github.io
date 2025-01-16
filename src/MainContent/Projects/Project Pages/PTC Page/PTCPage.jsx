import React from 'react';
import styles from './PTCPage.module.css';
import ProjectSidebar from '../Sidebar-ProjectPages/ProjectSidebar';
import ExternalLink from '../../../../Components/Button/ExternalLink';
import { FaGithub } from 'react-icons/fa6';

const PTCPage = () => {
    return (
        <>
            <ProjectSidebar />
            <div className={`${styles.Container} w-full sm:w-3/4 sm:ml-[25%]`}>
                <div id='welcome' className={`flex flex-col py-[30vh] text-center section`}>

                    <p className='text-[50px] sm:text-[70px]'> Photo to Color Palette</p>
                    <p className='text-[15px] sm:text-[30px] text-gray-500'> Nov '22 - May '23</p>
                    <div className={`${styles.linkContainer}`}>
                        <ExternalLink icon={<FaGithub />} text={`Base Program`} link={'https://github.com/adameheaney/image-color-palette-generator'}/>
                        <ExternalLink icon={<FaGithub />} text={`Applet with GUI`} link={'https://github.com/adameheaney/PTC-GUI'}/>
                    </div>
                    
                </div>
                    <div id='about' className={`${styles.about} section`}>
                    <h1>About</h1>
                    <span className='p-[50px]'>
                    <h3>Story:</h3> 
                    <span className='leading-normal'>Coming very soon</span>
                    <br/> <br/> <br/>
                    <h3> What I learned:</h3> 
                    <span className='leading-normal'> Coming very soon </span>
                    </span>
                </div>
                <div id='skills' className={`${styles.skills} section`}>
                    <h1>Skills</h1>
                    <span className='px-[50px] pb-[50px]'>
                        Coming very soon
                        {/* <br/><br/><h3>JavaScript,  &nbsp; HTML,  &nbsp;CSS</h3>
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
                        </span> */}
                    </span>
                </div>
                <div id='showcase' className={`${styles.showcase} section`}>
                    <h1>Showcase</h1>
                    <h2 className='p-[50px]'>
                        Coming very soon
                    </h2>
                </div>
            </div>
        </>
    );
};

export default PTCPage;