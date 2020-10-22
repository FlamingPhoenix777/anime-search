import React from "react";

const AnimeCard = ({ anime }) => {
  return (
    <div className="anime__card">
      <div className="card__header">
        <img src={anime.image_url} alt={anime.title} className="card__image" />
      </div>
      <div className="card__content">
        <div className="card__title">
          <a href={anime.url}>{anime.title}</a>
        </div>
        <div className="anime__info">
          <div className="anime__rating">
            <span className="anime__rated">{anime.rated}</span>
            <b>{anime.score}</b> / 10
          </div>
          <div className="anime__summary">{anime.synopsis}</div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
