import React from 'react';
import {BrowserRouter, Route, Link } from "react-router-dom";
import Rooms from "./rooms";

export default function App() {
  return (
      <BrowserRouter>
        <div style={{}}>
          <Link to="/">home</Link>
          <br/>
          <Link to="/photo">photo</Link>
          <br/>
          <Link to="/rooms">room</Link>
          <br/>
          <Route exact path="/" component={Home}/>
          <Route path="/photo" component={Photo}/>
          <Route path="/rooms" component={Rooms}/>
        </div>
      </BrowserRouter>
  )
}
function Home(){
  return <h2>This is /Home/</h2>
}
function Photo(){
  return <h2>This is /Photo/</h2>
}

