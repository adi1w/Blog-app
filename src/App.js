import React from "react";
import "./App.css";

import RouteComponent from "./Components/Route";
import { BrowserRouter } from "react-router-dom";




function App() {
  return (

    <>
       <span className="head">The </span> 
        <span className='top'>Siren</span>
      
    <BrowserRouter>
          <RouteComponent/>
          </BrowserRouter> 
     
    </>
  );
}

export default App;