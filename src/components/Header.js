import React from "react";

import logo from "../assets/desktop/logo.svg"
import sunIcon from "../assets/desktop/icon-sun.svg"
import moonIcon from "../assets/desktop/icon-moon.svg"
import headerBackground from "../assets/desktop/bg-pattern-header.svg"

import './styles/Header.scss'

const Header = ({handleToogle}) => (
    <header
        className="header"
        style={{backgroundImage: `url(${headerBackground})`}}
    >
        <div className="wrapper">
            <picture className="header__logo">
                <img src={logo} alt="logo" className="header__logo--image"/>
            </picture>
            <div className="header__toggle">
                <img src={sunIcon} alt="light mode" className="header__toggle--light"/>
                <label className="switch">
                    <input
                        type="checkbox"
                        id="switch-theme"
                        onChange={handleToogle}
                    />
                    <span className="slider round"/>
                </label>
                <img src={moonIcon} alt="dark mode" className="header__toggle--dark"/>
            </div>
        </div>
    </header>
)

export default Header