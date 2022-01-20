import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ searchTerm }) {
  const [listings, setListings] = useState([]);

  const getListings = () => {
    fetch(`http://localhost:6001/listings`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setListings(data);
      });
  };

  useEffect(getListings, []);

  const filteredListings = listings.filter((l) => {
    return l.description.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const deleteListing = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    setListings((listings) =>
      listings.filter((l) => {
        return l.id !== id;
      })
    );
  };

  return (
    <main>
      <ul className="cards">
        {filteredListings.map((l) => {
          return (
            <ListingCard
              {...l}
              key={l.id}
              setListings={setListings}
              removeListing={() => deleteListing(l.id)}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
