import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from '../components/Home'
import MyProfile from '../components/MyProfile'
import AboutUs from '../components/AboutUs'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
           <div className="app">
              <div className='header'>             
                    <div className='headerInfo'>
                      <Link to='/aboutUs'>About us</Link>
                    </div>  
                    <div className='headerInfo'>
                      <Link to='/myprofile'>My profile</Link>
                    </div>
                                 
                    <div className='headerInfo'>
                        <Link to='/'>Home</Link>
                    </div>
              </div>
              </div>
        <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/myprofile' component={MyProfile} />
             <Route path='/aboutUs' component={AboutUs} />            
              <Route component={Home} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
