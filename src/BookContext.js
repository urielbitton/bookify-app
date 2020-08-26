import React, {createContext, useState} from 'react'

export const BookContext = createContext()

export const BookContextProvider = (props) => {
  
  const [books, setBooks] = useState([
    {
      isbn: 1000,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/The_Great_Gatsby_cover_1925_%281%29.jpg",
      inStock: true,
      stock: 3,
      link: "https://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567",
      plot: "The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career. First published in 1925, this quintessential novel of the Jazz Age has been acclaimed by generations of readers. The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted “gin was the national drink and sex the national obsession,” it is an exquisitely crafted tale of America in the 1920s.",
      collect: false,
    }, 
    { 
      isbn: 1001,
      title: "Digital Fortress",
      author: "Dan Brown",
      img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1360095966l/11125.jpg",
      inStock: true,
      stock: 7,
      link: "https://www.amazon.ca/Digital-Fortress/dp/B071VQQ5JQ/ref=sr_1_1?crid=W7KZX7MP6EKX&dchild=1&keywords=digital+fortress&qid=1598395356&s=books&sprefix=digital+fort%2Cstripbooks%2C171&sr=1-1",
      plot: "When the National Security Agency’s invincible code-breaking machine encounters a mysterious code it cannot break, the agency calls its head cryptographer, Susan Fletcher, a brilliant, beautiful mathematician. What she uncovers sends shock waves through the corridors of power. The NSA is being held hostage…not by guns or bombs but by a code so complex that if released would cripple U.S. intelligence.",
      collect: false,
    },
    {
      isbn: 1002,
      title: "Origin",
      author: "Dan Brown",
      img: "https://image.ebooks.com/previews/095/095534/095534320/095534320.jpg",
      inStock: true,
      stock: 3,
      link: "https://www.amazon.ca/Origin-A-Novel/dp/B075MLL5GV/ref=sr_1_1?crid=1BNB2YH8XUPBC&dchild=1&keywords=origin+dan+brown&qid=1598395372&s=audible&sprefix=origin+dan%2Caudible%2C152&sr=1-1",
      plot: "Robert Langdon, Harvard professor of symbology, arrives at the ultramodern Guggenheim Museum Bilbao to attend the unveiling of a discovery that “will change the face of science forever.",
      collect: false,
    },
    {
      isbn: 1003,
      title: "The Lord Of The Rings",
      author: "J.R Tolkien",
      img: "https://kbimages1-a.akamaihd.net/1a3242ad-3242-42e2-b5eb-41021cf47c58/1200/1200/False/the-fellowship-of-the-ring-the-lord-of-the-rings-book-1-1.jpg",
      inStock: false,
      stock: 0,
      link: "https://www.amazon.ca/Lord-Rings-Fellowship-Towers-Return-ebook/dp/B002RI9176/ref=sr_1_6?dchild=1&keywords=lord+of+the+rings+the+return+of+the+king&qid=1598395427&s=audible&sr=1-6-catcorr",
      plot: "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.",
      collect: false,
    },
    {
      isbn: 1004,
      title: "The Bourne Identity",
      author: "Robert Ludlum",
      img: "https://i.pinimg.com/originals/91/df/ba/91dfba4e69e673876c2089f36ee85b04.gif",
      inStock: false,
      stock: 0,
      link: "https://www.amazon.ca/The-Bourne-Identity/dp/1407224344/ref=sr_1_7?crid=2US6OALW7E1KE&dchild=1&keywords=the+bourne+identity&qid=1598395489&s=audible&sprefix=the+bourne+ident%2Caudible%2C152&sr=1-7-catcorr",
      plot: "His memory is a blank. His bullet-ridden body was fished from the Mediterranean Sea. His face has been altered by plastic surgery. A frame of microfilm has been surgically implanted in his hip. Even his name is a mystery. Marked for death, he is racing for survival through a bizarre world of murderous conspirators—led by Carlos, the world’s most dangerous assassin. Who is Jason Bourne? The answer may kill him.",
      collect: false,
    } 
  ]) 
  
  return (
    <BookContext.Provider value={[books, setBooks]}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider