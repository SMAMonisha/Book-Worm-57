import React, { useEffect, useState } from 'react'
import {getBookDetails} from '../api/GBDB';
import {Link} from 'react-router-dom';

const BookDetailsScreen=(props)=>{
    console.log(props)
    const[currentBook,setCurrentBook]=useState({});
    const[currentImage,setCurrentImage]=useState('')
    useEffect(()=>{
        getBookDetails(props.location.volumeId,setCurrentBook,setCurrentImage)
    },[]);
    //console.log(currentBook)
  return (
    <div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            {currentImage == "" ? (
              <img alt=""
                src="https://picsum.photos/200/300"
                style={{ width: "80", height: "100",borderColor:"skyblue" }}
              />
            ) : (
              <img alt= "" src={currentImage} style={{fontSize:30,paddingLeft:10,paddingRight:10,borderColor:"skyblue"}} />
            )}
            <span className="card-title">{currentBook.title}</span>
          </div>
          <span className="card-title" style={{color:'blue'}}>Author: {currentBook.authors}</span> 
          <p className="card-title" style={{color:'blue'}}>Publish Date: {currentBook.publishedDate}</p>

            <p >{currentBook.description}</p>
          <div className="card-action"  style={{backgroundColor:"skyblue"}} >
            <Link style={{color:'blue'}} to='/'>Go to search page</Link>
            </div>
        </div>
        </div>
    
    </div>
  );
}
export default BookDetailsScreen;