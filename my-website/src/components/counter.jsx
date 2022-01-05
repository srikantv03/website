import React, { Component } from 'react';
import Button from '@mui/material/Button';

class Counter extends React.Component {
    state = {
        count: 12,
        name: {
            first: 'Srikant',
            last: 'Vasudevan'
        },
        imageUrl: "https://picsum.photos/200"
    };

    styles = {
        fontSize: 50,
        fontWeight: "bold"
    }

    render() { 
        return (
        <React.Fragment>
            <img src={this.state.imageUrl}/>
            <h1 className="">{this.formatCount()}</h1>
            <p style={this.styles}> {this.state.name.first}, {this.state.name.last}</p>
            <Button variant="contained">HELLO WORLD</Button>
        </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "None" : count; 
    }
}
 
export default Counter;