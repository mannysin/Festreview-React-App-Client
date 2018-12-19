import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';
import UserService from '../services/UserService';
import {Link} from 'react-router-dom'


class Login extends Component {
      state = { usernameInput: '', passwordInput: '' };
      service = new UserService();
    
  
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }


    handleFormSubmit = (e) =>{
        e.preventDefault();
        this.service.login(this.state.usernameInput, this.state.passwordInput)
        .then((userFromDB)=>{
            this.props.logTheUserIntoAppComponent(userFromDB)
            this.setState({usernameInput: '', passwordInput: ''})

           
            this.props.history.push(`/`);
        })
        .catch((err)=>{
            console.log('sorry something went wrong', err)

        })

    }
  
    render(){
      return(
        <div>
            <form onSubmit={this.handleFormSubmit}>
                <label>Username:</label>
                <input type="text" name="usernameInput" value={this.state.usernameInput} required onChange={ e => this.handleChange(e)}/>
                
                <label>Password:</label>
                <input type="password" name="passwordInput" value={this.state.passwordInput} required onChange={ e => this.handleChange(e)} />
                
                <input type="submit" value="Login" />
            </form>


        </div>
      )
    }
}
  
  export default Login;