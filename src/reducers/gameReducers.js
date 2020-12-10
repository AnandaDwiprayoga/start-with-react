import { 
    TYPE_FETCH_GAMES, 
    TYPE_FETCH_GAME_DETAIL, 
    TYPE_RESET_DETAIL,
    TYPE_FETCH_GAME_DETAIL_LOADING,
    TYPE_FETCH_GAMES_LOADING,
    TYPE_FETCH_GAMES_SEARCH,
    TYPE_FETCH_GAMES_SEARCH_RESET
} from "../utils/constant";

const initGameState = {
    popular : [],
    newGames : [],
    upcoming : [],
    searched : [],
    isLoading: false,
}

const initGameDetail = {
    game: null,
    screens: null,
    from: null,
    isLoading: false,
}

const gameReducers = (state = initGameState, action) =>  {
    switch(action.type){
        case TYPE_FETCH_GAMES : 
            return {...state, ...action.payload, isLoading : false}
        case TYPE_FETCH_GAMES_LOADING:
            return {...state, isLoading : true}
        case TYPE_FETCH_GAMES_SEARCH:
            return {
                ...state, 
                searched: action.payload.searched,
                isLoading: false, 
            };
        case TYPE_FETCH_GAMES_SEARCH_RESET: 
            return {
                ...state, 
                searched: []
            }
        default : 
            return state;
    }
}

const gameDetailReducer = (state = initGameDetail, action) => {
    switch(action.type) {
        case TYPE_FETCH_GAME_DETAIL:
            return {
                game: action.payload.game,
                screens: action.payload.screen,
                from: action.payload.from,
                isLoading: false
            };
        case TYPE_RESET_DETAIL :
            return {
                game: null,
                screens: null,
                from: null,
                isLoading: false
            }
        case TYPE_FETCH_GAME_DETAIL_LOADING : 
            return {
                ...state,
                isLoading: true,
            }
        default : 
            return state;
    }
};


export {
    gameReducers,
    gameDetailReducer
};

