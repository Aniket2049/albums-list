import React from "react";

const List = (props) => {
  const albums = props.listItems;

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
    </div>
  );
};

export default List;
