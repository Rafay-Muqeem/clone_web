import React from 'react'
import "./Footer.css";
import NeatLogo from "../../illustration/NeatLogo.svg"
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footerUpper">
                    <div className="footerIntro">
                        <a id="logo" href="/" ><img src={NeatLogo} width="90px" alt="logo" /></a>
                        <p className="text">This is Neat is a bond cleaning service keeping tenants, real estate agents and property managers happy all across Sydney and Melbourne.</p>
                        <div className="socialIcons">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaGoogle />
                            <FaInstagram />
                        </div>
                    </div>

                    <div className="footerMenu">

                        <div className="services">
                            <h1>SERVICES</h1>
                            <p><a href="/">End of Lease Cleaning</a></p>
                            <p><a href="/">Vacate Cleaning</a></p>
                            <p><a href="/">Moving Cleaning</a></p>
                        </div>

                        <div className="locations">
                            <h1>LOCATIONS</h1>
                            <p><a href="/">Sydney</a></p>
                            <p><a href="/">Melbourne</a></p>
                            <p><a href="/">Inner West</a></p>
                            <p><a href="/">Eastern Suburbs</a></p>
                            <p><a href="/">Northern Beaches</a></p>
                            <p><a href="/">North Shore</a></p>
                            <p><a href="/">Surry Hills</a></p>
                            <p><a href="/">Bondi</a></p>
                            <p><a href="/">Parramatta</a></p>
                        </div>

                        <div className="contact">
                            <h1>CONTACT</h1>
                            <p>This is Neat Cleaning Pty Ltd</p>
                            <p><a href="/" >hello@thisisneat.com.au</a></p>
                        </div>

                    </div>
                </div>

                <div className="footerLower">
                    <div className="description">
                        <h1>* Our Bond Back Guarantee:</h1>

                        <p>
                            1. You are required to confirm with your real estate agent which specific cleaning services are required under your lease agreement.
                            You must ensure that you tick the appropriate checkboxes on our cleaning checklist when booking a Clean.
                        </p>

                        <p>
                            2. If, within 72 hours after your Clean, we are notified by you or your real estate agent that a part of our Services (as described in your Booking and in our cleaning checklist)
                            has not been completed satisfactorily to allow your tenancy bond to be released back to you, we will come back to your Residence to re-perform those Services for no additional fee 
                            (Bond Back Guarantee). Any such notification should include photographs evidencing the areas that need to be addressed and we will make an assessment of whether the area is cleanable.
                        </p>

                        <p>
                            3. Our Bond Back Guarantee does not cover the following:<br/>
                            (a) cleaning services not described in your Booking or cleaning checklist available on the Site;<br />
                            (b) permanent damage at your Residence, including smoke stains, carpet stains, hard water stains, wall marks, mould, rusting, grease stains, and permanent odours; and<br />
                            (c) areas which, in our professional opinion, cannot be cleaned.
                        </p>

                    </div>

                </div>

                
            </div>
            <div className="endBar">
                <div className="copyright">
                    <p>&copy; 2021 This is neat cleaning pty ltd </p>
                </div>
                <div className="endBarMenu">
                    <a href="/">Request a Reclean</a>
                    <a href="/">Terms and Conditions</a>
                    <a href="/">Privacy Policy</a>
                </div>
                <div className="phoneNumber">
                    <a href="/">ABN: 92 616 673 440</a>
                </div>
            </div>
        </>
    )
}

export default Footer;
