import React from "react";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <SearchBox />
      </main>
    </div>
  );
};

export default App;
