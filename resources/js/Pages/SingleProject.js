import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';


class SingleProject extends Component {
    constructor (props) {
      super(props)
  
      this.state = {
        project: {},
        tasks: [],
        title: "",
        errors: [],
      }
  
      this.handleFieldChange = this.handleFieldChange.bind(this)
      this.handleAddNewTask = this.handleAddNewTask.bind(this)
      this.hasErrorFor = this.hasErrorFor.bind(this)
      this.renderErrorFor = this.renderErrorFor.bind(this)
      this.handleMarkProjectAsCompleted = this.handleMarkProjectAsCompleted.bind(this)
    }
  
    componentDidMount () {
      const projectId = this.props.match.params.id
      // console.log(this.props)
      if(projectId){
        axios.get(`/api/project/${projectId}`).then(response => {
          this.setState({
            project: response.data,
            tasks: response.data.tasks
          })
        })
      }
    }
  
    handleFieldChange (event) {
      this.setState({
        title: event.target.value
      })
    }
  
    handleMarkProjectAsCompleted () {
      const { history } = this.props
      axios.put(`/api/project/${this.state.project.id}?id=${this.state.project.id ? this.state.project.id : ''}`)
        .then( 
          this.state.project.is_completed = true,
          history.push('/project_lists')
        );
    }
  
    handleAddNewTask (event) {
      event.preventDefault()
  
      const task = {
        title: this.state.title,
        project_id: this.state.project.id
      }
      // console.log(this.state.title);
  
      axios.post(`/api/task/store`, task)
        .then(response => {
          // clear form input
          this.setState({
            title: ""
          })
          console.log(response.data)
  
          // add a new task to list of tasks
          this.setState(prevState => ({
            tasks: prevState.tasks.concat(response.data)
          }))
        })
        .catch(error => {
          this.setState({
            errors: error.response.data.errors
          })
        })
    }
  
    hasErrorFor (field) {
      return !!this.state.errors[field]
    }
  
    renderErrorFor (field) {
      if (this.hasErrorFor(field)) {
        return (
          <span className='invalid-feedback'>
            <strong>{this.state.errors[field][0]}</strong>
          </span>
        )
      }
    }

    handleMarkTaskAsCompleted (taskId) {
      axios.put(`/api/task/${taskId}?id=${taskId}`).then(response => {
        this.setState(prevState => ({
          tasks: prevState.tasks.filter(task => {
            return task.id !== taskId
          })
        }))
      })
    }
  
    render () {
      // console.log(this.state.tasks.id)
      console.log(this.state)
      const { tasks, project } = this.state;

      // let loading = <p>Loading ... </p>
     
      return (
        <>
        <Navbar/>
        <div className='container py-4'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className='card'>
                
                <div className='card-header'>{project.name}</div>
  
                <div className='card-body'>
                  <p>{project.description}</p>
  
                  <button
                    className='btn btn-primary btn-sm'
                    onClick={this.handleMarkProjectAsCompleted}
                  >
                    Mark as completed
                  </button>
  
                  <hr />
  
                  <form onSubmit={this.handleAddNewTask}>
                    <div className='input-group'>
                      <input
                        type='text'
                        name='title'
                        className={`form-control ${this.hasErrorFor('title') ? 'is-invalid' : ''}`}
                        placeholder='Task title'
                        value={this.state.title}
                        onChange={this.handleFieldChange}
                      />
  
                      <div className='input-group-append'>
                        <button className='btn btn-primary'>Add</button>
                      </div>
  
                      {this.renderErrorFor('title')}
                    </div>
                  </form>
  
                  <ul className='list-group mt-3'>
                      { tasks ?
                        tasks.map(task => (
                        <li
                          className='list-group-item d-flex justify-content-between align-items-center'
                          key={task.id}
                        >
                          {task.title}
    
                          <button
                            className='btn btn-primary btn-sm'
                            onClick={this.handleMarkTaskAsCompleted.bind(this, task.id)}
                          >
                            Mark as completed
                          </button>
                        </li>
                      ))
                              :

                          <li className='list-group-item d-flex justify-content-between align-items-center'>
                      
                        </li>
                    }
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
  
  export default SingleProject;