import React, { Component } from 'react';

class Task extends Component {
  constructor(){
    super()
      this.state = {
        tasks: [],
        title: '',
        errors: [],
      };

      this.handleAddNewTask = this.handleAddNewTask.bind(this)
      this.hasErrorFor = this.hasErrorFor.bind(this)
      this.renderErrorFor = this.renderErrorFor.bind(this)
      // this.handleMarkProjectAsCompleted = this.handleMarkProjectAsCompleted.bind(this)
  }
 
  handleAddNewTask (event) {
    event.preventDefault()

    const task = {
      title: this.state.title,
      project_id: this.state.project.id
    }

    axios.post(`/api/task/store`, task)
      .then(response => {
        // clear form input
        this.setState({
          title: ''
        })

        // add new task to list of tasks
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
    axios.put(`/api/task/${taskId}`)
    .then(response => {
      this.setState(prevState => ({
        tasks: prevState.tasks.filter(task => {
          return task.id !== taskId
        })
      }))
    })
  }

  render(){
    const { task } = this.state;
    return(
      <div className='card-body'>
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
        {task.map(task => (
          <li
            className='list-group-item d-flex justify-content-between align-items-center'
            key={task.id}
          >
            {task.title}

            <button
              className='btn btn-primary btn-sm'
              onClick={this.handleMarkTaskAsCompleted.bind(
                this,
                task.id
              )}
            >
              Mark as completed
            </button>
          </li>
        ))}
        </ul>
      </div>             
    )
  }
}

export default Task;