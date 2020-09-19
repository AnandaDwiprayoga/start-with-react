import CONFIG from "../../global";

const AddMovieAction = (inputMovie) => {
    return {
        type : CONFIG.ADD_MOVIE,
        payload : inputMovie
    }
}

export default AddMovieAction;
