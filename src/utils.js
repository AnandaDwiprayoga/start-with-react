export const playAudio = (isPlaying, audioRef) => {
    if(isPlaying){
        const playPromise = audioRef.current.play();
        if(playPromise){
            playPromise.then(audio => {
                audioRef.current.play();
            })
        }
    }
}

