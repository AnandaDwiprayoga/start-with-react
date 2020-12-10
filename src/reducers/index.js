import {gameReducers, gameDetailReducer} from "./gameReducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    gameReducers,
    gameDetailReducer
});

export default allReducers;