import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';
import {Link, NavLink} from 'react-router-dom'

class Homepage extends Component{



    render(){
        return(
                <div>
                    <div id="home" className="bg">
                        <div>
                            <div className="logoBG">
                             <img src="/festreview-logo.png" alt="festReview Logo"></img>

                            </div>
                            <br/>
                        <span>Real Reviews, from Real Festival Goers!</span>
                        <span>Plan your next adventure or relive a wonderful experience.</span>
                        </div>
                    </div>
                    <div id="festivals" className="bg">
                        <div>
                        <h1>Find Yourself</h1>
                        <span>Music is what moves us. No matter your taste, FestReview.com will have the music fest for you!</span>
                        <br/>
                        <br/>
                        <br/>
                        <Link className = "button is-info" to={`/festivals/1`}> See all the Festivals</Link>
                        </div>
                    </div>
                    <div id="reviews" className="bg">
                        <div>
                        <span>Music festivals help bring people together, share commonalities, and spread love.</span>
                        <h1>Review some of the best moments of your life.</h1>
                        <br/>
                        <span>Nothing is perfect, and there is always room to improve.<br/> Review the festivals you've attended to help improve the overall experience of other Fest Goers!</span>
                        <br/>
                        <Link className = "button is-info" to={`/login`}> Login</Link>
                        </div>
                    </div>
                    <div id="aboutUs" className="bg">
                        <div>
                        <h1>About us</h1>
                        <span>We strive to bring you genuine, honest reviews regarding Music Festivals.</span>
                        <br/>
                        <span>Every festival should feel magical and secure.</span>
                        <br/>
                        <NavLink className = "button is-info" to={`/aboutus`}> About Us</NavLink>
                        </div>
                    </div>
                    <div className="newsletter">
                        <p>Sign up for our newsletter and stay on top of the latest festival information!</p>
                        <div>
                        Email:
                        <input placeholder="your.email@example.com"/>
                        <button>Submit</button>
                        </div>
                    </div>
                </div>
            
        )
    }

}



export default Homepage;