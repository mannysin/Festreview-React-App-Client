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
                      <NavLink to="/profile"> Profile </NavLink>
                      <button onClick = {this.props.logout}>Logout</button>
                      
                    </span>
            )
        }
    }

    
    render(){
      return(
        <nav className="navbar is-fixed-top is-warning">
        <div className="navbar-brand navbar-item">
            <NavLink to="/">
            <img src="/festreview-logo.png" alt="FestReview"/>
            </NavLink>
            <div className="navbar-burger burger">
            <span></span>
            <span></span>
            <span></span>
            </div>
        </div>

        <div  className="navbar-menu">
            <div className="navbar-end">
                <a className="navbar-item">
                    <NavLink to="/">Home</NavLink>
                </a>

        <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="https://bulma.io/documentation/overview/start/">
            Festivals
            </a>
            <div class="navbar-dropdown is-boxed">
            <a class="navbar-item">
                <NavLink to="/festivals/na/1">North America</NavLink>
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                South America
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                Europe
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/layout/container/">
                Other International
            </a>
            <hr class="navbar-divider"/>
            <a className="navbar-item is-active">
                        <NavLink to="/festivals/1">All Festivals</NavLink>
                    </a>
            </div>
        </div>
                <a className="navbar-item">
                    {this.showLogIn()}
                </a>
                <a className="navbar-item">
                <NavLink to="/">About Us</NavLink>
                </a>
        </div>
        </div>
        
        </nav>
      )
    }
  }
  
export default Navbar;