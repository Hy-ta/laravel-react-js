import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header';
import Navbar from './Navbar';
// import About from './About';
import ProjectsList from './ProjectsList';
import NewProjects from '../Pages/NewProjects';
// import SingleProject from '../Pages/SingleProject';


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
              {/* <Route path='/:id' component={SingleProject} />  */}
            </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
