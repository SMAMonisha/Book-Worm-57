import axios from "axios";

const GBDB = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
});

const getBooksByTerm = (SearchTerm, setBooks) => {
  GBDB.get("/volumes", {
    params: {
        //api_key:"AIzaSyDTkC5WFhzQZiGACPQ4djX3NTx3N4FE_lU",
      q: SearchTerm,
      page: 1,
    },
  }).then((response) => {
    console.log(response);
    //setBooks(response.data.results);
    //setTotalPages(response.data.total_pages);
  });
};


export { getBooksByTerm };