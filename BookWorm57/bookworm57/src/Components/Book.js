import React from "react";

const Book = (props) => {
 //console.log(props.data)
  const ImageURL = props.data.volumeInfo.imageLinks;
  return (
    <div>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            {ImageURL == null ? (
              <img alt=""
                src="https://picsum.photos/200/300"
                style={{ width: "100", height: "200" }}
              />
            ) : (
              <img alt="" src={ImageURL.smallThumbnail}  />
            )}
            
          </div>
          <span className="card-title">{props.data.volumeInfo.title}</span>
          <div className="card-content">{props.data.volumeInfo.authors}</div>
          <div className="card-action">See Details</div>
        </div>
      </div>
    </div>
  );
};
export default Book;