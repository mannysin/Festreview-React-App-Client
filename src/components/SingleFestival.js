import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';
import Loader from 'react-loader-spinner'
import FestivalIndex from './FestivalIndex';


class SingleReview extends Component{
    state={
        oneFestival: {},
        loading: true,
    }

    componentWillMount(props){
        const theID = this.props.match.params.id;
        console.log ("here is a single festival ID: ------------->>>>>>>", theID)
        this.fetchFestival(theID)
    }

    fetchFestival = (id) =>{
        Axios.get(`${process.env.REACT_APP_API_URL}/festival/${id}`)
        .then((responseFromApi)=>{
            console.log(" <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< here is a single festival", responseFromApi.data.oneFestival)

            console.log("getting 1 fest.....", id)
            this.setState({oneFestival: responseFromApi.data.oneFestival, loading: false})
        })    
        .catch((err)=>{
        })
    }

    // handleSubmit = (e) => { 
    //     e.preventDefault()
    //     const festCopy = [...this.state.oneFestival]
    //     festCopy.push( 
    //         {oneFestival: this.state.value},
    //     )
    //     this.setState({
    //       oneFestival: festCopy, 
    //     })

    // }

    showOneFestival = () => {
       const oneFestival = this.state.oneFestival; 
        if(oneFestival.fromDB !== true){
            console.log(oneFestival)
        //     const allFestivals = this.state.allTheFestivals.filter((eachFestival)=>{
        //         return eachFestival.save()
        //     })

                return(
                    <div className="festIndex-container">
                         <h1>Details Page</h1>
                         {/* <img src ={oneFestival.images.image.medium.url} alt="Festival Image"/>                        */}
                            <h1>{oneFestival.title}'s details:</h1>
                            <h2>When: {oneFestival.start_time}</h2>
                            <h3>Where: {oneFestival.city}, {oneFestival.country}</h3>
                            <h3>Venue: {oneFestival.venue_name} <br/> {oneFestival.venue_address}</h3>
                            <h4>Festival price: {oneFestival.price}</h4>
                            <h6>Festival Details: {oneFestival.description}</h6>
                            <div>
                                <button className="button is-info">No reviews yet? Submit one now!</button>
                            </div>
                    </div>
                )
            
                } else if (oneFestival.fromDB) {
                    
                    return (
                        <div className="festIndex-container">
                         <h1>Details Page</h1>
                         {/* <img src ={oneFestival.images.image.medium.url} alt="Festival Image"/>                        */}
                            <h1>{oneFestival.title}'s details:</h1>
                            <h2>When: {oneFestival.start_time}</h2>
                            <h3>Where: {oneFestival.city}, {oneFestival.country}</h3>
                            <h3>Venue: {oneFestival.venue_name} <br/> {oneFestival.venue_address}</h3>
                            <h4>Festival price: {oneFestival.price}</h4>
                            <h6>Festival Details: {oneFestival.description}</h6>
                            <h5>Sound Rating: {oneFestival.soundRating}</h5>

                            
                        </div>
                    )
            
                }
    }       
    // }

    showLoader = () => {
        if(this.state.loading){
            return(
                <div>
                    <span>🎶Getting festival details...🎶</span>
                    <Loader 
                    type="Puff"
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
            <div>
                <div>
                {this.showLoader()}

                </div>
                {this.showOneFestival()}
                <br />
                <br />
                <br />
                <br />
            

            

        </div>
        )
    }




}



export default SingleReview;