import { motion } from 'framer-motion';
import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TYPE_RESET_DETAIL } from '../utils/constant';
import { getPlatform, getStars, resizeImg } from '../utils/util';

const GameDetail = ({name,from, gameId, rating, platforms,background_image, description_raw, screens, id}) => {

    const dispatch = useDispatch();

    const onClickOutsideHandler = (event) => {
        //untuk memastikan bahwa event yang diklcik pada CardShadow
        if(event.target !== event.currentTarget) return;

        //mereset state detail 
        dispatch({type: TYPE_RESET_DETAIL});
        //meng-enable scrolling saat detail close
        document.body.style.overflow = "auto";
    }
 
    return (
        <CardShadow onClick={onClickOutsideHandler}>
            <Detail layoutId={`${from}-${gameId}`}>
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId={`title-${`${from}-${gameId}`}`}>{name}</motion.h3>
                        <p>Rating: {rating}</p>
                        {getStars(rating)}
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            {platforms.map(data => (
                                <img key={data.platform.id}
                                     src={getPlatform(data.platform.name)} 
                                     alt={data.platform.name}/>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <motion.img layoutId={`image-${`${from}-${gameId}`}`} src={resizeImg(background_image,1280)} alt="img"/>
                </Media>
                <Description>
                    <p>{description_raw}</p>
                </Description>
                <div className="gallery">
                    {screens.results.map(screen => (
                        <img src={resizeImg(screen.image, 1280)} alt="img" key={screen.id}/>
                    ))}
                </div>
            </Detail>
        </CardShadow>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    &::-webkkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkkit-scrollbar-thumb {
        background-color: #ff7676;
    }

    &::-webkkit-scrollbar-track {
        background-color: white;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    position: absolute;
    background: white;
    left: 10%;
    color: black;
    z-index: 110;

    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 2rem;
        height: 2rem;
        display: inline;
    }
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;

    img {
        margin-left: 1rem;
    }
`

const Media = styled(motion.div)`
    margin-top: 3rem;

    img {
        width: 100%;
    }
`

const Description = styled(motion.div)`
    margin: 5rem 0%;
`;

export default GameDetail
