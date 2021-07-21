
import React from "react";
import "./App.css";
import Room from "./Room";
import Start from "./Start";


import { Router } from "@reach/router";
function App() {
    return (
      
      <div className="App-Wrapper">
        <Router>
          <Start path="/" default />
          <Room path="/room/:roomName" />
        </Router>
      </div>
    
      
    );
  };

export default App;