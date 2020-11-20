import React, {useState} from 'react';
import { Player, Song, Library, Nav } from './components';
import './style/app.scss';
import data from "./util";

const App = () => {

  const [isPlaying, setIsPlaying]  = useState(false);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isLibraryOpen, setIsLibraryOpen ] = useState(false);

  return (
    <div className={`App ${isLibraryOpen ? 'library-active' : ''}` }> 
      <Nav setIsLibraryOpen={setIsLibraryOpen}/>
      <Song currentSong={currentSong} isPlaying={isPlaying}/>
      <Player 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setSongs={setSongs}
        currentSong={currentSong}
        songs={songs}
        setCurrentSong={setCurrentSong}
        />
      <Library 
        songs={songs} 
        setSongs={setSongs}
        isLibraryOpen={isLibraryOpen}
        setCurrentSong={setCurrentSong}/>
    </div>
  );
}

export default App;