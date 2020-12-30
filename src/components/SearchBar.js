import React, {useState} from "react";

import searchIcon from '../assets/desktop/icon-search.svg'
import locationIcon from '../assets/desktop/icon-location.svg'
import checkIcon from '../assets/desktop/icon-check.svg'

import './styles/SearchBar.scss'



const SearchBar = () => {
    const [checked, setChecked] = useState(false)
    const [searchParams, setSearchParams] = useState({})

    const handleInput = e => {
       setSearchParams({
           ...searchParams,
           [e.target.name]: e.target.value,
       })
    }

    const handleCheckbox = () => checked ? setChecked(false):setChecked(true)


    return (
        <div className="searchBar" >
            <div className="searchBar__title">
                <img src={searchIcon} alt="search"/>
                <input
                    type="text"
                    name="title"
                    id="title--input"
                    placeholder="Search by title, companies, expertise..."
                    onChange={handleInput}
                />
            </div>
            <div className="searchBar__location">
                <img src={locationIcon} alt="location"/>
                <input
                    type="text"
                    name="location"
                    placeholder="Filter by location..."
                    onChange={handleInput}
                />
            </div>
            <div className="searchBar__fullTimeJob">
                <img src={checkIcon} alt="check"/>
                <label className="custom-checkbox">
                    <input
                        type="checkbox"
                        className="custom-checkbox-input"
                        name="fullTimeJob"
                        onChange={handleCheckbox}
                    />
                    <span
                        className="custom-checkbox-show custom-checkbox-show--checkbox"
                        style={checked?{backgroundImage: `url(${checkIcon})`}:null}
                    />
                    <span className="custom-checkbox-text">Full Time Only</span>
                </label>
            </div>
            <div className="searchBar__search">
                <button className="searchBar__search--button">Search</button>
            </div>
        </div>
    )
}

export default SearchBar