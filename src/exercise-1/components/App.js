import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Home from '../components/Home'
import MyProfile from '../components/MyProfile'
import AboutUs from '../components/AboutUs'
import Products from '../components/Products'
import Product from '../components/Product'

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
                        <Link to='/products'>Products</Link>
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
             <Route path='/products' component={Products} />    
             <Route path='/products/:id' component={Product}/>
              <Route component={Home} />
              <Redirect from='/goods' to='/products' />
              <Redirect from='/*' to='/' />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
