import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Axios from 'axios';




import UserService from './services/UserService';
import Homepage  from './components/Homepage';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login  from './components/Login';
import FestivalIndex from './components/FestivalIndex';
import NAFestivalIndex from './components/NAFestivalIndex';
import SingleFestival from './components/SingleFestival';

class Main extends Component {
    state={
        loggedInUser: {},
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
        } else {
            return
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
                
                <div>
                    <Navbar user={this.state.loggedInUser} logout={this.logOutTheUser}/>
                </div>

                <div className="component-container">
                {/* <Homepage /> */}
                <Switch>
                    
                    <Route exact path="/festivals/:page" component = {FestivalIndex}/>
                    <Route exact path="/festivals/na/:page" render = {(props)=> <NAFestivalIndex {...props} logTheUserIntoAppComponent = {this.logInTheUser}/> }/>
                    <Route exact path="/festival/:id" render = {(props)=> <SingleFestival {...props} logTheUserIntoAppComponent = {this.logInTheUser} />  } />
                    <Route path="/signup" render = {(props)=> <Signup {...props} logTheUserIntoAppComponent = {this.logInTheUser} />  } />
                    <Route path="/login" render = {(props)=> <Login {...props} logTheUserIntoAppComponent = {this.logInTheUser} />  } />
            
                </Switch>
            {this.showUser()}


                </div>
            </div>
            );
        }
    }

export default Main;
