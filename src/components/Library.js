import React from 'react'
import LibrarySong from './LibrarySong'

function Library({songs, setCurrentSong ,setSongs, isLibraryOpen}) {
    return (
        <div className={`library ${isLibraryOpen ? 'active-library' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => <LibrarySong setSongs={setSongs} key={song.id} song={song} setCurrentSong={setCurrentSong}/>)}
            </div>
        </div>
    )
}

export default Library
