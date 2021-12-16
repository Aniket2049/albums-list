import React from "react";

import albums from "./data";

const List = () => {
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
            <h3>{album.artist}</h3>
            <p>{album.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
