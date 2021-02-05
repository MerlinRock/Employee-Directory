import React from "react";
import Header from "./components/header";
import Wrapper from "./components/wrapper"
import SearchResult from "./components/search-results"


function App() {
  return (
    <div className="app">
      {/* <Wrapper> */}
      <Header />
      <SearchResult />
      {/* </Wrapper> */}
    </div>
  );
}

export default App;
