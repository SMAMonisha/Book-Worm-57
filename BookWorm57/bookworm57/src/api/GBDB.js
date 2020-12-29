import axios from "axios";

const GBDB = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/",
});

const getBooksByTerm = (SearchTerm, setBooks,sort,pageNo,setTotalPages) => {
  GBDB.get("/volumes", {
    params: {
        //api_key:"AIzaSyDTkC5WFhzQZiGACPQ4djX3NTx3N4FE_lU",
      q: SearchTerm,
      orderBy: sort,
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

const getBookDetails = (bookId, setCurrentBook, setCurrentImage) => {
  GBDB.get("volumes/" + bookId).then((response) => {
    console.log(response.data.volumeInfo);
    setCurrentBook(response.data.volumeInfo);
    {
      response.data.volumeInfo.imageLinks == undefined
        ? setCurrentImage("")
        : setCurrentImage(response.data.volumeInfo.imageLinks.thumbnail);
    }
    // console.log(response.data.volumeInfo.imageLinks.thumbnail)
  });
};
export { getBooksByTerm, getBookDetails };