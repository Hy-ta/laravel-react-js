import React from 'react';

const SearchLists = (props) => {
    return(
        <div>
            {props.data ? 
                props.data.map(project => {      
                                    <div className='card' key={project.id}>
                                        <div className='card-header'>Search Result</div>
                                            <div className='card-body'>
                                                <ul className='list-group list-group-flush'>
                                                    <div className='list-group list-group-flush'>
                                                        <h3 className='py-3'>Name: {project.name}</h3>
                                                        <p>ID: {project.id}</p>
                                                        <p>Description: {project.description}</p>
                                                        <p>Archived Date: {project.updated_at.slice(0,10)}</p>
                                                    </div>
                                                </ul> 
                                            </div>
                                    </div>
            }) : 
                 <div><h2>Search the key Words.</h2></div>   
        }
        </div>
    );
}

export default SearchLists;