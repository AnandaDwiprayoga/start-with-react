import { createStore } from 'redux';

// CREATE ACTION 
const increament = () => {
    return {
        type : 'INCREAMENT'
    };
}

const decrement = () => {
    return {
        type : 'DECREMENT'
    };
}

// CREATE REDUCER
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREAMENT':
            return state + 1;
        case 'DECREMENT' : 
            return state - 1;
    }
}

// CREATE STORE
let store = createStore(counter,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    

store.subscribe(() => console.log(store.getState()));

store.dispatch(increament());
store.dispatch(increament());
store.dispatch(increament());
