import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import Kakashi from "../img/kakashi.png";

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
        <div className="placeholder">
          <img src={Kakashi} alt="Kakashi" className="kakashi" />
          <div className="message">
            Stop staring, go search for some anime in the searchbar
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
