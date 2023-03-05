import React from "react";
import Logo from "../assets/images/Logo.svg";
import {Link} from "react-router-dom";
// icons
import InstagramLogo from "../assets/images/Instagram.svg"
import TelegramLogo from "../assets/images/Telegram.svg"
import LinkedinLogo from "../assets/images/LinkedIn - Negative.svg"
import YoutubeLogo from "../assets/images/YouTube - Negative.svg"

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer__left">
                        <img className="logo" src={Logo} alt=""/>
                        <p>EVR - bu mijozlarining og’riqli muammolariga zamanaviy yechim taklif qiluvchi jamoa !</p>

                        <div className="footer__left-logos">
                            <Link to="https://www.instagram.com/">
                                <img src={InstagramLogo} alt=""/>
                            </Link>
                            <Link to="">
                                <img src={TelegramLogo} alt=""/>
                            </Link>
                            <Link to="">
                                <img src={LinkedinLogo} alt=""/>
                            </Link>
                            <Link to="">
                                <img src={YoutubeLogo} alt=""/>
                            </Link>
                        </div>
                    </div>
                    <div className="footer__center">
                        <b>Aloqa</b>
                        <Link to="tel:+998991234567">+998 (99) 123 45 67</Link>
                    </div>
                    <div className="footer__right">
                        <b>Manzil</b>
                        <Link to="https://goo.gl/maps/4iXcWLMvn5XcBUcZA">
                            Toshkent sh. Sergli t.
                            Oqqo’rg’on k.
                        </Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    © All Rights Reserved EVR 2023.
                </div>
            </div>
        </footer>
    )
}