import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';
import Loader from 'react-loader-spinner'


class SingleReview extends Component{
    state={
        oneFestival: [],
        loading: true,
    }



    componentWillMount(props){
        const theID = this.props.match.params.id;
        console.log ("here is a single festival ID: ------------->>>>>>>", theID)
        this.fetchFestival(theID)
    }

    fetchFestival = (id) =>{
        Axios.get(`http://localhost:4000/api/festival/${id}`)
        .then((responseFromApi)=>{
            console.log(" <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< here is a single festival", responseFromApi.data.oneFestival)

            console.log("getting 1 fest.....", id)
            this.setState({oneFestival: responseFromApi.data.oneFestival, loading: false})
        })    
        .catch((err)=>{
        })
    }

    handleSubmit = (e) => { 
        e.preventDefault()
        const festCopy = [...this.state.oneFestival]
        festCopy.push( 
            {oneFestival: this.state.value},
        )
        this.setState({
          oneFestival: festCopy, 
        })

    }

    showOneFestival = () => {
       const oneFestival = this.state.oneFestival; 
        if(oneFestival){
            console.log(oneFestival)
        //     const allFestivals = this.state.allTheFestivals.filter((eachFestival)=>{
        //         return eachFestival.save()
        //     })

                return(
                    <div className="festIndex-container">
                         <h1>Details Page</h1>
                         {/* <img src ={oneFestival.images.image.medium.url}/>                        */}
                            <h1>{oneFestival.title}'s details:</h1>
                            <h2>When: {oneFestival.start_time}</h2>
                            <h3>Where: {oneFestival.city}, {oneFestival.country}</h3>
                            <h3>Venue: {oneFestival.venue_name} <br/> {oneFestival.venue_address}</h3>
                            <h6>Festival Details: {oneFestival.description}</h6>

                            <form action="/fest/addFestival" method="POST">
                            <label for="titleInput"></label>
                            <input id="titleInput" name="title" value={oneFestival.title} className="display"></input>

                            {/* <label for="imageInput"></label>
                            <input id="imageInput" name="image" value={this.state.value}  className="display"></input> */}

                            <label for="startTime"></label>
                            <input id="startTime" name="start" value={oneFestival.start_time}  className="display"></input>

                            <label for="descriptionInput"></label>
                            <input id="descriptionInput" name="description" value={oneFestival.description}  className="display"></input>

                            <label for="locationInput"></label>
                            <input id="locationInput" name="city" value={oneFestival.city}  className="display"></input>
                            
                            <label for="locationInput"></label>
                            <input id="locationInput" name="country" value={oneFestival.country}  className="display"></input>

                            <label for="venueInput"></label>
                            <input id="venueInput" name="venueName" value={oneFestival.venue_name}  className="display"></input>

                            <label for="venueInput"></label>
                            <input id="venueInput" name="venueAddress" value={oneFestival.venue_address}  className="display"></input>

                            <div>
                            <button type="submit" className="button">Submit a Review</button>
                            </div>

                            </form>
                </div>
            )
            
        } else return
    }       
    // }


    // hiddenForm = () => {
    //     return (
    //     <form action="/fest/addFestival" method="POST">
    //             <label for="titleInput"></label>
    //             <input id="titleInput" name="title" value={oneFestival.value} className="display"></input>

                /* <label for="imageInput"></label>
                <input id="imageInput" name="image" value={this.state.value}  className="display"></input> */

    //             <label for="descriptionInput"></label>
    //             <input id="descriptionInput" name="description" value={this.state.value}  className="display"></input>

    //             <label for="locationInput"></label>
    //             <input id="locationInput" name="location" value={this.state.value}  className="display"></input>

    //             <label for="venueInput"></label>
    //             <input id="venueInput" name="venue" value={this.state.value}  className="display"></input>

    //             <div>
    //             <button type="submit" className="button">Submit a Review</button>
    //             </div>

    //             </form>
    //     )
    // }

    showLoader = () => {
        if(this.state.loading){
            return(
                <div>
                    <span>🎶Getting all the festivals...🎶</span>
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
                {this.showLoader()}
                {this.showOneFestival()}
                <br />
                <br />
                <br />
                <br />
            <div>
                <button className="delete">See Details!</button>
            </div>
            {/* {this.hiddenForm()} */}

            

        </div>
        )
    }




}



export default SingleReview;