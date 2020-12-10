import CONFIG from "../utils/config";
import { TYPE_FETCH_GAMES, TYPE_FETCH_GAMES_LOADING, TYPE_FETCH_GAMES_SEARCH, TYPE_FETCH_GAME_DETAIL, TYPE_FETCH_GAME_DETAIL_LOADING } from "../utils/constant";


const fetchApi = async (url) => {
    try{
        const response = await fetch(url);
        const responseJson = await response.json();
        return responseJson;
    }catch(error){
        return Promise.reject(error);
    }
}

// karena pada actions tidak bisa menggunakan async maka
// menggunakan pola arroy function didalam arroy function 
// untuk dapat mengirimkan data payload dari async
export const loadGames = () => async (dispatch) => {

      //LOADING TERLEBIH DAHULU SEBELUM MELAKUKAN FETCHING
    dispatch({
        type: TYPE_FETCH_GAMES_LOADING
    })

    const resultPopulars = await fetchApi(CONFIG.ENDPOINT_POPULAR_GAMES);
    const resultNews = await fetchApi(CONFIG.ENDPOINT_NEW_GAMES);
    const resultUpcoming = await fetchApi(CONFIG.ENDPOINT_UPCOMING_GAMES);

    dispatch({
        type: TYPE_FETCH_GAMES,
        payload : {
            popular  : resultPopulars.results,
            upcoming : resultUpcoming.results,
            newGames : resultNews.results,
        }
    });
};

export const loadGameDetail = (id = 41494, from) => async (dispatch) => {

    //LOADING TERLEBIH DAHULU SEBELUM MELAKUKAN FETCHING
    dispatch({
        type: TYPE_FETCH_GAME_DETAIL_LOADING
    })

    const detail = await fetchApi(CONFIG.ENDPOINT_GAMES_DETAIL(id));
    const detailScreen = await fetchApi(CONFIG.ENDPOINT_GAMES_SCREENSHOTS(id));

    dispatch({
        type: TYPE_FETCH_GAME_DETAIL,
        payload: {
            game: detail,
            screen: detailScreen,
            from
        }
    })
}

export const searchGames = (name) => async (dispatch) => {
      //LOADING TERLEBIH DAHULU SEBELUM MELAKUKAN FETCHING
    dispatch({
        type: TYPE_FETCH_GAMES_LOADING
    });

    const search = await fetchApi(CONFIG.ENDPOINT_SEARCH_GAME(name));
    
    dispatch({
        type: TYPE_FETCH_GAMES_SEARCH,
        payload: {
            searched: search.results
        }
    });
}