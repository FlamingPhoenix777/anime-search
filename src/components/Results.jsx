import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

const Results = ({ query, anime: animeList }) => {
  return (
    <div className="results">
      {animeList ? (
        <div className="results__grid">
          {animeList.map((anime) => (
            <AnimeCard anime={anime} />
          ))}
        </div>
      ) : (
        <p>Nothing here</p>
      )}
    </div>
  );
};

export default Results;
