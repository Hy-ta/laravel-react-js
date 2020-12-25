import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header';
import Navbar from './Navbar';
// import Home from '../Pages/Home';
import ProjectsList from '../Pages/ProjectsList';
import NewProjects from '../Pages/NewProjects';
import SingleProject from '../Pages/SingleProject';
import ArchivedProjects from '../Pages/ArchievedProjects';


class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Header />
          <Navbar />
            <Switch>
              <Route exact path='/' component={ProjectsList} />
              <Route path='/new_project' component={NewProjects} />
              <Route path='/archived_lists' component={ArchivedProjects} />
              <Route path='/:id' component={SingleProject} />  

            </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
