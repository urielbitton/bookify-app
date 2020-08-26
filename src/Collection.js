import React, {useContext, useState} from 'react'
import { BookContext } from './BookContext'

function Collection() {
  
  const [books, setBooks] = useContext(BookContext) 
  

  return (
    <div className="container">
      <h1>My Collection</h1>

      <div className="bookshelf">
        <ul>
          {
            books.map(book => {
              return (book.collect? <li><img src={book.img} alt="img"/>{book.title} <span>{book.author}</span></li> : "")
            })
          }
        </ul>
      </div>

    </div>
  )
}

export default Collection