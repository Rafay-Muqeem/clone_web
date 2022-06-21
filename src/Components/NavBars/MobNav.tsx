import React, { useEffect, useLayoutEffect, useState } from "react";
import './Navbars.css';
import { MobNavProps } from "../../Types/Types";
import { ImCross } from "react-icons/im";
import NeatLogo from "../../illustration/NeatLogo.svg"

const MobNav: React.FC<MobNavProps> = (menu) => {

    let [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect( () => {

        function handleWindowWidth(){
            
            setWindowWidth(window.innerWidth);

            if(windowWidth > 992){
                menu.setmobNav(false)
            }
        }

        window.addEventListener("resize", handleWindowWidth);

        return () => window.removeEventListener("resize", handleWindowWidth)
    })


    return (

        <div className="mobNavHead">

            <div id="navToggle" >
                <ImCross onClick={ () => menu.setmobNav(false) }  type="button"  />
            </div>

            <nav className="navbar navbarlight">
                <div id="mobNavMain" >

                <a id="logo" className="ms-3 mb-3" href="/" ><img src={NeatLogo} width="100px" alt="logo" /></a>
            
                    <a id="mobNavItem" className="nav-link nav-item " href="/">Location </a>

                    <a id="mobNavItem" className="nav-link nav-item " href="/">Services</a>

                    <a id="mobNavItem" className="nav-link nav-item " href="/">Resources</a>

                    <a id="mobNavItem" className="nav-link nav-item " href="/">Blog</a>

                    <a id="mobNavItem" className="nav-link nav-item " href="/">Reviews</a>


                </div>


            </nav>

            <div className="mobNavBtnDiv">
                <button onClick={ () => menu.setmobNav(false) }  className="mobNavBtn">get a quote</button>
            </div>

        </div>
    );
}

export default MobNav;