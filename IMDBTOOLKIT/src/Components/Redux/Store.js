import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './MovieSlice';
import  apifetchData  from "./movieFetch";
 const Store = configureStore({
    reducer:{
        movie: moviesReducer,
        apifetch:apifetchData
    },
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

export default Store;