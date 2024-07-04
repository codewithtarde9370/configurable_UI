import Profile from './components/navbar/profile-user.png';
import Lightmode from './components/navbar/sunny-day.png';
import Darkmode from './components/navbar/moon.png';
import Bg from './components/header/BgCover.jpg'
const NavMenu=[
    {
        title: "YOUR WebApp",
        menuLink: {
            one:"Home",
            two:"About",
            three:"Contact",
            four:"Services",
            five:"Our Gallery",
        },
        subMenu: {
            profile:Profile,
            themeToggler:Lightmode
    }
}
]
const CssTheme={
        title: "#26355D",
        background:"#FF8F00",
        btn:"#AF47D2",
        btn1:"#B1AFFF",
        link:"#FFDB00",
        bg:"#E2BBE9",
        bg1:"#FFF6E9",
        features:"#80C4E9",
        hover:"#BBE9FF",
        dark:"#FF7F3E",
        white:"#fff"
    }

    const HeadContent={
        Bgimg:Bg,
        CoverText:"Empowering Your Digital Experience",
        SubText:"Transforming ideas into reality with cutting-edge technology and innovative design. Explore our services",
        show:true
    }

    const FooterData={
        
    }



export {NavMenu,CssTheme,HeadContent};