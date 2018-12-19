import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';
import UserService from '../services/UserService';
import {Link} from 'react-router-dom'


class Profile extends Component {
      state = { 
           loggedInUser: null, 
        };
    //   service = new UserService();
    
    componentWillMount(props){
        const theID = this.props.match.params.id;
        console.log ("here is a user ID: ------------->>>>>>>", this.props.match.params.id)
        this.fetchUserProfile(theID)
    }

    fetchUserProfile = (_id) =>{
        Axios.get(`${process.env.REACT_APP_API_URL}/profile/${_id}`)
        .then((responseFromApi)=>{
            console.log(" <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< here is a user", responseFromApi)

            console.log("getting 1 user.....", _id)
            this.setState({loggedInUser: responseFromApi.data})
        })    
        .catch((err)=>{
        })
    }
  
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
        if(this.state.loggedInUser){
            const oneUser = this.state.loggedInUser
            console.log('SHOW USER PROFILE------------', oneUser)

            return(
                <div>
                    <p>Have a look at your info below:</p>

                    <div class="profile">

                    <img src="" alt="Your Profile Pic" class="img-thumbnail"/>
                    <br/>
                    Full Name: {oneUser.firstName} {oneUser.lastName}
                    
                    <div>

                    Bio: 
                    

                    </div>

                    <div>
                        Your reviews:
                        
                        <div class="eachRieview">
                            <a href="/reviews/{{this._id}}"></a>
                        </div>
                        

                    </div>

                    <div>
                        Your comments:
                       
                        <div class="eachGame3">
                            <a href="/comments/{{this._id}}"></a>
                        </div>
                        
                        Feel bad about a review? Click on them to delete it!
                    </div>

                    <div>
                        Festivals you've attended:
                        
                    </div>


                    
                    <div>

                        <h4>Need to update your account? <a href="/profile/{{theUser._id}}/edit-profile">Edit Your Profile</a></h4>

                    </div>

                    </div>
                    </div>
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