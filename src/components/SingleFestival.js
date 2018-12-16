import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';


class SingleReview extends Component{
    state={
        oneFestival: [],
        
    }



    componentWillMount(props){

        this.fetchFestival()
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
                console.log("yoyoyoyoyo here i am ", this.state)
        })    
        .catch((err)=>{
        })
    }






    render(){
     
        return(
            <div>
                <h1> Review Details Page</h1>
                {/* {this.showReviewDetails()} */}
                <h1> YO YO YO YYO YO</h1>
                <br />
                <br />
                <br />
                <br />
            <div>
                <button onClick={this.deleteReview} className="delete">See Details!</button>
            </div>

            <form action="/festival/addFestival" method="POST">
                <label for="titleInput"></label>
                <input id="titleInput" name="title" value={this.state.value} class="display"></input>

                <label for="imageInput"></label>
                <input id="imageInput" name="image" value={this.state.value}  class="display"></input>

                <label for="descriptionInput"></label>
                <input id="descriptionInput" name="description" value={this.state.value}  class="display"></input>

                <label for="ageInput"></label>
                <input id="ageInput" name="ageRating" value={this.state.value}  class="display"></input>

                <label for="episodeInput"></label>
                <input id="episodeInput" name="episodeCount" value={this.state.value}  class="display"></input>

                <label for="ratingInpute"></label>
                <input id="ratingInpute" name="averageRating" value={this.state.value} class="display"></input>

                <label for="startInpute"></label>
                <input id="startInpute" name="startDate" value={this.state.value}  class="display"></input>

                <label for="endInpute"></label>
                <input id="endInpute" name="endDate" value={this.state.value}  class="display"></input>

                <label for="statusInpute"></label>
                <input id="statusInpute" name="status" value={this.state.value}  class="display"></input>


                <div>
                <button type="submit" class="btn btn-primary">Submit a Review</button>
                </div>

                </form>

        </div>
        )
    }




}



export default SingleReview;