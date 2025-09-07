/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import './Songs.css'

const Songs = ({songs}) => {
  const [play,setPlay] = useState(false);
  function operatioSong(){
    setPlay((prevPlay) => !prevPlay);
  }
  return (
    <div className="mood-songs">
      <h2 className="section-title">Recommended Tracks</h2>
      <div className="songs-list">
        {songs.map((song, index) => (
          <div className="song-item" key={index}>
            <div className="song-info">
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
            <div className="play-pause-button">
              <audio src={song.audio} controls></audio>
              <button className='play-pause' onClick={operatioSong}>
                {play?<i className='ri-pause-fill'></i>:<i className="ri-play-fill"></i>} 
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Songs