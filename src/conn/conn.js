import React, { Component } from 'react'
import {firebaseDatabase} from './firebaseConn'

class Conn extends Component{
    state = {
        data: []
    };

    UNSAFE_componentWillMount() {
        let query = firebaseDatabase.ref('post').limitToLast(10)
        query.on('value', dataSnapshot => {
            let items = []
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
        this.setState({data:items});
        });
    }

    render(){
        return(
        <div>
        {this.state.data.map(value=>{ return(
        <div key={value.key} >
            <p>
                {value.ptitulo}
            </p>
            <p>
            {value.key}
            </p>
        </div>
        )})}
        </div>)
    }

}

export default Conn