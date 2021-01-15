import axios from 'axios';
import React, { useEffect, useState } from 'react';

import SearchTable from './SearchTable';
import SearchBox from '../ProjectSearch/SearchBox';
import Navbar from '../Navbar/Navbar';



const ProjectSearch = () => {
    const [state, setState] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const getProjectData = async (searchValue) => {
        try{
            await axios.get(`api/project/getSearch?name=${searchValue ? searchValue: ''}`)
                    .then(response => {
                        if(response){
                            setState(response.data);
                            setIsLoading(false);
                        };
                    });
            } catch (err) {
                console.log(err);
                setError(response.err);
            }
    }; 

    useEffect(() => {
        getProjectData(searchValue);
    },[searchValue]);


    return(
        <>
        <Navbar />
        <div className="container-fluid">
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <SearchBox 
                    value={searchValue} 
                    setSearchValue={setSearchValue} 
                />
			</div>
            <div className='row'>
                <SearchTable 
                    title="Search Results"
                    projectsData={state} 
                    isLoading={isLoading}
                />
			</div>
        </div>
        </>
    )
}

export default ProjectSearch;