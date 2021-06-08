import { useEffect, useState } from "react";
import Player from "./component/player/Player";
import "./App.css";

function App() {
  const [songs] = useState([
    {
      title: "Peaches",
      img_src: `./images/peaches.jpg`,
      artist: `Justin Beiber`,
      src: `./music/peaches.mp3`,
    },

    {
      title: "Billa 2",
      img_src: `./images/billa.jpg`,
      artist: `Ajith`,
      src: `./music/billa.mp3`,
    },
    {
      title: "Eminem",
      img_src: `./images/eminem.jpg`,
      artist: `Eminem`,
      src: `./music/eminem.mp3`,
    },
    {
      title: "Mariyan",
      img_src: `./images/mariyan.jpg`,
      artist: `Danush`,
      src: `./music/mariyaan.mp3`,
    },
  ]);

  let [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  const length = songs.length;

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > length - 1) {
        return 0;
      } else return currentSongIndex + 1;
    });
    //eslint-disable-next-line
  }, [currentSongIndex]);
  return (
    <div className="app">
      <Player
        songs={songs}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
      />
    </div>
  );
}

export default App;
