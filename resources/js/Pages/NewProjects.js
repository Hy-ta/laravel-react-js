import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';

class NewProject extends Component {
    constructor (props) {
        super (props)
        this.state = {
            name: '',
            description: '',
            confirm: false,
            errors: []
        }
        this.onChangeValue = this.onChangeValue.bind(this)
        this.onSubmitButton = this.onSubmitButton.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    onChangeValue(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmitButton(e) {
        e.preventDefault();

        const { history } = this.props;

        const project = {
            name: this.state.name,
            description: this.state.description
        };
    
        axios.post(`api/project/store`, project)
              .then(response => {
                    this.setState({ confirm: true});
                    history.push('/project_lists');
        })
        .catch(error => {
            console.log(error);
            this.setState({ errors: error.message });
            this.setState({ confirm: false});
        });
        
    };

    // componentDidMount(){

    // };
   

    hasErrorFor(field) {
        return !!this.state.errors[field];
    };

    renderErrorFor(field) {
        if(this.hasErrorFor(field)) {
            return (
                <span className='invalid-feedback'>
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            )
        };
    };

    render (){
        return (
            <>
            <Navbar />
            <div className='container py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>Create New Project</div>
                              <div className='card-body'>

                                <form onSubmit={this.onSubmitButton}>
                                    <div className='form-group'>
                                        <label htmlFor='name'>Project Name</label>
                                        {/* error message */}
                                        
                                        { this.state.errors &&
                                         <h3 className="error"> { this.state.errors.message } </h3> 
                                         }

                                         {/* //////////// */}
                                        <input
                                            id='name'
                                            type='text'
                                            className={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                                            name='name'
                                            value={this.state.name}
                                            onChange={this.onChangeValue}
                                        />
                                        {this.renderErrorFor('name')}    
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='description'>Project description</label>
                                        <textarea
                                            id='description'
                                            className={`form-control ${this.hasErrorFor('description') ? 'is-invalid' : ''}`}
                                            name='description'
                                            rows='10'
                                            value={this.state.description}
                                            onChange={this.onChangeValue}
                                        />
                                        {this.renderErrorFor('description')}
                                    </div>
                                    <button 
                                        className='btn btn-primary'
                                        type='submit'
                                    >
                                        Create</button>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default NewProject;