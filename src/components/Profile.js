import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';
import UserService from '../services/UserService';
import {Link} from 'react-router-dom'


class Profile extends Component {
      state = { 
           loggedInUser: null,
           editing: false, 
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
        this.setState({[e.target.id]: e.target.value})
    }


    editProfile = (e) => {
        e.preventDefault();
        Axios.post(`${process.env.REACT_APP_API_URL}/${this.props.match.params.id}/update`, 
        {firstName: this.state.firstName, lastName: this.state.lastName, avatar: this.state.avatar, bio: this.state.bio})
        .then(()=>{
            this.setState({
                editing: false,
                loggedInUser: {
                    ...this.state.loggedInUser, 
                    firstName: this.state.firstName, 
                    lastName: this.state.lastName,
                    avatar: this.state.avatar,
                    bio: this.state.bio
                }
            });
        })
        .catch(()=>{

        })
    }

    toggleForm = () =>{
        this.setState({editing: true})

    }

    showUserProfile = () =>{
        if(this.state.loggedInUser){
            const oneUser = this.state.loggedInUser
            // console.log('SHOW USER PROFILE------------', oneUser)
                if(this.state.editing){
                    // console.log('editing now b', oneUser.firstName)
                    return(
                        <div className="list-of-festivals-container">
                            <form className = "field" onSubmit={this.editProfile}>
                            <label className="label">Avatar:</label>
                            <input className="input" value={this.state.avatar} onChange={this.handleChange} id="avatar"/>
                            <label className="label">First Name:</label>
                            <input className="input" value={this.state.firstName} onChange={this.handleChange} id="firstName"/>
                            <label className="label">Last Name:</label>
                            <input className="input" value={this.state.lastName} onChange={this.handleChange} id="lastName"/>
                            <label for="bio" className="label">Bio:</label>
                            <textarea className="input" id="bio" rows="4" cols = '40' value={this.state.bio} onChange={this.handleChange} />

                            {/* <input className="input" type="textarea" value={this.state.bio} onChange={this.handleChange} id="bio"/> */}
                            <button onClick={this.editProfile}>Submit changes</button>
                            </form>
                        </div>
                )
    
            }  else{
            return(
                <div className="profile">
                    <p>Have a look at your profile below:</p>

                    <div class="profile">

                    <img src={oneUser.avatar} alt="Your Profile Pic" class="img-thumbnail"/>
                    <br/>
                    Full Name: {oneUser.firstName} {oneUser.lastName}
                    
                    <div>

                    Bio: {oneUser.bio}
                    

                    </div>

                    <div>
                        Your reviews:

                        {/* {oneUser.reviews} */}
                        
                        <div class="eachRieview">
                            {/* <a href={`/reviews/${this._id}`}></a> */}
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
                        <h4>Need to update your account?</h4>
                        <button class="button is-warning" onClick={this.toggleForm} >Edit your Profile!</button>
                    </div>

                    </div>
                    </div>
            )
        
        }
    }
}

    render(){
      return(
        <div className="list-of-festivals-container">
            {this.showUserProfile()}
        </div>
      )
    }
  }
  
  export default Profile;