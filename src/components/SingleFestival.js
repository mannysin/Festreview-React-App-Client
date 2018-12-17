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
            this.setState({oneFestival: responseFromApi.data.events.event})
            console.log("here is a single festival", responseFromApi.data.events.event)
        })    
        .catch((err)=>{
        })
    }

    showOneFestival = () => {
        
        if(this.state.oneFestival){
        //     const allFestivals = this.state.allTheFestivals.filter((eachFestival)=>{
        //         return eachFestival.save()
        //     })

            return this.state.oneFestival.map((eachFestival)=>{
                // const festID = eachFestival.id 
                // console.log ("here is each fest ID to push------>>>",festID)
                // console.log ("here is each fest ID to push------>>>",eachFestival._id)
                return(
                    <div className="festIndex-container" key={eachFestival._id}>
                    <h1> Review Details Page</h1>
                    
                    {eachFestival.image ? <img src={eachFestival.image.medium.url} alt={`${eachFestival.title}`} /> : eachFestival.image = <img src="http://54.163.73.103/configfiles/No_Image.png" alt={`${eachFestival.title}`}/>}
                        <h3>{eachFestival.title}</h3>
                        <h3>When: {eachFestival.start_time}</h3>
                        <h3>Where: {eachFestival.city_name}, {eachFestival.region_name}</h3>
                        <h3>Venue: {eachFestival.venue_name} <br/> {eachFestival.venue_address}</h3>
                        <h6>Festival Details: {eachFestival.description}</h6>
                    </div>
            )
            
        })
    }       
    }






    render(){
     
        return(
            <div>
                {this.showOneFestival()}
                {/* {this.showReviewDetails()} */}
                <h1> YO YO YO YYO YO</h1>
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

                <label for="ratingInpute"></label>
                <input id="ratingInpute" name="averageRating" value={this.state.value} className="display"></input>

                <label for="startInpute"></label>
                <input id="startInpute" name="startDate" value={this.state.value}  className="display"></input>

                <label for="endInpute"></label>
                <input id="endInpute" name="endDate" value={this.state.value}  className="display"></input>

                <label for="statusInpute"></label>
                <input id="statusInpute" name="status" value={this.state.value}  className="display"></input>


                <div>
                <button type="submit" className="button">Submit a Review</button>
                </div>

                </form>

        </div>
        )
    }




}



export default SingleReview;