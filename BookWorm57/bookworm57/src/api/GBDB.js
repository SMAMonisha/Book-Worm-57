import axios from "axios";

const GBDB = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
});

const getBooksByTerm = (SearchTerm, setBooks,pageNo,setTotalPages) => {
  GBDB.get("/volumes", {
    params: {
        //api_key:"AIzaSyDTkC5WFhzQZiGACPQ4djX3NTx3N4FE_lU",
      q: SearchTerm,
      startIndex: pageNo,
      maxResults:20,
    },
  }).then((response) => {
    //console.log(response.data.totalItems);
    setBooks(response.data);
     let Tpages = Math.ceil(response.data.totalItems / 20);
    setTotalPages(Tpages)
    //setTotalPages(response.data.total_pages);
  });
};


export { getBooksByTerm };