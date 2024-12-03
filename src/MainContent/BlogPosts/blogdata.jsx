import styles from './BlogPostPage.module.css'

const blogdata = [
    {
        id: 51623,
        title: 'My First Blog Post',
        date: new Date('2023-05-16T00:00:00'),
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
        date: new Date('2023-05-18T00:00:00'),
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
        date: new Date('2023-06-05T00:00:00'),
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
        date: new Date('2023-06-20T00:00:00'),
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
        date: new Date('2023-10-25T00:00:00'),
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
        date: new Date('2024-01-03T00:00:00'),
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
        date: new Date('2024-12-01T00:00:00'),
        preview:'It\'s been a while, but hey, at least the website has a new look!',
        content:(
            <>
                <p>
                    It's been a while, but hey, at least the website has a new look! It's been almost a year since I last posted to this blog,
                    and this year has been an adventure to say the least.
                    <br/><br/>
                    Let's start off by talking about the website: I just spent the past week recreating the website using React.js (a skill I've picked up
                    in the past year) with an original look and feel to it. Say goodbye to the boring template from HTML5up, and hello to my "artistic", 
                    entirely self-made website! At the current moment, there is still a lot to work on: the information hierarchy could be better, and the sidebar
                    can definitely be improved. There's a couple reasons why I went all out redesigning and recoding the entire website: number one being that I didn't
                    really like the look and feel of it; it felt too bland, boring, and 'templatey'. It had no character. Number two is that it didn't showcase my skills enough!
                    This past year I spent a lot of time with React, and if my own website wasn't even made using it, then who would I be but a hypocrite! So yeah, I'm
                    very happy with my redesign and I hope you would be too! (I'll probably link to the old one here eventually so you can see the changes) 
                    <br/><br/>
                    Now let's talk about the year, starting with second semester of sophomore year. Second semester was a little rough for me, which is probably partially
                    the reason why I didn't post anything. Personal problems compounded on top of each other, causing me to lose focus, leading to my worst semester academically
                    yet. I'm not going to sugar coat it- I lost myself a bit. I took Operating Systems and Compiler Design, two incredibly low-level classes. With the personal issues
                    in the background, it was difficult to manage both of the classes, but I pulled out of both of them with a B. Not my proudest work, but I still learned a lot and enjoyed
                    the courses! On top of those courses, I was in the Tamid club, working with an Israeli start-up called Tutatet with 8 of my fellow peers and now friends. They are aiming to build a platform where kids can teach kids
                    online through their online service. Think of it like betterhelp but with tutors instead of therapists. We assisted them with creating their landing page for their MVP, which
                    was created with React.js (this is where I was first introduced to React) and typescript. I actually really enjoyed React, and the creative process of frontend work was fun for me!
                    Using AWS, we launched their landing page to the world wide web, and I assisted my peer in creating their video calling service. The learning experience was amazing, I learned so many
                    new technologies and how to work with a crew using GitHub for source control. Overall, I really grew as a person in the first semester and gained many new skills.
                    <br/><br/>
                    On to the summertime! I spent my summer in Israel, commuting from Jerusalem to Tel Aviv. If you didn't already know, I am Jewish, specifically of the Syrian culture (though 
                    I am majority genetically Ashkenazi). Living in Israel meant a lot for me. For one, it was the first time I was away from my identical twin, living separately,
                    with people who had no idea who he was. Secondly, I went alone. With nobody, not even a friend. It was me, all alone, in a foreign-ish country, with a language I barely
                    know, all alone. It sounds scary, but it was thrilling. It was life changing. Anyways, back on track: for work, I was a tech intern at Elevation, a small company based
                    in Tel Aviv. Their work is in the field of tech education: they create programs/bootcamps to educate employees or potential employees. They've educated Israeli employees at companies
                    like Google, WeWork, and more big names! My job was to assist in creating material for the company. While there, I created a demo for them called SKITICK, and created 3 slideshows.
                    The 3 slideshows I created were on React, Firebase, and the SKITICK React/Firebase demo. I went into the office 2/3 times a week, and worked along side my manager, who was an
                    awesome dude. He was as chill as Israelis usually are, and he taught me a lot. Here I learned a lot about working in office environments, being mentorable, even more React, Google's Firebase,
                    and more. In Israel, I learned to be a fully functioning self-autonomous person in a sense. Truly the highlight of the year.
                    <br/><br/>
                    Upon getting back to America, it was time to go back to school. But not before I went on a trip to Banff national park Canada with my family, which was a lot of fun of course.
                    Now, as the semester is wrapping up, its time to reflect on what I've done this past semester. So, as it turns out, I didn't grow <i>as</i> much as I thought in Israel.
                    I unfortunately had personal issues again, and it was the same situation, again. This time though, its easier for me to shift focus away from it and get past it, since it's
                    not the first time. But that's of course easier said than done. So this semester was also a bit of a doozy. I still don't have an internship for the coming summer, although I have
                    been locking in more recently, as evident from the entire website rework. Besides these mishaps, this semester has been good. I started my position as a Teaching Assistant
                    for a financial accounting class I took last semester, and it's been very rewarding. I've grown a lot as a result of it, and it also feels great helping people and leading. I unfortunately haven't
                    been as active in Tamid this semester, but I hope to rejoin next semester perhaps. Which speaking of, I was supposed to go abroad there next semester, but now I'm not unfortunately. Anyways, I've been
                    taking the COSI courses, Natural Language Processing, and Algorithms, both of which are wonderful classes. NLP is such a cool field, and it could definitely be in my future. Algorithms has taught me 
                    the fundamentals of algorithms and techniques/types such as dynamic programming, greedy algorithms, divide and conquer, etc. It's a great backbone class, and hopefully it will help me
                    in my technical interviews and leetcoding! Besides for that, I haven't worked on many projects this semester, though this rework of my website is one now!
                    <br/><br/> 
                    Now that we're up to date, it's time to look ahead. I hope to get a great internship for this coming summer with god's help (and my own of course). I hope to have
                    a great time in Israel this winter break. And I hope I'm doing good all around :)
                    <br/><br/>
                    To whoever is reading this, I hope you've been doing well, you're doing well, and you will do well. Do great things!
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


export default blogdata.reverse()