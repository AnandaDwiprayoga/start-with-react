import React from 'react'
import { appleIcon, gamepadIcon, nintendoIcon, psIcon, starEmptyIcon, starFullIcon, steamIcon, xboxIcon } from "../img/icon";
import { IMAGE_POSTER_DEFAULT } from './constant';

export const resizeImg = (imgPath, size) => {
    return imgPath ? ( 
        imgPath.match(/media\/screenshots/)
            ? imgPath.replace(
                "media/screenshots",
                `media/resize/${size}/-/screenshots`
            )
            : imgPath.replace(
                "media/games",
                `media/resize/${size}/-/games`
            )
    ) : IMAGE_POSTER_DEFAULT;
}

export const getPlatform = (platform) => {
    switch(platform){
        case "PlayStation 4" :
            return psIcon;
        case "Xbox One" :
            return xboxIcon;
        case "PC":
            return steamIcon;
        case "Nintendo Switch" :
            return nintendoIcon;
        case "iOS":
            return appleIcon;
        default :
            return gamepadIcon;
    }
}

export const getStars = (rate) => {
    const stars = [];
    const rating = Math.floor(rate);

    for(let i = 1; i <= 5; i++){
        if(i <= rating){
            stars.push(<img alt='star' key={i} src={starFullIcon}></img>)
        }else{
            stars.push(<img alt='star' key={i} src={starEmptyIcon}></img>)
        }
    }
    return stars;
}