import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import './App.css';



import UserService from './services/UserService';
import Homepage  from './components/Homepage';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login  from './components/Login';
import FestivalIndex from './components/FestivalIndex';
import Axios from 'axios';

class Main extends Component {
    state={
        loggedInUser: {}
    }
    service = new UserService()
    
    componentDidMount(props){
        this.fetchUser()
    } 
    
    fetchUser(){
        this.service.loggedin()
        .then(theActualUserFromDB =>{
            console.log('signed in', theActualUserFromDB)
            this.setState({
                loggedInUser:  theActualUserFromDB
            }) 

        })
        .catch( err =>{
            console.log(err,'catch getting hit')
            this.setState({
                loggedInUser:  false
            }) 
        })
    }
    
    logInTheUser = (userToLogIn) => {
        this.setState({loggedInUser: userToLogIn})
    }

    showUser = () =>{
        if(this.state.loggedInUser){
        return(
            <div>Welcome, {this.state.loggedInUser.username}</div>
        )
        }
    }

    logOutTheUser = () => {
        this.service.logout()
        .then(()=> {
            this.setState({loggedInUser: {}})
        })
    }
    
    
    
    render() {
   
        return (
            <div>
                <Navbar user={this.state.loggedInUser} logout={this.logOutTheUser}/>
                <Homepage />
            <Switch>
                
                <Route path="/festivals/:page" component = {FestivalIndex}/>
                <Route path="/signup" render = {(props)=> <Signup {...props} logTheUserIntoAppComponent = {this.logInTheUser} />  } />
                <Route path="/login" render = {(props)=> <Login {...props} logTheUserIntoAppComponent = {this.logInTheUser} />  } />
            
            
            
            </Switch>
            {this.showUser()}
            </div>
            );
        }
    }

export default Main;
