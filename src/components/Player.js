import React, { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause , faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
// import { playAudio } from '../utils';

const Player = ({currentSong, songs, setCurrentSong, setSongs,isPlaying,setIsPlaying}) => { 

    // useRef seperti get DOM pada vanilla javascript
    const audioRef = useRef(null);

    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0
    });


    useEffect(()=> {
        if(isPlaying) audioRef.current.play();
    }, [currentSong]);

    const changeAttributeActive = (nextSong) => {
        setSongs(allsong => allsong.map(s => {
            let active;

            if(s.id === nextSong.id){
                active = true;
            }else{
                active = false;
            }

            return {...s, active};
        }));
    }


    const playSongHandler = () => {
        const audio = audioRef.current;

        if(isPlaying){
            audio.pause();
            setIsPlaying(!isPlaying)
        }else{
            audio.play();
            setIsPlaying(!isPlaying);
        }
    }


    const skipTrackHandler = async (direction) => {
        const currentIndex = songs.findIndex(song => song.id === currentSong.id);
        if(direction === "forward"){
            const nextId = songs[ (currentIndex + 1 ) % songs.length ];
            await setCurrentSong(nextId);
            changeAttributeActive(nextId);
        }

        if(direction === "back"){
            const prevId = songs[currentIndex - 1] || songs[songs.length-1];
            await setCurrentSong(prevId); 
            changeAttributeActive(prevId);  
        }

    }

    const timeUpdateHandler = (e) => {
        const currentTime = e.target.currentTime;
        let duration = e.target.duration || 0;
        
        const roundedCurrentTime = Math.round(currentTime);
        const roundedDuration = Math.round(duration);
        const animationPercentage = Math.round( (roundedCurrentTime/ roundedDuration) * 100 );

        setSongInfo({
            currentTime, 
            duration,
            animationPercentage
        })
    }

    const dragHandler = (e) => {
        const dragValue = e.target.value;

        audioRef.current.currentTime = dragValue;
        setSongInfo({...songInfo, currentTime: dragValue});
    }

    const getTime = (time) => {
        return  Math.floor(time / 60) + ":" + ("0" + Math.floor(time%60)).slice(-2);
    }

    const trackAnimStyle = {
        transform: `translateX(${songInfo.animationPercentage}%)`
    }
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div className="track" style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}}>
                    <input 
                        min={0}
                        max={songInfo.duration}
                        value={songInfo.currentTime}
                        onChange={dragHandler}
                        type="range"/>
                    <div style={trackAnimStyle} className="animation-track"></div>
                </div>
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon 
                    onClick={() => skipTrackHandler('back')}
                    className="skip-back" 
                    icon={faAngleLeft} 
                    size="2x"/>
                <FontAwesomeIcon 
                    onClick={playSongHandler}
                    className="play" 
                    icon={isPlaying ? faPause : faPlay} 
                    size="2x"/>
                <FontAwesomeIcon 
                    onClick={() => skipTrackHandler('forward')}
                    className="skip-forward" 
                    icon={faAngleRight} 
                    size="2x"/>
            </div>

            <audio 
                onLoadedMetadata={timeUpdateHandler}
                onTimeUpdate={timeUpdateHandler}  
                ref={audioRef} 
                src={currentSong.audio}
                onEnded={() => skipTrackHandler('forward')}></audio>
        </div>
    )
}

export default Player
