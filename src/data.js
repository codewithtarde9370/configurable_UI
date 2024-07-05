import Profile from './components/navbar/profile-user.png';
import Lightmode from './components/navbar/sunny-day.png';
// import Darkmode from './components/navbar/moon.png';
import Bg from './components/header/BgCover.jpg';

import Pay1 from './components/Footer/pay1.png';
import Pay2 from './components/Footer/pay2.png';
import Pay3 from './components/Footer/pay3.png';
import Pay4 from './components/Footer/pay4.png';
import Connect1 from './components/Footer/connect1.png';
import Connect2 from './components/Footer/connect2.png';
import Connect3 from './components/Footer/connect3.png';
import Connect4 from './components/Footer/connect4.png';


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
        slogan:"Explore the world, create memories.",
        payment:{
            img1:Pay1,
            img2:Pay2,
            img3:Pay3,
            img4:Pay4,
        },
        socialMedia: {
        insta:Connect1,
        fb:Connect2,
        linkedin:Connect3,
        twitter:Connect4
    },
    companyLinks:{
        info1:"About Us",
        info2:"Free Bussiness Tool",
        info3:"Success Stories",
        info4:"Resources",
        info5:"Help and Support",
    },
    recentNews:{
        news1:"Our Secret Island Boat Tour Is Just for You",
        news2:"Chill and Escape in Our Natural Shelters",
        news3:"September in Sunrise Avenue",
        news4:"Live Music Concerts"
    }
}



export {NavMenu,CssTheme,HeadContent,FooterData};