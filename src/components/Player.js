import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause , faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Player = ({currentSong}) => {

    // useRef seperti get DOM pada vanilla javascript
    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: null,
    });

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

    const timeUpdateHandler = (e) => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;

        setSongInfo({
            currentTime, 
            duration
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

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input 
                    min={0}
                    max={songInfo.duration}
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                    type="range"/>
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon 
                    className="skip-back" 
                    icon={faAngleLeft} 
                    size="2x"/>
                <FontAwesomeIcon 
                    onClick={playSongHandler}
                    className="play" 
                    icon={isPlaying ? faPause : faPlay} 
                    size="2x"/>
                <FontAwesomeIcon 
                    className="skip-forward" 
                    icon={faAngleRight} 
                    size="2x"/>
            </div>

            <audio 
                onLoadedMetadata={timeUpdateHandler}
                onTimeUpdate={timeUpdateHandler}  
                ref={audioRef} 
                src={currentSong.audio}></audio>
        </div>
    )
}

export default Player
