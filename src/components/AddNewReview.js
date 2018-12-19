import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';
import {Link} from 'react-router-dom';
import FestivalIndex from './FestivalIndex';

class AddNewReview extends Component {
    state={
        overallRating: Number,
        soundRating: Number,
        artRating: Number,
        foodRating: Number,
        venueRating: Number,
        stageRating: Number,
        activitiesRating: Number,
        vibeRating: Number,
        test: '',
        test2: '',
    }

    updateInput = (e) => {
        this.setState({[e.target.id]: e.target.value })
    }



    createANewReview = (e) => {
        e.preventDefault();
        const soundRating = this.state.soundRating;
        const test = this.state.test;
        console.log("*****************", this.props);
        
        Axios.post(`${process.env.REACT_APP_API_URL}/${this.props.id}/addReview`,
         {
             soundRating: soundRating, 
             test: test
        },
        //  {withCredentials: true}
         )
         .then((responeFromOurAPI)=>{
            console.log('success', responeFromOurAPI)

            this.props.letTheSingleFestComponentKnowThatWeAddedAProject();
           


         })
         .catch((err)=>{
            console.log('error creating review', err)
         })
    }


    render(){
        return(
            <div>
                <h2>Add New Review:</h2>
                <form onSubmit={this.createANewReview}>

                    <label>Sound Rating</label>
                    <input value={this.state.soundRating} id="soundRating" name="soundRating" onChange={this.updateInput} />

                    <label>Description</label>
                    <input value={this.state.descriptionInput} id="test" name="test" onChange={this.updateInput} />

                    <button>Save</button>

                </form>
                
            </div>
        )
    }





}


export default AddNewReview;