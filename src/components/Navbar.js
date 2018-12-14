import React, {Component} from 'react';
import "../App.css";
import {NavLink} from 'react-router-dom'


class Navbar extends Component {
    
    showLogIn = () => {
        if(!this.props.user){
            return (
                <span>
                    <NavLink to="/signup"> Sign Up For Account</NavLink>
                    <NavLink to="/login"> Login </NavLink>
                </span>
            )
        } else {
            return (
                <span>
                    <button onClick = {this.props.logout}>Logout</button>
                </span>
            )
        }
    }

    
    render(){
      return(
        <div className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/festivals/1">Browse Festivals</NavLink>
            
            {this.showLogIn()}

        

        </div>
      )
    }
  }
  
  export default Navbar;