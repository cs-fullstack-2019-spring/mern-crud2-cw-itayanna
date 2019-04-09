import React, { Component } from 'react';
import RSVPList from './RSVPList';
import RSVPCreate from './RSVPCreate';

class RSVP extends Component{
    constructor(props) {
        super(props);
        this.state={
            collection:[],
        };
        this.updateDatabaseData();
    }

    updateDatabaseData=()=>{
        fetch('/rsvp')
            .then(data=>data.json())
            .then(jsonData=>this.setState({collection:jsonData}));
    };

    render(){
        return(
            <div>
                <Router>
                    <Link className="linkInGeneral" to="/rsvp">Home</Link>
                    <Link className="linkInGeneral" to="/rsvp/create">Create New RSVP</Link>

                    <Route path="/rsvp" exact
                           component={()=><RSVPList collection={this.state.collection} updateDatabaseData={this.updateDatabaseData}/>
                           }/>
                    <Route path="/create"
                           component={()=><RSVPCreate updateDatabaseData={this.updateDatabaseData}/>
                           }/>
                </Router>
            </div>
        );
    }
}

export default RSVP;