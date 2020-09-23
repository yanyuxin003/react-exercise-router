import React, { Component } from 'react';
import '../styles/AboutUs.css'
import {Link} from 'react-router-dom';

export default class AboutUs extends Component{
    render(){
        return (
            <div className='aboutUs'> 
                <p>Company: Thoughtworks Local</p>     
                <p>Location: Xian</p>   
                <p className='line2'>For more information, please</p>     
                <p>view our <label className="website"> <Link to='/'>website</Link></label></p>                                      
            </div>   
        )            
    };
}