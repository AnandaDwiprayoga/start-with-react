const { default: CONFIG } = require("../../global");

const addMovieReducer = (state = [
    {
        name: 'Harry Potter',
        price : '$10',
        id: 23124
    },
    {
        name: 'Ghame of Thrones',
        price : '$10',
        id: 2566124
    },
    {
        name: 'Inception',
        price : '$10',
        id: 23524
    }
], action) => {
    switch (action.type) {
        case CONFIG.ADD_MOVIE :
            return [...state, action.payload]
        default:
            return state;
    }
}

export default addMovieReducer;