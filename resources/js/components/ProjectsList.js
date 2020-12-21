import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProjectsList extends Component {
  constructor () {
    super()

    this.state = {
      projects: []
    }
  };

  componentDidMount () {
    axios.get(`/api/project/show`).then(response => {
      this.setState({
        projects: response.data
      });
    });
  };

  render () {
    let { projects } = this.state.projects;

    projects = projects.map(project => {
      return <li>{project.id}</li>;
      // <Link
      //   className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
      //   to={`/${project.id}`}
      //   key={project.id}
      // >
      //   {project.name}
      //   <span className='badge badge-primary badge-pill'>
      //       {project.tasks_count}
      //   </span>
      // </Link>
    });

    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card'>
              <div className='card-header'>All projects</div>

              <div className='card-body'>
                <Link className='btn btn-primary btn-sm mb-3' to='/create'>
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