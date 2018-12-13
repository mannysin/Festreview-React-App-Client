import React, {Component} from 'react';
import "../App.css";
import Axios from 'axios';


class SingleReview extends Component{
    state={
        titleInput: '',
        descInput: '',
        editing: false
        
    }



    componentWillMount(){
        const theID = this.props.match.params.id;
        Axios.get('http://localhost:5000/api/festival/details/'+theID)
        .then((theThingIGetBackFromApi)=>{

            console.log('------___---__-_-_--_-_-__-_-_-_-_-___-_-----',theThingIGetBackFromApi)

            this.setState({theActualReview: theThingIGetBackFromApi.data,
                titleInput: theThingIGetBackFromApi.data.title,
                descInput: theThingIGetBackFromApi.data.description
            })

        }).catch(()=>{

        })
    }

    updateInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    editReview = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/api/tasks/edit/'+this.state.theActualReview._id, 
        {theTitle: this.state.titleInput, theDescription: this.state.descInput})
        .then(()=>{
            this.setState({editing: false});
            // after we submit the form and the Axios request is complete, we set this.state.editing
            // back to false so that the form dissappears and looks all fancy
        })
        .catch(()=>{

        })
    }


    toggleForm = () =>{
        this.setState({editing: true})

    }


    showReviewDetails = () =>{
       if(this.state.theActualReview){



            if(this.state.editing){
                // if this.state.editing is set to true, we will show a form

                return(
                    <form onSubmit={this.editReview}>
                    <input className="input" value={this.state.titleInput} onChange={this.updateInput} id="titleInput"/>
                    <input className="input" value={this.state.descInput} onChange={this.updateInput} id="descInput"/>
                    <button>submit changes</button>
                </form>
            )

        }  else{
            // by default this.state.editing is set to false so when we first load the page we will
            // see this below, which is just the info but not form

            return(
                <div>
                    <span>
                    {this.state.titleInput}
                    </span>

                    <span>
                        {this.state.descInput}
                    </span>
                    {/* we put this little image of a pen here, and add an on click function */}
                    {/* the on click function changes this.state.editing to true */}
                    {/*  therefore, when we change this.state.editing to true, we show a form instead of just the info */}
                    <img onClick={this.toggleForm} className="pen-pic" src="https://us.123rf.com/450wm/jemastock/jemastock1707/jemastock170717063/82921914-stock-vector-school-pen-write-supply-accessory-icon-vector-illustration.jpg?ver=6"/>
                </div>
            )
        }
        }
    }


    deleteReview = () =>{
        Axios.post('http://localhost:5000/api/tasks/delete/'+this.state.theActualReview._id, {})
        .then(()=>{
            
            this.props.history.push('/review-index');
            // this is how your redirect in react
        })
        .catch(()=>{

        })
    }







    render(){
        console.log(this.props)
        console.log(this.state)
        return(
            <div>
                <h1> Review Details Page</h1>
                {this.showReviewDetails()}

                <br />
                <br />
                <br />
                <br />
            <div>
                <button onClick={this.deleteReview} className="delete">Delete This Review</button>
            </div>

                </div>
        )
    }




}



export default SingleReview;