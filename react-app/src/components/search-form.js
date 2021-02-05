import React from "react";

const styles = {
  inputDiv:{
    display: "flex",
    justifyContent: "center",
    marginTop: "10px"
  },
  
}

function SearchForm({handleInputChange, search, handleFormSubmit}) {
  return (
    <form className="container">
      <div className="form-group text-center" style={styles.inputDiv}>
        <input
          onChange={handleInputChange}
          value={search}
          name="search"
          type="text"
          className="form-input input"
          placeholder="Search by Name"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;