import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';
import {Link} from 'react-router-dom';
import FestivalIndex from './FestivalIndex';

class AddNewReview extends Component {
    state={
        overallRating: 0,
        soundRating: 0,
        artRating: 0,
        foodRating: 0,
        venueRating: 0,
        stageRating: 0,
        activitiesRating: 0,
        vibeRating: 0,
        idAPI: '',
    }

    updateInput = (e) => {
        this.setState({[e.target.id]: e.target.value })
    }



    createANewReview = (e) => {
        e.preventDefault();
        const overallRating = this.state.overallRating;
        const soundRating = this.state.soundRating;
        const artRating = this.state.artRating;
        const foodRating = this.state.foodRating;
        const venueRating = this.state.venueRating;
        const stageRating = this.state.stageRating;
        const activitiesRating = this.state.activitiesRating;
        const vibeRating = this.state.vibeRating;
        const idAPI = this.props.id

        
        console.log("*****************", this.props);
        
        Axios.post(`${process.env.REACT_APP_API_URL}/${this.props.oneFest.idAPI}/addReview`,
         {
             overallRating: overallRating,
             soundRating: soundRating,
             artRating: artRating,
             foodRating: foodRating,
             venueRating: venueRating,
             stageRating: stageRating,
             activitiesRating: activitiesRating,
             vibeRating: vibeRating,
             idAPI: idAPI,
        },
         {withCredentials: true}
         )
         .then((responseFromOurAPI)=>{
            console.log('success', responseFromOurAPI)
            this.setState({
                overallRating: 0,
                soundRating: 0,
                artRating: 0,
                foodRating: 0,
                venueRating: 0,
                stageRating: 0,
                activitiesRating: 0,
                vibeRating: 0,
                oneFestival: responseFromOurAPI
            })
            this.props.letTheSingleFestComponentKnowThatWeAddedAFestival();
           


         })
         .catch((err)=>{
            console.log('error creating review', err)
         })
    }

    // deleteReview = () =>{
    //     Axios.post(`${process.env.REACT_APP_API_URL}/${this.props.id}/delete`, {})
    //     .then(()=> {
    //         console.log('hmmmm')
    //         // if(!props.user){

    //         // }
    //     })
    //     .then(()=>{
            
    //         this.props.history.push('/');
    //     })
    //     .catch(()=>{

    //     })
    // }


    render(){
        return(
            <div>
                <h2>Add New Review:</h2>
                <form className="field formBG" onSubmit={this.createANewReview}>

                    <label className="label">Overall Rating:</label>
                    <input className="input" type="number" min="0" max ="10" id="overallRating" name="overallRating" onChange={this.updateInput} />

                    <label className="label">Sound Rating:</label>
                    <input className="input" type="number" min="0" max ="10" id="soundRating" name="soundRating" onChange={this.updateInput} />

                    <label className="label">Art Rating:</label>
                    <input className="input" type="number" min="0" max ="10" id="artRating" name="artRating" onChange={this.updateInput} />

                    <label className="label">Food Rating:</label>
                    <input className="input" type="number" min="0" max ="10" id="foodRating" name="foodRating" onChange={this.updateInput} />

                    <label className="label">Venue Rating:</label>
                    <input className="input" type="number" min="0" max ="10" id="venueRating" name="venueRating" onChange={this.updateInput} />

                    <label className="label">Stage Rating:</label>
                    <input className="input" type="number" min="0" max ="10" id="stageRating" name="stageRating" onChange={this.updateInput} />

                    <label className="label">Activities Rating:</label>
                    <input className="input" type="number" min="0" max ="10" id="activitiesRating" name="activitiesRating" onChange={this.updateInput} />

                    <label className="label">Vibe Rating:</label>
                    <input className="input" type="number" min="0" max ="10" id="vibeRating" name="vibeRating" onChange={this.updateInput} />

                    <input className="button is-info" type="submit" value="Add Review" />

                    <div>
                        <button className="delete">Delete This Review</button>
                    </div> 

                </form>
                
            </div>
        )
    }





}


export default AddNewReview;