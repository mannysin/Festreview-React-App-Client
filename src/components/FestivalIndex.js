import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Loader from 'react-loader-spinner'

import SingleFestival from './SingleFestival';


class FestivalIndex extends Component{
    state={
        allTheFestivals: [],
        loading: true,
    }

    componentWillMount(props){
        let theURL = window.location.pathname.split('/')
        this.fetchFestivals(theURL[theURL.length-1])
    }


    fetchFestivals = (pageNumber) =>{
        Axios.get(`${process.env.REACT_APP_API_URL}/festivals/${pageNumber}`)
        .then((responseFromApi)=>{
                this.setState({allTheFestivals: responseFromApi.data.events.event, loading: false})
                console.log("yoyoyoyoyo here i am ", this.state)
        })    
        .catch((err)=>{
        })
    }

    showAllFestivals = () => {
        
        if(this.state.allTheFestivals){
        //     const allFestivals = this.state.allTheFestivals.filter((eachFestival)=>{
        //         return eachFestival.save()
        //     })

            return this.state.allTheFestivals.map((eachFestival)=>{
                // const festID = eachFestival.id 
                // console.log ("here is each fest ID to push------>>>",festID)
                // console.log ("here is each fest ID to push------>>>",eachFestival._id)
                return(
                    <div className="media" key={eachFestival._id}>
                   
                   <figure className="media-left">
                            <p className="image is-64x64">
                    <Link to={`/festival/${eachFestival.id}`}>
                    
                    {eachFestival.image ? <img src={eachFestival.image.medium.url} alt={`${eachFestival.title}`} /> : eachFestival.image = <img src="http://54.163.73.103/configfiles/No_Image.png" alt={`${eachFestival.title}`}/>}
                    </Link>
                            </p>
                        </figure>
                        <div className="media-content">
                            <div className="content">
                            <p>
                            <Link to={`/festival/${eachFestival.id}`}>
                                <strong>{eachFestival.title}</strong>
                                </Link> <small>Where: {eachFestival.city_name}, {eachFestival.region_name}, {eachFestival.country_abbr} </small> 
                                <small>When: {eachFestival.start_time}</small>
                                <br/>
                                Description: {eachFestival.description}
                            </p>
                            </div>
                            <nav className="level is-mobile">
                            <div className="level-left">
                                <a className="level-item">
                                <Link to={`/festival/${eachFestival.id}`}>
                                <span>See Details</span>
                                
                                </Link>
                                </a>
                            </div>
                            </nav>
                        </div>

                    </div>
            )
            
        })
    }       
    }

    showLoader = () => {
        if(this.state.loading){
            return(
                <div className = "loadingText">
                    <h2>🎶Getting all the festivals...🎶</h2>
                    <Loader 
                    type="Audio"
                    color="#ffe680"
                    height="85vh"	
                    width="85vw"/> 
                </div>
            )
            } else {
                return
            }
    }

    render(){
        return(
            <div className="list-of-festivals-container">
                <div>
                {this.showLoader()}
                </div>

            <div>
            {this.showAllFestivals()}
            </div>


            </div>
        )
    }

}


export default FestivalIndex;