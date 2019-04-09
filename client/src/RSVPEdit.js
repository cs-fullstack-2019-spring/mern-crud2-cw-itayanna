import React, { Component } from 'react';

class RSVPEdit extends Component{
    submitEditForm = (e) =>{
        e.preventDefault();
        fetch('/rsvp/edit/:id', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                rsvp_person: e.target.rsvp_person.value,
                rsvp_going: e.target.rsvp_going.value,
            }),
        })
            .then(()=>this.props.updateDatabaseData())
    };

    render(){
        return(
            <div>
                <h1>Edit RSVP</h1>
                <form onSubmit={this.submitEditForm}>
                    <p>
                        <label htmlFor="rsvp_person">Name:</label>
                        <input hidden type="text" id="rsvp_person" name="rsvp_person" defaultValue={this.props.editDataToSend.rsvp_person} />
                    </p>

                    <p>
                        <label htmlFor="rsvp_going">Will you be in attendance?:</label>
                        <input type="text" id="rsvp_going" name="rsvp_going" defaultValue={this.props.editDataToSend.rsvp_going}/>
                    </p>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default RSVPEdit;