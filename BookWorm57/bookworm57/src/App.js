import React,{useState} from "react";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/SearchBar";
import { getBooksByTerm} from "./api/GBDB";
const App = () =>{
  const[SearchTerm,setSearchTerm]=useState('');
  const[books,setBooks]=useState([]);
  // const[sort,setSort]=useState("");
  // const[currentPage,setCurrentPage]=useState(1);
  // const[totalPages,setTotalPages]=useState(0);

  const handleSubmit= async (event)=>{
    event.preventDefault();
    await getBooksByTerm(SearchTerm,setBooks);
  }
  const handleChange=(event)=>{
    //console.log(event.target.value)
    setSearchTerm(event.target.value)
  }
  return <div>
    <Navbar/>
    <Searchbar handleChange={handleChange}  handleSubmit={handleSubmit}/>
    </div>
};

export default App;
