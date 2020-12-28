import React from "react";
import Book from "./Book";

const BookList = (props) => {
    console.log(props);
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          
        {/* {props.books!=undefined ?  props.books.books.map((book, i) => {
            (<Book data={book} key={i} />):(<li>Unknown</li>)} */}
          {
            
        
              props.books.items.map((book, i) => {
            return <Book data={book} key={i} />
             
          }
          )}
        </div>
      </div>
    </div>
  );
};

export default BookList;