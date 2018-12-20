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
        this.setState({[e.target.name]: e.target.value})
    }


    editProfile = (e) => {
        e.preventDefault();
        Axios.post(`${process.env.REACT_APP_API_URL}//update`, 
        {theTitle: this.state.titleInput, theDescription: this.state.descInput})
        .then(()=>{
            this.setState({editing: false});
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
                        <form className = "field"onSubmit={this.editProfile}>
                        <label className="label">First Name:</label>
                        <input className="input" value={oneUser.firstName} onChange={this.handleChange} id="titleInput"/>
                        <label className="label">Last Name:</label>
                        <input className="input" value={oneUser.lastName} onChange={this.handleChange} id="descInput"/>
                        <button>submit changes</button>
                    </form>
                )
    
            }  else{
            return(
                <div>
                    <p>Have a look at your info below:</p>

                    <div class="profile">

                    <img src={oneUser.avatar} alt="Your Profile Pic" class="img-thumbnail"/>
                    <br/>
                    Full Name: {oneUser.firstName} {oneUser.lastName}
                    
                    <div>

                    Bio: {oneUser.bio}
                    

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
        <div className="profile">
            Here is your profile
            {this.showUserProfile()}
        </div>
      )
    }
  }
  
  export default Profile;