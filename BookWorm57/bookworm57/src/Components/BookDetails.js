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
      <div class="center" style={{padding:100,paddingTop:26}}>
      <div className="col s12 m4" style={{padding:100,paddingTop:20}}>
        <div className="card" style={{padding:60,paddingTop:26}}>
          <div className="card-image" style={{alignContent:"center"}}>
            {currentImage == "" ? (
              <img alt=""
                src="https://picsum.photos/200/300"
                style={{alignContent:"center",width: 700, height: 600,fontSize:30,paddingLeft:250,paddingRight:2,paddingTop:30,paddingBottom: 20,borderColor:"skyblue"}}
              />
            ) : (
              <img alt= "" src={currentImage} className="center" style={{alignContent:"center",width: 700, height: 600,fontSize:30,paddingLeft:250,paddingRight:2,paddingTop:30,paddingBottom: 20,borderColor:"skyblue"}} />
            )}
          </div>
          <span className="card-title" style={{fontWeight:"bold",paddingBottom: 2}}>{currentBook.title}</span>
          <p className="card-title" style={{color:'blue',fontSize:"22",fontWeight:"bold",paddingBottom: 0}}>Author: {currentBook.authors}</p> 
          <p className="" style={{color:'blue'}}>Publish Date: {currentBook.publishedDate}</p>

            <p className="card-content"style={{fontWeight:"",paddingTop: 2}} >{currentBook.description}</p>
          <div className="card-action"  style={{backgroundColor:"skyblue"}} >
            <Link style={{color:'blue',fontWeight:"bold"}} to='/'>Go to search page</Link>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default BookDetailsScreen;