import React, {useEffect} from 'react'

const LibrarySong = ({song, setCurrentSong,setSongs}) => {

    const librarySongOnClik = () => {
        setCurrentSong(song);
        
        setSongs(allsong => allsong.map(s => {
            let active;

            if(s.id === song.id){
                active = true;
            }else{
                active = false;
            }

            return {...s, active};
        }));
    }

    return (
        <div className={`library-song ${song.active ? 'selected' : ''}`} onClick={librarySongOnClik}>
            <img src={song.cover} alt={song.name}/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong
