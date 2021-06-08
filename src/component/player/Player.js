import React, { useEffect, useState, useRef } from "react";
import classes from "./Player.module.css";
import Details from "./Details";
import Controls from "./Controls";

const Player = (props) => {
  const audio = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audio.current.play();
    } else audio.current.pause();
  });

  const skipPlayer = (forward = true) => {
    if (forward) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;
        if (props.currentSongIndex + 1 > props.songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;
        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
  };

  return (
    <div className={classes.app}>
      <audio src={props.songs[props.currentSongIndex].src} ref={audio} />
      <h1 className={classes.head}>PLAYING NOW</h1>
      <Details song={props.songs[props.currentSongIndex]} />
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipPlayer={skipPlayer}
      />
      <p className={classes.nextSong}>
        Next Song : <span>{props.songs[props.nextSongIndex].title}</span> by{" "}
        <span>{props.songs[props.nextSongIndex].artist}</span>
      </p>
    </div>
  );
};

export default Player;
