import React,{useState} from "react";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/SearchBar";
import { getBooksByTerm} from "./api/GBDB";
import Pagination from "./Components/Pagination";
import SortPicker from "./Components/SortPicker";
const App = () =>{
  const[SearchTerm,setSearchTerm]=useState('');
  const[books,setBooks]=useState([]);
  const[sort,setSort]=useState("newest");
  const[currentPage,setCurrentPage]=useState(1);
  const[totalPages,setTotalPages]=useState(0);

  const data =[
    { value: "newest", label: "New"},
    { value : "relevance", label: "Relevance"},
  ]

  const handleSubmit= async (event)=>{
    event.preventDefault();
    await getBooksByTerm(SearchTerm,setBooks,sort,currentPage,setTotalPages);
  }

  const pickerChange=(event)=>{
    setSort(event.value)
    //console.log(event)
  }
  const handleChange=(event)=>{
    //console.log(event.target.value)
    setSearchTerm(event.target.value)
  }
  const nextPage= async (page_number)=>{
    let index = 20*(page_number-1)
    setCurrentPage(page_number);
    await getBooksByTerm(SearchTerm,setBooks,sort,index,setTotalPages);
  }
  return <div>
    <Navbar/>
    <SortPicker value={sort} data={data} handleChange={pickerChange}/>
    <Searchbar handleChange={handleChange}  handleSubmit={handleSubmit}/>
    {books.length!=0?(<BookList books={books}/>):""}
    {totalPages> 1 ? <Pagination nextPage={nextPage} currentPage={currentPage} totalPages={totalPages}/>:""}
    
    </div>
};

export default App;
