import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'

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
      const countProjects = response.data.slice(0, 12);
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
      console.log(this.state.projects); 
      // console.log(this.props);
      return (
        <Link
          className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
          to={`/${project.id}`}
          key={project.id}
        >
          {project.name}
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
    

    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
              <div><LoadingHandler/></div>
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
    )
  }
}

export default ProjectsList