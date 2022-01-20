import React, { useState } from "react";

function ListingCard({ id, description, image, location, removeListing }) {
  const [favorited, setFavorited] = useState(false);

  const toggleFavorite = () => {
    setFavorited((favorited) => !favorited);
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorited ? (
          <button
            onClick={toggleFavorite}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button onClick={toggleFavorite} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={removeListing} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;

function addFifteen(x) {
  function addEight(x) {
    return x + 8;
  }

  function addSeven(x) {
    return x + 7;
  }

  return addEight(addSeven(x));
}

addFifteen(7);
