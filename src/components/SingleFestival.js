import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';


class SingleReview extends Component{
    state={
        oneFestival: [],
        
    }



    componentWillMount(props){
        const theID = this.props.match.params.id;
        console.log ("here is a single festival ID: ------------->>>>>>>", theID)
        this.fetchFestival(theID)
        // console.log('huhuhuhuh')
        // const theID = this.props.match.params.id;
        // Axios.get('http://localhost:4000/api/festival/${id}')
        // .then((theThingIGetBackFromApi)=>{

        //     console.log('------___---__-_-_--_-_-__-_-_-_-_-___-_-----',theThingIGetBackFromApi)

        //     this.setState({theActualReview: theThingIGetBackFromApi.data,
        //         titleInput: theThingIGetBackFromApi.data.title,
        //         descInput: theThingIGetBackFromApi.data.description
        //     })

        // }).catch(()=>{

        // })
    }

    fetchFestival = (id) =>{
        Axios.get(`http://localhost:4000/api/festival/${id}`)
        .then((responseFromApi)=>{
            console.log(" <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< here is a single festival", responseFromApi.data.oneFestival)

            console.log("getting 1 fest.....", id)
            this.setState({oneFestival: responseFromApi.data.oneFestival})
        })    
        .catch((err)=>{
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
                         <h1>  Details Page</h1>
                         {/* <img src ={oneFestival.images.image.medium.url}/>                        */}
                            <h1>{oneFestival.title}'s details:</h1>
                            <h2>When: {oneFestival.start_time}</h2>
                            <h3>Where: {oneFestival.city}, {oneFestival.country}</h3>
                            <h3>Venue: {oneFestival.venue_name} <br/> {oneFestival.venue_address}</h3>
                            <h6>Festival Details: {oneFestival.description}</h6>
                </div>
            )
            
        }
    }       
    // }






    render(){
     
        return(
            <div>
                {this.showOneFestival()}
                <br />
                <br />
                <br />
                <br />
            <div>
                <button className="delete">See Details!</button>
            </div>

            <form action="/festival/addFestival" method="POST">
                <label for="titleInput"></label>
                <input id="titleInput" name="title" value={this.state.value} className="display"></input>

                <label for="imageInput"></label>
                <input id="imageInput" name="image" value={this.state.value}  className="display"></input>

                <label for="descriptionInput"></label>
                <input id="descriptionInput" name="description" value={this.state.value}  className="display"></input>

                <label for="locationInput"></label>
                <input id="locationInput" name="location" value={this.state.value}  className="display"></input>

                <label for="venueInput"></label>
                <input id="venueInput" name="venue" value={this.state.value}  className="display"></input>

                <div>
                <button type="submit" className="button">Submit a Review</button>
                </div>

                </form>

        </div>
        )
    }




}



export default SingleReview;