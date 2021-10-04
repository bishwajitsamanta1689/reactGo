import React, { Component } from "react";

class Greet extends Component {
    render() {
        return <h1> {this.props.name} a.k.a {this.props.Relationship} </h1>
    }
}
export default Greet;
