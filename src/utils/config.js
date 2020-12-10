import moment from "moment";
import { BASE_URL } from "./constant";

const currentDate = moment(new Date()).format('YYYY-MM-DD');
const lastYear = moment(new Date()).subtract(1, "year").format('YYYY-MM-DD');
const nextYear = moment(new Date()).add(1, "year").format('YYYY-MM-DD');

const CONFIG = {
    ENDPOINT_POPULAR_GAMES: `${BASE_URL}games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`,
    ENDPOINT_UPCOMING_GAMES: `${BASE_URL}games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`,
    ENDPOINT_NEW_GAMES: `${BASE_URL}games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`,
    ENDPOINT_GAMES_DETAIL : (id) => `${BASE_URL}games/${id}`,
    ENDPOINT_GAMES_SCREENSHOTS : (id) => `${BASE_URL}games/${id}/screenshots`,
    ENDPOINT_SEARCH_GAME: (name) => `${BASE_URL}games?search=${name}&page_size=9`,
}

export default CONFIG;