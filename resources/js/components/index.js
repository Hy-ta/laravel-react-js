import React, { Component, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import '../../css/app.css';
import Header from './Header';
import Navbar from '../components/Navbar/Navbar';
import SignIn from '../Auth/SignIn';
import ProjectsList from '../Pages/ProjectsList';
import NewProjects from '../Pages/NewProjects';
import SingleProject from '../Pages/SingleProject';
import ArchivedProjects from '../Pages/ArchievedProjects';
import SignUp from '../Auth/SignUp';
import ProjectSearch from '../components/ProjectSearch/ProjectSearch';


const App = () => {

    // const login = localStorage.getItem("isLoggedIn" ? true : false);
    
    const LoginRouter = () => { 
        return(
                <Router>
                      <div>
                        <Header />
                          <Switch>
                            <Route exact path='/' component={SignUp} />
                            <Route exact path='/sign_in' component={SignIn} />
                            <Route exact path='/project_lists' component={ProjectsList} />
                            <Route path='/new_project' component={NewProjects} />
                            <Route path='/archived_lists' component={ArchivedProjects} />
                            <Route path='/projectSearch' component={ProjectSearch} />
                            <Route path='/:id' component={SingleProject} />  
                          </Switch>
                      </div> 
                  </Router>
              )
      }
       
      return (
            <div className='app py-4'>
              <LoginRouter />
            </div>
         )
    }

ReactDOM.render(<App />, document.getElementById('app'))
