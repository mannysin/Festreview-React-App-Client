import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import SingleFestival from './SingleFestival';


class FestivalIndex extends Component{
    state={
        allTheFestivals: [],
    }

    componentWillMount(props){
        let theURL = window.location.pathname.split('/')
        this.fetchFestivals(theURL[theURL.length-1])
    }


    fetchFestivals = (pageNumber) =>{
        Axios.get(`http://localhost:4000/api/festivals/${pageNumber}`)
        .then((responseFromApi)=>{
                this.setState({allTheFestivals: responseFromApi.data.events.event})
                console.log("yoyoyoyoyo here i am ", this.state)
        })    
        .catch((err)=>{
        })
    }

    showAllFestivals = () => {
        
        if(this.state.allTheFestivals){
            console.log("yomofo", this.state)
        //     const allFestivals = this.state.allTheFestivals.filter((eachProject)=>{
        //         return eachProject.save()
        //     })

            return this.state.allTheFestivals.map((eachFestival)=>{
                console.log("yomofo3", eachFestival)
                return(
                    <div className="festIndex-container" key={eachFestival._id}>
                    <Switch>
                    <Link to="/festivals/:id">
                    <img src={eachFestival.image.medium.url} alt={`${eachFestival.title}`} /></Link>
                    <Route path="/festival/:id" component = {SingleFestival}/>
                    </Switch>
                    <h3>{eachFestival.title}</h3>
                    <h3>When: {eachFestival.start_time}</h3>
                    <h3>Where: {eachFestival.city_name}, {eachFestival.region_name}</h3>
                    <h3>Venue: {eachFestival.venue_name} <br/> {eachFestival.venue_address}</h3>
                    <h6>{eachFestival.description}</h6>
                    <button onClick={this.deleteReview} className="delete">See Details!</button>
                    
                    
                    {/* <Link to="/festivals/:id">See Details</Link> */}
                    

                    


                </div>
            )
            
        })
    }       
    }


 


    render(){
        return(
            <div>
            <h1>Find your next Adventure below!</h1>

            <div className="list-of-Festivals-container">
            {this.showAllFestivals()}
            <h2>WHAT</h2>
            </div>


            </div>
        )
    }

}


export default FestivalIndex;