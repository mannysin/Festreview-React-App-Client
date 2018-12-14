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

                </div>
        )
    }




}



export default SingleReview;