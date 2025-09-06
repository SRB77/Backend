/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import './Songs.css'

const Songs = ({songs}) => {
  return (
    <div className="mood-songs">
      <h2 className="section-title">Recommended Tracks</h2>
      <div className="songs-list">
        {
          songs.map((song, index) => (
            <div className="song-item" key={index}>
              <div className="song-info">
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
              <div className="play-button">
                <i className="ri-play-fill"></i>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Songs