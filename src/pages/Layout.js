import React, {useState} from "react";

import Header from "../components/Header";

import './styles/Layout.scss'

const Layout = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)
    const toggleTheme = () => {
        setDarkMode(!darkMode)
        console.log("dark mode")
    }

    return(
        <div className={`layout ${darkMode?"darkMode": ""}`}>
            <Header handleToogle={toggleTheme}/>
            {children}
        </div>
    )
}

export default Layout