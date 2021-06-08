import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Controls.module.css";

const Controls = (props) => {
  return (
    <div className={classes.controls}>
      <button
        onClick={() => props.skipPlayer(false)}
        className={classes.skipbtn}
      >
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        onClick={() => props.setIsPlaying(!props.isPlaying)}
        className={classes.playbtn}
      >
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </button>
      <button onClick={() => props.skipPlayer()} className={classes.skipbtn}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
};

export default Controls;
