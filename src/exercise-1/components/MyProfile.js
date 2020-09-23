import React, { Component } from 'react';
import '../styles/MyProgile.css'

export default class MyProfile extends Component{
    render(){
        return(
         <div className="myprofile"> 
            <p >UserName: yyx</p>     
            <p>Gender:female</p>   
            <p>Work: IT Industry</p>     
            <p>Website:'/myProfile'</p>                           
         </div>    
        )  
    };
}