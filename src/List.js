import React, { useState } from "react";

import data from "./data";

const List = () => {
  const [albums, setAlbums] = useState(data);

  const clearListItemsHandler = () => {
    setAlbums([]);
  };

  return (
    <div className='list'>
      {albums.map((album) => {
        return (
          <div key={album.id} className='list-item'>
            <img
              src={album.albumArtURL}
              alt={album.title}
              width='100px'
              height='100px'
            />
            <div style={{ flexGrow: "1" }}>
              <div className='artist'>{album.artist}</div>
              <div className='album'>{album.title}</div>
            </div>
          </div>
        );
      })}
      <button className='clearListItemsBtn' onClick={clearListItemsHandler}>
        Clear All
      </button>
    </div>
  );
};

export default List;
