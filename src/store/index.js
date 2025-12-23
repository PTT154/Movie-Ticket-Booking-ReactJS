import { configureStore } from "@reduxjs/toolkit";
import cinemaReducer from "./../pages/User/Home/MovieShowTimeSection/cinemaSlice";
import cinemaClusterReducer from "./../pages/User/Home/MovieShowTimeSection/component/CinemaCluster/ClusterSlice";
import cinemaShowTimesReducer from "../pages/User/Home/MovieShowTimeSection/component/CinemaShowtimes/ShowtimesSlice";

const store = configureStore({
  reducer: { cinemaReducer, cinemaClusterReducer, cinemaShowTimesReducer },
});

export default store;
