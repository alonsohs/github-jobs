import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import JobsGrid from "../components/JobsGrid";

import './styles/Home.scss'

const Home = () => {

    return (
        <div className="home light">
            <Header/>
            <SearchBar/>
            <JobsGrid/>
        </div>
    )
}

export default Home