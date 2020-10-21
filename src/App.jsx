import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import SearchBox from "./components/SearchBox";

const App = () => {
  const [query, setQuery] = useState("");
  const [anime, setAnime] = useState(undefined);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    fetch(`https://api.jikan.moe/v3/search/anime?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setAnime(data.results);
      });
  }, [query]);

  return (
    <div className="App">
      <Navbar />
      <main>
        <SearchBox handleChange={handleChange} />
        <Results query={query} anime={query ? anime : undefined} />
      </main>
    </div>
  );
};

export default App;
