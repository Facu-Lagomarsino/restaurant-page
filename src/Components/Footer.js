import React from "react";
import Logo from "../Assets/Logo.svg"
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="Logo" />   
                </div>
                <div className="footer-icons">
                    <BsTwitter />   
                    <SiLinkedin />   
                    <BsYoutube />   
                    <FaFacebookF />   
                </div>
            </div>    
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Quality</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Carrers</span>
                    <span>Testimonials</span>
                    <span>Work</span>
                </div>
                <div className="footer-section-columns">
                    <span>+598 94121599</span>
                    <span>go2facu@gmail.com</span>
                    <span>Front-end Developer</span>
                    <span>Uruguay 2023.</span>
                </div>
                <div className="footer-section-columns">
                    <span>Term & Conditions</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;