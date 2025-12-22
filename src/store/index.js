import {configureStore} from "@reduxjs/toolkit"
import movieListReducer from "./movieListSlice";

const store = configureStore({
    reducer: {
        movieListReducer,
    },
});

export default store;