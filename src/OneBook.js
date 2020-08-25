import React from 'react'

function OneBook(props) {
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

          <small>In Stock: {(props.instock)? "Yes":"No"} ({props.stock+" left"})</small>
          <br/>
          <a href={props.link} target="_blank"><button>Buy Now</button></a>
          <small className="addcollect"><i class="fas fa-bookmark"></i>Add To Collection</small>

          <p>{props.plot}</p>

        </div> 

        <div className="clear"></div>
      </div>
    </div> 
  )
}

export default OneBook