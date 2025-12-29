import { configureStore } from "@reduxjs/toolkit"
import movieListReducer from "./movieListSlice";
import cinemaReducer from "./../pages/User/Home/MovieShowTimeSection/cinemaSlice";
import cinemaClusterReducer from "./../pages/User/Home/MovieShowTimeSection/component/CinemaCluster/ClusterSlice";
import cinemaShowTimesReducer from "../pages/User/Home/MovieShowTimeSection/component/CinemaShowtimes/ShowtimesSlice";
import movieDetailReducer from "./movieDetailSlice";

const store = configureStore({
  reducer: {
    movieListReducer,
    cinemaReducer,
    cinemaClusterReducer,
    cinemaShowTimesReducer,
    movieDetailReducer,
  },
});

export default store;