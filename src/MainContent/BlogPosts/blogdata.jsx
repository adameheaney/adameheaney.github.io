import styles from './BlogPostPage.module.css'

const blogdata = [
    {
        id: 51623,
        title: 'My First Blog Post',
        date: new Date('2023-05-16'),
        preview: 'Hello World! This is my first blog post ever on this website.',
        content: ( 
            <>
                <p>
                    Hello World! This is my first blog post ever on this website. I worked on the website all through yesterday and <em>finally</em> got it up and running with my projects, bio, and name. I made this website using a free to 
                    use template on html5Up and with some help from ChatGPT of course ;). I don't know much html, css, or js, so this just goes to show that you don't need much experience to get a personal website up these days.
                    <br/><br/>I managed to make a blog system with the help of a pre-existing template again, although ended up doing most of it by scratch with the html and css I learned from configuring the template a lot.
                    Overall this project has been a good challenge and I'm very surprised I was able to get this all working with little to no html knowledge.
                </p>
            </>
        ),

        customStyles: {
            
        }

    },

    {
        id: 51823,
        title: 'Starting Python',
        date: new Date('2023-05-18'),
        preview: 'Hey again. Today I started learning Python using LinkedIn Learning.',
        content: (
            <>
                <p>
                    Hey again. Today I started learning Python using LinkedIn Learning. Not much learned so far, basically just the basics of Python and Jupyter Notebook.
                    I wanted to learn Python as it's very good to have it in your arsenal, and there is so much about Python that makes it a lot of fun in my opinion. The 
                    endless support it has with tons and tons of packages makes it a great language for pretty much anything, so I'm making the effort to learn it on my own.
                    Those are just a few reasons why I want to learn Python. Anyways this is a short post as I only just began but expect more about my journey of learning Python
                    in the near future.
                </p>
            </>
        ),
        customStyles: {

        }
    },
    {
        id: 60523,
        title: 'Python Progress',
        date: new Date('2023-06-05'),
        preview: 'It\'s been a while since I\'ve written here, but I\'ve been making some real progress with my Python course using LinkedIn Learning!',
        content: (
            <>
                <p>
                    It's been a while since I've written here, but I've been making some real progress with my Python course using LinkedIn Learning!
                    Within the course I learned the basics of Python such as declaring and using variables, writing methods, control flow, and list 
                    comprehensions, which are a Python exclusive! Since I am very knowledgeable of another programming language (Java), it wasn't so
                    difficult for me to pick up on Python, and so I got started on my first project fairly quickly:
                    <br/><br/>   
                    I would like to introduce the <a className={styles.link} href = "https://github.com/adameheaney/ascii-camera"> ASCII Camera! </a>which is a Python application
                    which converts your computer's internal webcam into an <a className={styles.link} href = "https://en.wikipedia.org/wiki/ASCII_art">ASCII</a> picture. With this
                    project I learned a lot about organization and structure of code in Python, and more importantly the versatility of packages that Python
                    offers. In this project the main package I utilized was cv2, which is a Python adaptation of OpenCV, to retrieve, downscale, and convert 
                    the webcam's recording into ASCII art using a clever trick with the amount of pixels in each ASCII character (for example, "@" is more "dense"
                    than "7"). 
                    <br/><br/>
                    Python has been a lot of fun to learn, and although there are some hurtles to jump, I am enjoying the challenge andhave been loving the language.
                    Expect more updates on my Python progress in the near future. Oh and heres a picture of the ASCII Camera in use:
                </p>
            </>
        ),
        customStyles: {

        }
    },
    {
        id: 62023,
        title: 'Python, Javascript, HTML, and more!',
        date: new Date('2023-06-20'),
        preview: 'These past couple of weeks I\'ve been working on a new project which is much more ambitious.',
        content: (
            <>
                <p>
                    These past couple of weeks I've been working on a new project which is much more ambitious. I have created an entire website that functions similarly to Wordle!
                    It has yet to be just like Wordle in functionality, however it is getting there. The website is a daily geography quiz game. I made it using Javascript, HTML, CSS, and Python to get the data.
                    It was really fun learning web design and web programming to create a dynamic website, and for it just being my first one, I'm very proud. I used Netlify to upload it:
                    <br/> <br/> Here's the link: <a className={styles.link} href="http://daily-geography.netlify.app">Daily Geography</a>. Enjoy!
                </p>
            </>
        ),
        customStyles: {

        }
    },
    {
        id: 102523,
        title: 'Update!',
        date: new Date('2023-10-25'),
        preview: 'Hello, it\'s been a while since I\'ve updated my blog, about 4 months to be exact.' + 
                 ' I thought I\'d write an update on how I\'m doing and what I\'ve been up to.',
        content: (
            <>
                <p>
                    Hello, it's been a while since I've updated my blog, about 4 months to be exact. I thought I'd write an update
                    on how I'm doing and what I've been up to.

                    To start, I've recently started my second year of university at Brandeis and am taking a few courses, including
                    COSI 29a: Discrete Structures, and COSI 101b: Fundamentals of AI. I've been really enjoying these classes and have
                    been learning a lot from both of them. I have also joined a couple of clubs on campus, mainly TAMID and Quant.
                    Both of these clubs will help advance my COSI knowledge. TAMID gives me lessons in networking, practical
                    programming, working in a team, and many other important topics, and eventually I will work with a team on real
                    life projects with the club, which I'm really excited about. Quant allows me to start working with a team on
                    research project early into the year. 
                    <br/><br/>
                    Also, I've began working on a new personal project, which is a complete simulation of backgammon written in Java. 
                    Java has been my comfort and go to language for a while, so I want to really create another big project that I 
                    will be able to present my OOP and Java skills with. Eventually I want to convert it into Python where I will 
                    create an AI bot to play the game and see if I can create one that's better than humans.
                    <br/><br/>
                    Before coming to school, I learned a lot about networking (computers, not people) and computers through Google's 
                    online courses, and learned a lot through AT&T's program as well.
                    <br/><br/>
                    Overall, I've been doing great and have been feeling confident in myself and my future, and am excited to see
                    what's next :)
                </p>
            </>
        ),
        customStyles: {

        }
    },
    {
        id: 10324,
        title: 'Backgammon Completion, Successful Third Semeseter, and more!',
        date: new Date('2024-01-03'),
        preview: 'First off, Happy New Years!!! Hello again, I\'m here to share some more exciting news!',
        content: (
            <>
                <p>
                First off, Happy New Years!!! Hello again, I'm here to share some more exciting news! Firstly, I finished my third semester at Brandeis with straight 
                A's, giving me a GPA of a 3.92 now :). I took two COSI classes this past semester: Discrete Structures, and Fundamentals of AI.
                I learned a lot in both of them and am very proud of the work I produced in the AI class. I made an AI that can read a handwritten
                equation (it only reads the characters [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, +, -, /, *]) and return an output! The code is right&nbsp; 
                <a className={styles.link} href="https://github.com/adameheaney/AI-Equation-Solver">here</a>. It was supposed to be a group project by my groupmates didn't
                help with the code unfortunately (if you're reading this and were one of my groupmates, it's all good I really enjoyed figuring out the code on my own :D)
                Anyways, the semester went really well academically (had a few mishaps socially but that's okay) and I'm hoping for a good next semester too.
                <br/><br/>
                In my most recent blogpost I mentioned how I was recreating backgammon in Java. Well, after hours of figuring out the
                logic, how to organize my code, and reading up on backgammon rules, I finally finished recreating backgammon! It is currently
                playable in the terminal, and the code for it can be found <a className={styles.link} href="https://github.com/adameheaney/backgammon-game">here</a>.
                This was a really fun project that taught me how to utilize the OOP principles that I was taught in my classes, and also how to 
                approach building logic and a game through the terminal.
                <br/><br/>
                This semester I also finished the education track of TAMID and I learned a lot and met great people! Hopefully next semester I will
                get the chance to work on a real project alongside those new friends I made.
                <br/><br/>
                The internship application process is tough, but I'm working on it and have been making progress. Perhaps I'll end up in Israel this
                upcoming semester, or staying by Brandeis. Who knows? At the end of the day we're just gonna have to find out. Anyways signing out -Adam
            </p>
            </>
        ),
        customStyles: {

        }
    },

    {
        id:120124,
        title: 'A Fresh Look // How\'s it going?',
        date: new Date('2024-12-01'),
        preview:'',
        content:(
            <>
                <p>
                    It's been a while, but we've finally got a fresh look to the website.
                </p>
            </>
        )
    },
    // {
    //     id:,
    //     title:,
    //     date:,
    //     preview:,
    //     content: ()
    //     customStyles: {}
    // }
]

export default blogdata