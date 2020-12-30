import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../../css/app.css';
import Header from './Header';
import Navbar from './Navbar';
import SignIn from '../Auth/SignIn';
import SignUp from '../Auth/SignUp';
import ProjectsList from '../Pages/ProjectsList';
import NewProjects from '../Pages/NewProjects';
import SingleProject from '../Pages/SingleProject';
import ArchivedProjects from '../Pages/ArchievedProjects';
import SignUp2 from '../Auth/SignUp2';


class App extends Component {
  render () {
    const login = localStorage.getItem("IsLoggedIn");

    return (
        <div className='app py-4'>
          {login ? (
            // if user logged in
            <Router>
              <div>
                <Header />
                <Navbar />
                  <Switch>
                    <Route exact path='/projectLists' component={ProjectsList} />
                    <Route path='/new_project' component={NewProjects} />
                    <Route path='/archived_lists' component={ArchivedProjects} />
                    <Route path='/:id' component={SingleProject} />  
                  </Switch>
              </div>
            </Router>   
              ) : (
                // if user is not yet logged in
            <Router>
                <div>
                  <Header />
                  <Navbar />
                    <Switch>
                      <Route exact path='/' component={SignUp2} />
                      <Route exact path='/sign_in' component={SignIn} />
                      <Route exact path='/projectLists' component={ProjectsList} />
                      <Route path='/new_project' component={NewProjects} />
                      <Route path='/archived_lists' component={ArchivedProjects} />
                      <Route path='/:id' component={SingleProject} />  
                    </Switch>
                </div>
              </Router>  
              )
          }
        </div>
     )}
    }

ReactDOM.render(<App />, document.getElementById('app'))
