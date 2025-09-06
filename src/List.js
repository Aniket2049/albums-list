import React, { useState } from "react";

import data from "./data";

const List = () => {
  const [albums, setAlbums] = useState(data);
  const [btnText, setBtnText] = useState("Clear All");

  const clearListItemsHandler = () => {
    if (albums.length > 0) {
      setAlbums([]);
      setBtnText("Click to Reload");
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="list">
      {albums.length > 0 ? (
        albums.map((album) => {
          return (
            <div key={album.id} className="list-item">
              <img
                src={album.albumArtURL}
                alt={album.title}
                width="100px"
                height="100px"
              />
              <div style={{ flexGrow: "1" }}>
                <div className="artist">{album.artist}</div>
                <div className="album">{album.title}</div>
              </div>
            </div>
          );
        })
      ) : (
        <p
          style={{
            fontFamily: "Barlow",
            fontSize: "larger",
            fontWeight: "bold",
          }}
        >
          No Music 😟
        </p>
      )}
      <button className="clearListItemsBtn" onClick={clearListItemsHandler}>
        {btnText}
      </button>
    </div>
  );
};

export default List;
