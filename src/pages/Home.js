import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

import './styles/Home.scss'

const Home = () => {

    return (
        <div className="home light">
            <Header/>
            <SearchBar/>
        </div>
    )
}

export default Home