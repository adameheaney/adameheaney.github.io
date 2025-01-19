import BackgammonPage from "./Project Pages/Backgammon Page/BackgammonPage"
import GeographyPage from "./Project Pages/Daily Geography Page/GeographyPage"
import LaserDefenderPage from "./Project Pages/Laser Defender Page/LaserDefenderPage"
import PersonalSitePage from "./Project Pages/Personal Site Page/PersonalSitePage"
import PTCPage from "./Project Pages/PTC Page/PTCPage"

const projectdata = [
    { 
        title:'Laser Defender',
        slug:'laser-defender',
        date:'Summer of \'21',
        imageUrl:'/assets/images/ProjectThumbnails/laserdefenderthumbnail.png',
        page:'https://machooey.itch.io/plane-defender-game',
        pageComponent: <LaserDefenderPage />
    },
    { 
        title:'Photo to Color Palette', 
        slug:'photo-to-color-palette',
        date:'Nov \'22 - May \'23', 
        imageUrl:'/assets/images/ProjectThumbnails/ptcProjectIcon2.0.png',
        page:'https://www.github.com/adameheaney/PTC-GUI',
        pageComponent: <PTCPage />   
    },
    { 
        title:'Personal Website',
        slug:'personal-website', 
        date:'April \'23 - Current', 
        imageUrl:'/assets/images/ProjectThumbnails/adamheaneywebsiteIcon.png',
        page:'https://www.github.com/adameheaney/adameheaney.github.io-react',
        pageComponent: <PersonalSitePage /> 
    },
    { 
        title:'Daily Geography',
        slug: 'daily-geography', 
        date:'May \'23 - Aug \'23', 
        imageUrl:'/assets/images/ProjectThumbnails/dailygeographyicon.png',
        page:'https://www.github.com/adameheaney/daily-geography',
        pageComponent: <GeographyPage />
    },
    { 
        title:'Backgammon',
        slug:'backgammon', 
        date:'Sep \'23 - Jan \'25',
        imageUrl:'/assets/images/ProjectThumbnails/backgammonIcon.png',
        page:'https://www.github.com/adameheaney/backgammon-game',
        pageComponent: <BackgammonPage />
    },
    // {
    //     title: 'SKITICK', 
    //     date: 'May \'24 - August \'24',
    // }
]

export default projectdata