import React, {Component} from 'react';
import "../App.css";
import UserService from '../services/UserService';

import {Link} from 'react-router-dom'


class Navbar extends Component {
    service = new UserService()

    logout = () =>{
        this.service.logout().then(()=>{
            this.props.loggedInUser({loggedInUser: null})
        // this.setState({loggedInUser: null});
        })
    }

    showLogIn = () => {
        if(this.props.yoyo){
            return (
                <div>
                    <button onClick = {this.props.LogOutTheUser} >Logout</button>

                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/signup"> Sign Up For Account</Link>
                    <Link to="/login"> Login </Link>
                </div>

                
            )
        }
    }

    
    render(){
      return(
        <div>
           <Link to="/festivals/1">Browse Festivals</Link>
            {this.showLogIn()}

        </div>
      )
    }
  }
  
  export default Navbar;