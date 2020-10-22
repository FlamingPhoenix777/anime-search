import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import Kakashi from "../img/kakashi.png";

const Results = ({ query, anime: animeList }) => {
  // Filter NSFW Anime
  if (animeList)
    animeList = animeList.filter((anime) => !anime.rated?.startsWith("R"));

  return animeList ? (
    <div className="results">
      <div className="results__grid">
        {animeList.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </div>
  ) : (
    <div className="placeholder">
      <img src={Kakashi} alt="Kakashi" className="kakashi" />
      <div className="message">
        Stop staring, go search for some anime in the searchbar
      </div>
    </div>
  );
};

export default Results;
