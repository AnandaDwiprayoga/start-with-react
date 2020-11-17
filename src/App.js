import React, {useState} from 'react';
import { Player, Song } from './components';
import './style/app.scss';
import data from "./util";

const App = () => {

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App"> 
      <Song  currentSong={currentSong}/>
      <Player currentSong={currentSong}/>
    </div>
  );
}

export default App;


