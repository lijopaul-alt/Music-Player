import React from "react";
import classes from "./Details.module.css";

const Details = (props) => {
  return (
    <div className={classes.details}>
      <div className={classes.artistimage}>
        <img src={props.song.img_src} alt={""} />
      </div>
      <h1 className={classes.title}>{props.song.title}</h1>
      <h4 className={classes.artist}>{props.song.artist}</h4>
    </div>
  );
};

export default Details;
