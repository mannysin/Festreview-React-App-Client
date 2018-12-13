import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';
import {Link} from 'react-router-dom';

// import AddNewProject from './AddNewProject';


class FestivalIndex extends Component{
    state={
        allTheFestivals: [],

    }

    componentDidMount(){
        let theURL = window.location.pathname.split('/')
        this.fetchFestivals(theURL[theURL.length-1])
    }


    fetchFestivals = (pageNumber) =>{
        Axios.get(`http://localhost:4000/api/festivals/${pageNumber}`)
        .then((responseFromApi)=>{
            let allTheFestivals = responseFromApi.data.events.event.map((fest)=> {
                console.log('map++++', fest)
                this.render(
                    <div key={fest._id}>
                    <h3>yoyo</h3>
                    <h3>{fest.title}</h3>
                    <h6>{fest.description}</h6>
                    <Link to={'/festival/'+ fest._id} >See Details</Link></div>
                )
            })
            this.setState({allTheFestivals: allTheFestivals});
        })    
        .catch((err)=>{
        })
    }

    // showAllFestivals = () => {
    //     let theURL = window.location.pathname.split('/')
    //     this.fetchFestivals(theURL[theURL.length-1])
    //     let allFestivals = this.componentDidMount(){
    //         return ( allFestivals.map((eachFestival)=>{
    //             return(
    //                 <div key={eachFestival._id}>
    //                 <h3>{eachFestival.title}</h3>
    //                 <h6>{eachFestival.description}</h6>
    //                 <Link to={'/festival/'+ eachFestival._id} >See Details</Link>
    //             </div>
    //             )
    //         )
    //     })

    //     }
            
            
    // }

    // showAllTheFestivals = () =>{
    //     this.setState(function(prevState, props){
           
    //         return this.state.allTheFestivals.map((eachFestival, i)=>{
    //             return (
    //                 <div key={eachFestival._id}>
    //     <h3>{eachFestival.title}</h3>
    //     <h6>{eachFestival.description}</h6>
    //     <Link to={'/festival/'+ eachFestival._id} >See Details</Link>
    //         </div>
    //       )
    //     })
    // });
    //   }



    render(){
        {this.fetchFestivals()}
      
        return(
            <div>
            <h1>Festival Index</h1>

            <div className="list-of-Festivals-container">
            {/* {this.componentWillMount()} */}
            </div>


            </div>
        )
    }



}


export default FestivalIndex;