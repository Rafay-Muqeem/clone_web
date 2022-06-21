import React, { useState } from 'react';
import './Navbars.css';
import { NavProps } from '../../Types/Types';
import { modals } from '../../Types/Types';
import { FaBars, FaAngleDown } from "react-icons/fa";
import NeatLogo from "../../illustration/NeatLogo.svg"


const Nav: React.FC<NavProps> = ({ setmobNav }) => {

    return (
        <>
            <div className="navHead" >
                <div id="navMain" className="container-fluid">

                    <div className="navLeft">
                        <a id="logo" href="/" ><img src={NeatLogo} width="100px" alt="logo" /></a>
                    </div>

                    <FaBars onClick={() => setmobNav(true)} className="toggleMobNav" type="button" />

                    <div className="navMiddle">
                        <ul id="navbarItems" >

                            <li>
                                <div>
                                    <a id="navbarItem" className="" href="#">Locations<FaAngleDown className="navCardBtn ms-1 mb-1 fs-5 " /></a>

                                    <div className="navCard">
                                        <div className="locationCard ">
                                            <div className="main">
                                                <ul className="upperSide">
                                                    <li>
                                                        <img src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="sydney" />
                                                        <a href="/" >Sydney</a>
                                                        <p>From hidden terraces to apartment high-rises, we offer Sydney's best end of lease cleaning service.</p>
                                                    </li>

                                                    <li>
                                                        <img src="https://images.unsplash.com/photo-1624324969205-f93f254d910a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWVsYm91cm5lJTIwY2l0eXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="melbourne" />
                                                        <a href="/" >Melbourne</a>
                                                        <p>Melbourne might be known for it’s coffee culture, but our claim to fame is a hassle-free end of lease clean.</p>
                                                    </li>

                                                </ul>

                                                <ul className="lowerSide">
                                                    <li>
                                                        <a href="/">Inner West</a>
                                                        <a href="/">Eastern Suburbs</a>
                                                        <a href="/">Northern Beaches</a>
                                                        <a href="/">North Shore</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div >
                                    <a id="navbarItem" href="#">Services<FaAngleDown className="navCardBtn ms-1 mb-1 fs-5 " /></a>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <a id="navbarItem" href="#">Resources<FaAngleDown className="navCardBtn ms-1 mb-1 fs-5 " /></a>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <a id="navbarItem" href="#">Blog</a>
                                </div>
                            </li>

                            <li>
                                <div >
                                    <a id="navbarItem" href="#">Reviews</a>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className="navRight">
                        <button className="navBtn">get a quote</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Nav;



