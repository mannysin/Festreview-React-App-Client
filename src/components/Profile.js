import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';
import UserService from '../services/UserService';
import {Link} from 'react-router-dom'


class Profile extends Component {
    //   state = { usernameInput: '', passwordInput: '' };
    //   service = new UserService();
    
  
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }


    handleFormSubmit = (e) =>{
        e.preventDefault();
        this.service.signup(this.state.usernameInput, this.state.passwordInput)
        .then((userFromDB)=>{
            this.props.logTheUserIntoAppComponent(userFromDB)
          
            this.setState({usernameInput: '', passwordInput: ''})

            
            this.props.history.push('/');

        })
        .catch((err)=>{
            console.log('sorry something went wrong', err)

        })

    }

    showUserProfile = () =>{
        if(this.props.showUser){
            console.log('asdfasdfasdf', this.props.showUser)

            return(
                <div>Welcome, {this.props.showUser.username}</div>
            )
            } else {
                return
            }

        
    }
  
    render(){
      return(
        <div className="profile">
            Here is your profile
            {this.showUserProfile()}
        </div>
      )
    }
  }
  
  export default Profile;