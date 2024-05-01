import {useState, useEffect} from 'react'
import './pagination.css';
import ReactPaginate from 'react-paginate';
import Booktable from './bookTable.js'
//import Searchbook from './searchBook.js'
//const url="https://jsonplaceholder.typicode.com/users";
export const PaginatedItems=()=>{
const [todoData,setTodos]=useState(null)
const searchItemFetch=async(pages)=>{
  const responce=await fetch(`http://localhost:3001/search?search=${pages}`)
  const data=await responce.json();
  setTodos(data.payload)
}
  const handlePageClick=async(data)=>{
  let currentPage=data.selected + 1;
  await searchItemFetch(currentPage)
  }

useEffect(()=>{   
const fetchData=async()=>{
  const responce=await fetch(`http://localhost:3001/search`)
  const data= await responce.json();
  const datas=data.payload;
  setTodos(datas);
}
fetchData();
},[])
  return <div>
  <div><Booktable /></div>
  <div className="card_container">{
    todoData?.users.map((todo)=>{
      return <article key={todo.id} className="card">
      <p>{todo.name}</p>
     <p>{todo.email}</p>
      </article>
    })
  }</div>
  <div>
    <ReactPaginate
    // start style page className
    activeClassName={'active'}
   nextClassName={"next"}
   previousClassName={'previous'}
  containerClassName={'pagination'}
   disabledClassName={'disabled-page'}
  // end style page className 
    previousLabel={`previous`}
    nextLabel={`next`}
    breakLabel={'.'}
    pageCount={10}
    marginPagesDisplayed={2}
    pageRangeDisplayed={3}
    onPageChange={handlePageClick}
   />
   </div>
    </div>
}