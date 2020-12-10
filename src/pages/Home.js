import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React,  { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { loadGames } from '../actions/gamesAction';
import { Game, GameDetail } from '../components';
import { fadeIn } from '../utils/animation';

const Home = () => {
    const dispatch = useDispatch();

    //use selector to get all state in reducer
    const { popular, newGames, upcoming, isLoading : isLoadingGames ,searched } = useSelector(state => state.gameReducers);
    const {game, screens, isLoading : isLoadingDetail, from} = useSelector(state => state.gameDetailReducer);

    //parameter kedua menggunakan dipatch untuk menunggu agar dispatch ready
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    return (
        <GameList variants={fadeIn} initial="hidden" animate="show">
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence>
                    { (game && screens) &&
                        <GameDetail 
                            name={game.name}
                            rating={game.rating}
                            platforms={game.platforms}
                            background_image={game.background_image}
                            description_raw={game.description_raw}
                            screens={screens}
                            gameId={game.id}
                            from={from}
                        />
                    }
                </AnimatePresence>
                { (isLoadingDetail || isLoadingGames) && 
                    <Loading>
                        <div className="loadingio-spinner-spinner-9wb9qmm30a8"><div className="ldio-b6q99j7ipo7">
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        </div></div>
                    </Loading>
                }
                {searched.length > 0 && (
                    <>
                        <h2>Search Result</h2>
                        <Games>
                            {searched.map(game => (
                                <Game 
                                    name={game.name}
                                    released={game.released}
                                    id={game.id}
                                    image={game.background_image}
                                    key={game.id}
                                    from="upcoming"
                                />
                            ))}
                        </Games>
                    </>
                    )
                }
                <h2>Upcoming Games</h2>
                <Games>
                    {upcoming.map(game => (
                        <Game 
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                            from="upcoming"
                        />
                    ))}
                </Games>
                <h2>Popular Games</h2>
                <Games>
                    {popular.map(game => (
                        <Game 
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                            from="popular"
                        />
                    ))}
                </Games>
                <h2>New Games</h2>
                <Games>
                    {newGames.map(game => (
                        <Game 
                            name={game.name}
                            released={game.released}
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                            from="newgames"
                        />
                    ))}
                </Games>
            </AnimateSharedLayout>
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding: 0 3rem;

    h2 {
        padding: 1rem 0;
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
`;

const Loading = styled.div`
    position: fixed;
    background: rgba(0,0,0,.5);
    width: 100%;
    left: 0;
    bottom: 0;
    height: 100%;
    display: flex;


    @keyframes ldio-b6q99j7ipo7 {
    0% { opacity: 1 }
    100% { opacity: 0 }
    }
    .ldio-b6q99j7ipo7 div {
        left: 47px;
        top: 24px;
        position: absolute;
        animation: ldio-b6q99j7ipo7 linear 1s infinite;
        background: #1d3f72;
        width: 6px;
        height: 12px;
        border-radius: 3px / 6px;
        transform-origin: 3px 26px;
    }.ldio-b6q99j7ipo7 div:nth-child(1) {
        transform: rotate(0deg);
        animation-delay: -0.9166666666666666s;
        background: #1d3f72;
    }.ldio-b6q99j7ipo7 div:nth-child(2) {
        transform: rotate(30deg);
        animation-delay: -0.8333333333333334s;
        background: #1d3f72;
    }.ldio-b6q99j7ipo7 div:nth-child(3) {
        transform: rotate(60deg);
        animation-delay: -0.75s;
        background: #1d3f72;
    }.ldio-b6q99j7ipo7 div:nth-child(4) {
        transform: rotate(90deg);
        animation-delay: -0.6666666666666666s;
        background: #1d3f72;
    }.ldio-b6q99j7ipo7 div:nth-child(5) {
        transform: rotate(120deg);
        animation-delay: -0.5833333333333334s;
        background: #1d3f72;
    }.ldio-b6q99j7ipo7 div:nth-child(6) {
        transform: rotate(150deg);
        animation-delay: -0.5s;
        background: #1d3f72;
    }.ldio-b6q99j7ipo7 div:nth-child(7) {
        transform: rotate(180deg);
        animation-delay: -0.4166666666666667s;
        background: #1d3f72;
    }.ldio-b6q99j7ipo7 div:nth-child(8) {
        transform: rotate(210deg);
        animation-delay: -0.3333333333333333s;
        background: #1d3f72;
    }.ldio-b6q99j7ipo7 div:nth-child(9) {
        transform: rotate(240deg);
        animation-delay: -0.25s;
        background: #1d3f72;
    }.ldio-b6q99j7ipo7 div:nth-child(10) {
        transform: rotate(270deg);
        animation-delay: -0.16666666666666666s;
        background: #1d3f72;
    }.ldio-b6q99j7ipo7 div:nth-child(11) {
        transform: rotate(300deg);
        animation-delay: -0.08333333333333333s;
        background: #1d3f72;
    }.ldio-b6q99j7ipo7 div:nth-child(12) {
        transform: rotate(330deg);
        animation-delay: 0s;
        background: #1d3f72;
    }
    .loadingio-spinner-spinner-9wb9qmm30a8 {
        width: 78px;
        height: 78px;
        display: block;
        margin: auto;
        overflow: hidden;
    }
    .ldio-b6q99j7ipo7 {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(0.78);
        backface-visibility: hidden;
        transform-origin: 0 0; /* see note above */
    }
    .ldio-b6q99j7ipo7 div { box-sizing: content-box; }
`

export default Home
