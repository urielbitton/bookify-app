import React, {useContext, useState} from 'react'
import { BookContext } from './BookContext'
import OneBook from './OneBook'

function Collection() {
   
  const [books, setBooks] = useContext(BookContext) 
  const [title, setTitle] = useState("Title")
  const [author, setAuthor] = useState("Author")
  const [img, setImg] = useState("https://sbifullybucket.s3-ap-southeast-1.amazonaws.com/catalog/product/placeholder/default/book-placeholder.png")
  const [isbn, setIsbn] = useState(0)
  const [instock, setInStock] = useState("")
  const [stock, setStock] = useState(0)
  const [link, setLink] = useState("")
  const [plot, setPlot] = useState("Book Plot...")
  
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
    <div className="container collection">
      <h1>My Collection</h1>

      <div className="bookshelf">
        <ul>
          {
            books.map(book => {
              return (book.collect? <li 
                  onClick={() => openBook(book.title, book.author, book.img, book.inStock, book.isbn, book.stock, book.link, book.plot)}>
                    <img src={book.img} alt="img"/>
                    {book.title} <span>{book.author}</span>
                  </li> : "")
            })
          }
        </ul>
      </div>
      {    
        <OneBook title={title} author={author} img={img} isbn={isbn} instock={instock} stock={stock} link={link} plot={plot}/> 
      }
    </div>
  )
}

export default Collection