import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import AddBook from './AddBook'
import Menu from './Menu'

function Navbar() {
  return (
    <nav>
      
      <AddBook />
      <div className="right">
        <Link to="/"><h1><i className="fas fa-book"></i>Bookify</h1></Link>
        <div className="clear"></div>
        <Menu />
      </div>
      <div className="clear"></div>
    </nav>
  )
}

export default Navbar