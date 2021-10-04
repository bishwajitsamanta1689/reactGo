import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Message from "./components/Message";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import {render} from "@testing-library/react";

class App extends Component {
  render(){
    return(
        <div className="App">
            <Message/>
            {/*<Greet name="Bishwajit" Relationship = "Husband"> </Greet>*/}
            {/*<Greet name="Payel" Relationship = "Wife"> </Greet>*/}
            {/*<Greet name="Shinjaann" Relationship = "Son"> </Greet>*/}
            {/*<Welcome name = "Bishwajit" Relationship="Husband">*/}
            {/*<p>*/}
            {/*    This is a Man!*/}
            {/*</p>*/}
            {/*</Welcome>*/}
            {/*<Welcome name = "Payel" Relationship="wife">*/}
            {/*    <button>*/}
            {/*        Wifey*/}
            {/*    </button>*/}
            {/*</Welcome>*/}
            {/*<Welcome name = "Shinjaann" Relationship="Son">*/}
            {/*    <button> Child </button>*/}
            {/*</Welcome>*/}
        </div>
    );
  }
}

export default App;
