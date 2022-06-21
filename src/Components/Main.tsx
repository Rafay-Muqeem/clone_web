import React, { useState } from 'react'
import Footer from './Footer/Footer';
import Home from './Home/Home'
import MobNav from './NavBars/MobNav';
import Nav from './NavBars/Nav';

export default function Main() {
    
    let [mobNav, setMobNav] = useState<boolean>(false);
    
    if(mobNav){
        return <MobNav mobNav={mobNav} setmobNav={setMobNav} />
    }

    return (
        <div>
            {/* <Nav mobNav={mobNav} setmobNav={setMobNav} /> */}
            <Home mobNav={mobNav} setmobNav={setMobNav}/>
            <Footer />
        </div>
    )
}
