import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../_components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import { fetchMovieList } from "../../../store/movieListSlice";

export default function Movies() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.movieListReducer);

  // Tab state: "dangChieu" hoặc "sapChieu"
  const [tab, setTab] = useState("dangChieu");

  //Lấy api list movie
  useEffect(() => {
    dispatch(fetchMovieList());
  }, [])

  const renderMovieList = () => {
    const { data } = state;

    // Lọc phim dựa trên tab hiện tại
    const filteredMovies = data?.filter((movie) => {
      if (tab === "dangChieu") return movie.dangChieu;
      if (tab === "sapChieu") return movie.sapChieu;
      return false;
    })

    return filteredMovies?.map((movie) => (
      <MovieCard key={movie.maPhim} data={movie} />
    ));
  }
  return (
    <div className="w-full flex flex-col items-center">
      {/* Tabs */}
      <div className="flex gap-10 mb-6 mt-6">
        <button
          className={`text-[18px] font-medium uppercase border-b-2 hover:text-orange-500 transition-all duration-300 
                            ${tab === "dangChieu" ? "drop-shadow text-orange-500 border-orange-500" : "text-black border-transparent"} transition`}
          onClick={() => setTab("dangChieu")}
        >
          Đang chiếu
        </button>
        <button
          className={`mr-5 text-[18px] font-medium uppercase border-b-2 hover:text-orange-500 transition-all duration-300 
                            ${tab === "sapChieu" ? "drop-shadow text-orange-500 border-orange-500" : "text-black border-transparent"} transition`}
          onClick={() => setTab("sapChieu")}
        >
          Sắp chiếu
        </button>
      </div>
      {/* Movie list */}
      <div className="grid grid-cols-4 gap-6 mx-auto max-w-[1265px]">{renderMovieList()}</div>
    </div>
  )
}