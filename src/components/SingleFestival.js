import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';
import Loader from 'react-loader-spinner'
import FestivalIndex from './FestivalIndex';
import AddNewReview from './AddNewReview'


class SingleReview extends Component{
    state={
        oneFestival: {fromDB:false},
        loading: true,
        paramsID: '',
        allReviews: [],
    }

    componentDidMount(props){
        const theID = this.props.match.params.id;
        // const reviewID = this.props.match.params.id;
        // console.log ("here is a single festival ID: ------------->>>>>>>", theID)
        // console.log ("here is a single review ID: ------------->>>>>>>", reviewID)

        //this.setState({paramsID: theID})
        this.fetchFestival(theID)
        this.fetchReviews(theID)
    }

    fetchFestival = (id) =>{
        const theID = this.props.match.params.id;

        Axios.get(`${process.env.REACT_APP_API_URL}/festival/${id}`)
        .then((responseFromApi)=>{
            // console.log(" <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< here is a single festival", responseFromApi.data.oneFestival)

            // console.log("getting 1 fest.....", id)
            console.log(responseFromApi.data)
            this.setState({
                oneFestival: responseFromApi.data.oneFestival, 
                loading: false,
                paramsID: theID
            }, ()=>{
                // console.log(" the state now  <<<<<<<<<<<<<<<<<<<<<<<<<< >>>>>>>>>>>>>>>>>>>>>>>>>>", this.state)

            })
        })    
        .catch((err)=>{
        })
    }

    fetchReviews = (id) =>{
        console.log('fetching review', id)

        Axios.get(`${process.env.REACT_APP_API_URL}/reviews/${id}`)
        .then((responseFromApi)=>{
            console.log('hmmmmmmmmmmmm', responseFromApi)
            this.setState({allReviews: responseFromApi.data.reverse()}) 
        })
        .catch((err)=>{
        })
    }

    reloadPage = () =>{
        Axios.get(`${process.env.REACT_APP_API_URL}/festival/`+this.props.match.params.id)
        .then((id)=>{
            // console.log('huhuh', id)
            this.props.history.push(`/festival/`+this.props.match.params.id);
            
        })
        .catch(()=>{

        })
    }

    showOneReview = () => {
        if(this.state.oneFestival.fromDB){
       
            this.state.oneFestival.reviews.forEach((eachReview, i)=> {
            console.log('holy moly ', eachReview, i);
            });
        return (
            <div>
                Sound Rating: {this.state.eachReview}
                {/* Sound Rating: {eachReview} */}
            </div>
         )
        
            //  console.log('holy moly2', eachReview)
            //  return (
            //     <div>
            //         Sound Rating: {this.state.allTheReviews}
            //         Sound Rating: {allTheReviews}
            //     </div>
            //  )
         }
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
        let oneFestival = this.state.oneFestival; 
        if(oneFestival.fromDB !== true){
        //     const allFestivals = this.state.allTheFestivals.filter((eachFestival)=>{
        //         return eachFestival.save()
        //     })

                return(
                    <div className="festIndex-container tile is-ancestor">
                        <article class="tile is-child notification has-background-grey-lighter		">
                            <p class="title">{oneFestival.title}'s details:</p>
                            <p class="subtitle">When: {oneFestival.start_time}</p>
                            <div class="content">
                                <h3>Where: {oneFestival.city}, {oneFestival.country}</h3>
                                <h3>Venue: {oneFestival.venue_name} <br/> {oneFestival.venue_address}</h3>
                                <h4>Festival price: {oneFestival.price}</h4>
                                <h6>Festival Details: {oneFestival.description}</h6>
                            </div>
                            <div>
                                <button onClick = {this.reloadPage} className="button is-info">No reviews yet? Submit one now!</button>
                            </div>
                        </article>
                    </div>
                )
            
                } else if (oneFestival.fromDB) {
                    
                    // const allReviews = this.state.oneFestival.reviews.forEach((eachReview, i)=> {
                    //     console.log('holy moly ', eachReview, i);
                    //     return eachReview[i]
                    //  });
 

                    return (
                        <div className="festIndex-container tile is-ancestor">
                            <article class="tile is-child notification has-background-grey-lighter		">
                                <p class="title">{oneFestival.title}'s details:</p>
                                <p class="subtitle">When: {oneFestival.start_time}</p>
                                <div class="content">
                                    <h3>Where: {oneFestival.city}, {oneFestival.country}</h3>
                                    <h3>Venue: {oneFestival.venue_name} <br/> {oneFestival.venue_address}</h3>
                                    <h4>Festival price: {oneFestival.price}</h4>
                                    <h6>Festival Details: {oneFestival.description}</h6>
                                    <h4>{this.showOneReview()}</h4>
                                    <h5>Sound Rating: </h5>
                                </div>
                                <div className="add-new-review-container">
                                    <AddNewReview id={this.state.oneFestival.idAPI} oneFest={this.state.oneFestival} letTheSingleFestComponentKnowThatWeAddedAFestival = {() => this.fetchFestival(this.state.paramsID)} />
                                </div>
                            </article>
                        </div>
                    )
            
                }
    }       
    // }

    showLoader = () => {
        if(this.state.loading && !this.state.oneFestival.fromDB){
            return(
                <div className = "loadingText">
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
        console.log("%%%%%%%%%%%%%%%%%%%%%%%", this.state);
        
        return(
            <div className="list-of-festivals-container">
                <div>
                    {this.showLoader()}
                </div>

                <div>
                {this.showOneFestival()}
                {/* <div className="add-new-review-container">
                 <AddNewReview id={this.state.oneFestival.idAPI} letTheSingleFestComponentKnowThatWeAddedAProject = {() => this.fetchFestival(this.state.paramsID)} />
                </div> */}
                </div>


            </div>

        )
    }




}



export default SingleReview;