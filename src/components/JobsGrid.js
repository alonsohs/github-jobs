import React, {useState, useEffect}from "react";
import JobItem from "./JobItem";

import './styles/JobsGrid.scss'

const JobsGrid = () => {

    const [state, setState] = useState({
        loading: true,
        page: 1,
        data: []
    })

    const fetchJobs = async () => {
        setState({
            ...state,
            loading: true,
        })
        const URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${state.page}`
        console.log(URL)
        const response = await fetch(URL)
        const data = await response.json()
        setState({
            page: state.page + 1,
            loading: false,
            data : [].concat(
                state.data,
                data
            )
        })
    }


    useEffect(() => {
        fetchJobs()
    }, [])


    return (
        <main className={"jobsGrid"}>
            <div className="wrapper">
                <div className="jobsGrid__container">
                    {state.data.map(job => {
                        return (
                            <JobItem {...job} key={job.id}/>
                        )
                    })
                    }
                </div>
                {state.loading && (
                    <div>Cargando</div>
                )}
                {!state.loading && (
                    <div className="jobsGrid__loadMore">
                        <button
                            className="jobsGrid__loadMore--button"
                            onClick={() => fetchJobs()}
                        >
                            Load more
                        </button>
                    </div>
                )}
            </div>
        </main>
    )
}

export default JobsGrid