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
      <div class="center" style={{padding:40}}>
      <div className="col s12 m7">
        <div className="card" style={{padding:60}}>
          <div className="card-image">
            {currentImage == "" ? (
              <img alt=""
                src="https://picsum.photos/200/300"
                style={{ width: "80", height: "100",borderColor:"skyblue" }}
              />
            ) : (
              <img alt= "" src={currentImage} style={{width: "300", height: "600",fontSize:30,padding:100,paddingRight:10,borderColor:"skyblue"}} />
            )}
          </div>
          <span className="card-title" style={{}}>{currentBook.title}</span>
          <p className="card-title" style={{color:'blue'}}>Author: {currentBook.authors}</p> 
          <p className="" style={{color:'blue'}}>Publish Date: {currentBook.publishedDate}</p>

            <p className="card-content" >{currentBook.description}</p>
          <div className="card-action"  style={{backgroundColor:"skyblue"}} >
            <Link style={{color:'blue'}} to='/'>Go to search page</Link>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default BookDetailsScreen;