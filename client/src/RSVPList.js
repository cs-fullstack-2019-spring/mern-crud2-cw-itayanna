import React, { Component } from 'react';
import RSVPEdit from "./RSVPEdit";

class RSVPList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            editDataToSend: {},
        }
    }

    editRSVP=(e)=>{
        this.setState({edit:true});
        fetch('/rsvp/edit/'+e.target.id)
            .then(data=>data.json())
            .then(response => this.setState({editDataToSend: response}));
    };

    deleteRSVP=(e)=>{
        console.log(e.target);
        fetch('/delete', {
            method: 'DELETE',
            headers: {
                'Accept': "application/json",
                'Content-type': 'application/json',
            },
            body: JSON.stringify({productID:e.target.name}),
        })
            .then(()=>this.props.updateDatabaseData());
    };

    render(){
        let collectionMap = this.props.collection.map(
            (eachRSVP)=>{
                return (<div key={eachRSVP.id}>
                    <p>Name: {eachRSVP.rsvp_person}
                        Attending?:${eachRSVP.rsvp_going}.
                        <button className="buttonLink" name={eachProduct.rsvp_person} onClick={this.editRSVP}>Edit</button>
                        <button className="buttonLink" name={eachProduct.rsvp_person} onClick={this.deleteRSVP}>Delete</button>
                    </p>
                </div>)
            }
        );

    }
}

export default RSVPListList;