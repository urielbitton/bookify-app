import React, { useState, useContext } from 'react'
import { BookContext } from './BookContext'

function AddBook() {

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [img, setImg] = useState("")
  const [isbn, setIsbn] = useState("")
  const [inStock, setInStock] = useState(true)
  const [stock, setStock] = useState(0)
  const [plot, setPlot] = useState("") 
  const [collect, setCollect] = useState(false) 
  const [books, setBooks] = useContext(BookContext)

  function updateTitle(e) {
    setTitle(e.target.value)
  }
  function updateAuthor(e) {
    setAuthor(e.target.value)
  }
  function updateIsbn(e) {
    setIsbn(e.target.value)
  }
  function updateStock(e) {
    setStock(e.target.value)
  }
  function updatePlot(e) {
    setPlot(e.target.value)
  }
  function updateCollect(e) {
    (e.target.checked? setCollect(true): setCollect(false))
  }

  function updateImg() {
   var file = document.querySelector(".uploadpic").files[0];
   var reader = new FileReader();
   reader.onloadend = function(){
      setImg(reader.result)
   } 
   if(file) {
      reader.readAsDataURL(file);
    } 
  }
  function addABook() {
    setBooks(prevBooks => [...prevBooks,{title: title, author: author, img: img, isbn:isbn, stock:stock, plot:plot, collect:collect}])
  } 

  let detailsclick = false
  function expandDetails() {
      
    if(detailsclick === false) {
      document.querySelector('.formdetails').style.display = 'block'
      detailsclick = true
    }
    else {
      document.querySelector('.formdetails').style.display = 'none'
      detailsclick = false
    }
    
  }



  return ( 
    <div className="addbook">
      <h5>Add Book</h5>
      <input placeholder="Title" name="title" value={title} onChange={updateTitle}/>
      <input placeholder="Author" name="author" value={author} onChange={updateAuthor}/>
      <label> 
        <input className="uploadpic" type="file" onChange={updateImg}/>
        <i className="fas fa-images"></i>
      </label>
      <i className="fas fa-angle-down moredetails" onClick={expandDetails}></i>
      <div className="formdetails">
        <input placeholder="ISBN" name="isbn" value={isbn} onChange={updateIsbn}/>
        <input placeholder="Stock" name="stock" value={stock} onChange={updateStock}/>
        <textarea placeholder="Plot" name="plot" value={plot} onChange={updatePlot}/>
        <input type="checkbox" name="collect" value={collect} onChange={updateCollect}/>
      </div>
      <button onClick={addABook}>Add To Library</button>
    </div> 
  )
} 

export default AddBook