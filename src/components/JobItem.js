import React from "react";
import {Link} from "react-router-dom";

import './styles/JobItem.scss'
import companyIcon from '../assets/desktop/company-icon.svg'

const JobItem = ({id, type, created_at, company, company_logo, title, location}) => {
    const createdDate = new Date(created_at)
    const dateNow = new Date();

    const getTimeAgo = (createdDate, dateNow) => {
        let minutesDifference = (dateNow - createdDate) / 1000
        minutesDifference /= 60
        minutesDifference = Math.round(minutesDifference)

        if (minutesDifference < 60)
            return `${minutesDifference}min ago`
        else if (minutesDifference < 1440)
            return `${Math.round(minutesDifference/60)}h ago`
        else if (minutesDifference < 10080)
            return `${Math.round((minutesDifference/60)/24)}d ago`
        else if (minutesDifference < 43200)
            return `${Math.floor((((minutesDifference/60)/24)/7))}w ago`
        else
            return `${Math.floor((((minutesDifference/60)/24)/30))}mo ago`
    }



    return (
        <Link to={'/'}>
            <div className="jobItem">
                <picture className="jobItem__companyLogo">
                    <img src={company_logo === null? companyIcon : company_logo} alt="company"/>
                </picture>
                <p className="jobItem__timeInfo">
                    {getTimeAgo(createdDate, dateNow)}<span> . </span>{type}
                </p>
                <h3 className="jobItem__title">
                    {title}
                </h3>
                <p className="jobItem__company">
                    {company}
                </p>
                <h4 className="jobItem__location">
                    {location}
                </h4>
            </div>
        </Link>
    )
}

export default JobItem