import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login  from './components/Login';
import Homepage  from './components/Homepage';
import FestivalIndex from './components/FestivalIndex';
import Navbar from './components/Navbar';
import UserService from './services/UserService';

class Main extends Component {
    state={
        loggedInUser: null
    }
    service = new UserService()
    
    componentDidMount(props){
    this.fetchUser()
    } 
    
    fetchUser(){
        if( this.state.loggedInUser === null ){
        this.service.loggedin()
        .then(theActualUserFromDB =>{
            console.log('signed in')
            this.setState({
            loggedInUser:  theActualUserFromDB
            }) 

        })
        .catch( err =>{
            console.log('catch getting hit')
            this.setState({
            loggedInUser:  false
            }) 
        })
        }
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
        this.service.logout().then(()=> {
            this.setState({loggedInUser: null})
        })
    }
    
    
    
    render() {
    {this.fetchUser()}
   
        return (
            <div>
            
                <Navbar yoyo = {this.logInTheUser} whatAboutNow = {this.logOutTheUser}/>
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
