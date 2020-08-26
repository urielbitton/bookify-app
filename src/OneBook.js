import React, {useContext, useState} from 'react'
import {BookContext} from './BookContext'

function OneBook(props) {
  
  const [books, setBooks] = useContext(BookContext)

  const addToCollection = () => {
    books.map((book) => {
      if (book.isbn === props.isbn) {
        book.collect = true;
      }
      return
    })
  }

  return (
    <div className="onebook">
      <div className="bookcont">
        <div className="left imgdiv">
          <img src={props.img} alt="book"/>
        </div> 
 
        <div className="left">
          <h3>{props.title}</h3>
          <h5>{props.author}</h5>
          <h6>ISBN: {props.isbn}</h6> 

          <small>In Stock: {(props.instock)? props.stock+ " left":"No"}</small>
          <br/>
          <a href={props.link} target="_blank" rel="noopener noreferrer"><button>Buy Now</button></a>
          <small onClick={addToCollection} className="addcollect"><i className="fas fa-bookmark bookmark"></i>Add To Collection</small>

          <p>{props.plot}</p>
          <br/>
          <img className="stores" src="https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-amazon-512.png" alt="amazon"/>
          <img className="stores" src="https://pbs.twimg.com/profile_images/902348681755615232/55f83W7T_400x400.jpg" alt="coles"/>

        </div>  

        <div className="clear"></div>
      </div>
    </div> 
  )
}

export default OneBook