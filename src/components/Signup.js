import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';
import UserService from '../services/UserService';
import {Link} from 'react-router-dom'


class Signup extends Component {
      state = { usernameInput: '', passwordInput: '' };
      service = new UserService();
    
  
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }


    handleFormSubmit = (e) =>{
        e.preventDefault();
        this.service.signup(this.state.usernameInput, this.state.passwordInput)
        .then((userFromDB)=>{
            this.props.logTheUserIntoAppComponent(userFromDB)
          
            this.setState({usernameInput: '', passwordInput: ''})

            this.props.history.push('/FestivalIndex');
            this.props.history.push('/');

        })
        .catch((err)=>{
            console.log('sorry something went wrong', err)

        })

    }
  
    render(){
      return(
        <div className="signUp">
            <form onSubmit={this.handleFormSubmit}>
                <label>Username:</label>
                <input type="text" name="usernameInput"  value={this.state.usernameInput} required onChange={ e => this.handleChange(e)}/>
                
                <label>Password:</label>
                <input name="passwordInput"  value={this.state.passwordInput} required onChange={ e => this.handleChange(e)} />
                
                <input type="submit" value="Signup" />
            </form>

            <p>Already have account? 
                <Link to={"/login"}> Login</Link>
            </p>
        </div>
      )
    }
  }
  
  export default Signup;