import {configureStore} from "@reduxjs/toolkit"
import movieListReducer from "../pages/User/Home/MovieList/slice";

const store = configureStore({
    reducer: {
        movieListReducer,
    },
});

export default store;