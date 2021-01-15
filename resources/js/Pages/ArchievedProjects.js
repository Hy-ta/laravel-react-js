import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';


class ArchivedProjects extends Component {
    constructor(){
        super()
        this.state = {
            archivedProjects: []
        }
    }
    
    componentDidMount(){
        axios.get(`/api/project/fetchProjects`).then(response => {
            this.setState({ 
                archivedProjects: response.data
            });
            // console.log('return');
            // console.log(response.data);
        });
    };



    render(){    
        const archivedProjects = this.state.archivedProjects.map(project => {
            return(
                <div className='card' key={project.id}>
                    <div className='card-header'>Archived projects</div>
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
            )
        })
        
        return(
            <>
                <Navbar />
                <div className='container py-4'>
                    <div className="py-3">
                        <h2>Total Archived: {this.state.archivedProjects.length}</h2>
                    </div>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                         {archivedProjects}
                    </div>
                </div>
            </div>
          </>
        )
    }
}

export default ArchivedProjects;