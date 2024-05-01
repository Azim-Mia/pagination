import booklist from '/data/data/com.termux/files/home/pagination-class-other/src/dataStore/books.js';
import './table.css';
import {useState,useEffect} from 'react';
const Booktable=()=>{
  const [books,setBooks]=useState([]);
   const [filterBook,setFilterBooks]=useState(books);
 const [inputValue,setInputValue]=useState("");
  useEffect(()=>{
   setBooks(booklist) 
   setFilterBooks(booklist)
  },[])
  const handleSearchValue=(e)=>{
    setInputValue(e.target.value)
     const searchValue=e.target.value;
  let value=searchValue.toLowerCase();
   const newBook = filterBook.filter((book)=>{
    const newBookName= book.title.toLowerCase();
    return newBookName.startsWith(value)
    })
    setBooks(newBook);
  }
  return ( <div>
      <div className="search-container">
    <input type="text" name='title' placeholder="search text" onChange={handleSearchValue} className="searchInputStyle" value={inputValue} />
    <button className="btn">Search Book</button>
    </div>
   <table>
   <thead>
   <th>ID</th>
    <th>Book Name</th>
     <th>Befaq Price</th>
   <th>Islamiya Price</th> 
   <th>Kauser</th>
   <th>Anuwar Price</th>
   <th>fata Price</th>
  <th>mahmudiya Price</th>
  <th>darul-kalam Price</th>
 <th>discount</th>
 <th>describtion</th>
   </thead>
   <tbody>
   {books.map((book)=>{
   const {id,bookName,discount,describtion}=book;
     return <tr>
     <td>{id}</td>
    <td>{bookName}</td>
    <td>
    <div className="main_note">
    <p>Main:{book.befaq.main}</p>
  <p>Note:{book.befaq.note}</p>
    <p>Paikari:{book.befaq.paikari}</p>  
       </div>
    </td>
        <td>
    <div className="main_note">
   <p>Main:{book.islamiya.main}</p>
   <p>Note:{book.islamiya.note}</p>
   <p>Paikari:{book.islamiya.paikari}</p>  
    </div>
    </td>
        <td>
    <div className="main_note">
   <p>Main:{book.kauser.main}</p>
  <p>Note:{book.kauser.note}</p>
   <p>Paikari:{book.kauser.paikari}</p>  
    </div>
    </td>
        <td>
    <div className="main_note">
   <p>Main:{book.anuwar.main}</p>
  <p>Note:{book.anuwar.note}</p>
    <p>Paikari:{book.anuwar.paikari}</p>
    </div>
    </td>
        <td>
    <div className="main_note">
   <p>Main:{book.fata.main}</p>
   <p>Note:{book.fata.note}</p>
    <p>Paikari:{book.fata.paikari}</p>  
    </div>
    </td>
        <td>
    <div className="main_note">
    <p>Main:{book.mahmudiya.main}</p>
    <p>Note:{book.mahmudiya.note}</p>
  <p>Paikari:{book.mahmudiya.paikari}</p>  
    </div>
    </td>
        <td>
    <div className="main_note">
    <p>Main:{book.darulKalam.main}</p>
    <p>Note:{book.darulKalam.note}</p>
  <p>Paikari:{book.darulKalam.paikari}</p>  
    </div>
    </td>
    <td>{discount}</td>
   <td>{describtion}</td>
     </tr>
   })}
   </tbody>
   </table>
   </div> 
    )
}
export default Booktable;