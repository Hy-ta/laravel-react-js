import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchTable from '../components/ProjectSearch/SearchTable'
import Navbar from '../components/Navbar/Navbar';
import Spinner from '../utils/Spinner'

// import Spinner from '../components/Spinner';

class ProjectsList extends Component {
  constructor () {
    super()

    this.state = {
      isLoading: true,
      projects: [],
    }
  };

  componentDidMount () {
    axios.get(`/api/project/index`).then(response => {
      const countProjects = response.data;
      const updatedProjects = countProjects.map(project => {
        return {
            ...project
        };
      })
      this.setState({
        projects: updatedProjects,
        isLoading: false
      });
      // console.log(response)
    });
  };

  render () {
    const projects = this.state.projects.map(project => {
      return (
        <Link
          className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
          to={`/${project.id}`}
          key={project.id}
        >
          {project.name.slice(0,19)}
          <span className='badge badge-primary badge-pill'>
              {project.tasks_count}
          </span>
        </Link>
      )
    });

    const LoadingHandler = () => {
      let { isLoading } = this.state;
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

    let count = 0;
    for(let i = 0; i < this.state.projects.length; i++){
      if(this.state.projects !== 0) {
        count++;
      }
    }

    return (
      <>
      <Navbar />
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
              <div><LoadingHandler/></div>
              <div className="py-2">
                <h2>Unaccomplished Tasks: {count}</h2>
              </div>
              <div className='card'>
                <div className='card-header'>All projects</div>

                <div className='card-body'>
                  <Link className='btn btn-primary btn-sm mb-3' to='/new_project'>
                    Create a new project
                  </Link>

                  <ul className='list-group list-group-flush'>
                    {projects}
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default ProjectsList