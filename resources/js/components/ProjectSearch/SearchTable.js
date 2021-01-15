import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../utils/Spinner'; 

const SearchTable = (props) => {

    const LoadingHandler = (props) => {
        let isLoading = props.isLoading;
        if(isLoading){
          return(
            <Spinner/>
          );
        } else{
          return(
            <span></span>
          );
        }
      }

      const data = props.projectsData;

      console.log('-------------,' ,data,'-------------,')

      

    return(
 
        <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-8'>

                  <div><LoadingHandler/></div>

                  <div className='card'>
                      <div className='card-header text-align-center'>{props.title}</div>

                      <div className='card-body'>
                        <ul className='list-group list-group-flush'>
                          {
                            props.projectsData ? 
                             props.projectsData.filter(project => project.created_at !== null).map(project => {
                              return (
                                <Link
                                  className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                  to={`/${project.id}`}
                                  key={project.id}
                                >
                                  {project.name}
                                  <span className='badge badge-primary badge-pill'>
                                      {project.updated_at.slice(0,10)}
                                  </span>
                                </Link>
                              )
                            }) : 
                              
                                <div>
                                  <h2>type the key words</h2>
                                </div>  
                          }
                        </ul>
                      </div>
                  </div>
                  
              </div>
            </div>
        </div>
      
        )
    }

export default SearchTable;