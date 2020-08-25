import React, { useContext, useEffect, useState } from 'react'
import { BookContext } from './BookContext'
import OneBook from './OneBook'

function Books() {

  const [books, setBooks] = useContext(BookContext) 
  const [title, setTitle] = useState(books[0].title)
  const [author, setAuthor] = useState(books[0].author)
  const [img, setImg] = useState(books[0].img)
  const [isbn, setIsbn] = useState(books[0].isbn)
  const [instock, setInStock] = useState(books[0].inStock)
  const [stock, setStock] = useState(books[0].stock)
  const [link, setLink] = useState(books[0].link)
  const [plot, setPlot] = useState(books[0].plot)
  const bookshelf = document.querySelector('.bookshelf')


  function openBook(title, author, img, instock, isbn, stock, link, plot) {
    setTitle(title)
    setAuthor(author)
    setImg(img)
    setIsbn(isbn)
    setInStock(instock)
    setStock(stock) 
    setLink(link)
    setPlot(plot)
  }
   

  return ( 
    <>
      <div style={{height:'30px'}}></div>
      <div className="bookshelf">
        <ul>
        {
            books.map(book => {
              return <li onClick={() => openBook(book.title, book.author, book.img, book.inStock, book.isbn, book.stock, book.link, book.plot)} key={book.isbn}><img src={book.img} alt="img"/>{book.title} <span>{book.author}</span><i className="fas fa-bookmark"></i></li>
            })
          }
        </ul>
      </div>

      <OneBook title={title} author={author} img={img} isbn={isbn} instock={instock} stock={stock} link={link} plot={plot}/>  

    </> 
  )
}

export default Books