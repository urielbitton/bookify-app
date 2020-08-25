import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Collection">Collection</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>
    </div>
  )
}

export default Menu