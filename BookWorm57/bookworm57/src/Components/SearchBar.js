import React from "react";

const Searchbar = (props) => {
  return (
    <div>
    <div className="container">
      <div className="row">
        <section className="col s6 offset-s4">
          <form action="" onSubmit={props.handleSubmit}>
            <div className="input-field">
              <input
              //style={{ marginLeft:400, marginRight:500, marginTop:20}}
                placeholder="Search for books"
                type="text"
                onChange={props.handleChange}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
    </div>
  );
};

export default Searchbar;