import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchMovieList } from "./slice";
import MovieCard from "../../_components/MovieCard/MovieCard";
import { useState } from 'react';
import QuickBookingBar from "../../_components/QuickBookingBar/QuickBookingBar";

export default function MovieList() {
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
        return filteredMovies?.slice(0, 8).map((movie) => (
            <MovieCard key={movie.maPhim} data={movie} />
        ));
    }

    return (
        <div className="w-full flex flex-col items-center pt-10">
            <QuickBookingBar />
            {/* Tabs */}
            <div className="flex gap-10 mb-6 mt-12">
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
            <button
                className="mt-6 px-8 py-2 border border-orange-500 text-orange-500 rounded-sm flex items-center gap-2 transition
        hover:bg-orange-500 hover:text-white"
            // onClick={() => { /* sau này xử lý chuyển trang ở đây */ }}
            >
                Xem thêm
                {/* Icon mũi tên phải (SVG) */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    )
}
