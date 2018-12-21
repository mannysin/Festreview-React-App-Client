import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';
import Loader from 'react-loader-spinner'
import FestivalIndex from './FestivalIndex';
import AddNewReview from './AddNewReview'
import {Link} from 'react-router-dom'


class AboutUs extends Component{
    



    render(){
        console.log("%%%%%%%%%%%%%%%%%%%%%%%", this.state);
        
        return(
            <div className="list-of-festivals-container">
            <div className="festIndex-container tile is-ancestor">
                <article class="tile is-child notification has-background-warning			">
                    <p class="title">About Us:</p>
                    <br/>
                    <p class="subtitle">FestReview tries it's hardest to provide you with honest and quick information.</p>
                    <div class="content">
                        <h3>LinkedIn: <a href="https://www.linkedin.com/in/emmanuelsinclair/">Let's connect! </a></h3>
                        <h3>Github: <a href="https://github.com/mannysin">Let's Code! </a></h3>
                    </div>
                </article>
            </div>
            </div>
        )
    }




}



export default AboutUs;