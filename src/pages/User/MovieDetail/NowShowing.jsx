import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovieList } from "../../../store/movieListSlice";
import { getRandomLabel, getLabelColor } from "../../../utils/movieLabelUtils";
import { Link } from "react-router-dom";

export default function NowShowing() {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.movieListReducer);

    //Lấy api list movie
    useEffect(() => {
        dispatch(fetchMovieList());
    }, []);

    const renderNowShowingMovies = () => {
        const { data } = state;

        //Lọc phim đang chiếu
        const NowShowingMovies = data?.filter((movie) => movie.dangChieu);

        return NowShowingMovies?.slice(0, 10).map((movie) => {
            const randomLabel = getRandomLabel();
            const labelColor = getLabelColor(randomLabel);

            return (
                <div
                    key={movie.maPhim}
                    className="flex mb-4 group cursor-pointer"
                >
                    <Link to={`/movie-detail/${movie.maPhim}`} className="w-20 h-28 rounded-xs mr-3">
                        <img
                            src={movie.hinhAnh}
                            alt={movie.tenPhim}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-xs"
                        />
                    </Link>
                    <div className="flex-1 flex flex-col gap-2 justify-center">
                        <span className={`text-center w-10 h-7 top-2 left-2 ${labelColor} text-white rounded-xs text-sm font-bold flex items-center justify-center`}>
                            {randomLabel}
                        </span>
                        <Link to={`/movie-detail/${movie.maPhim}`} className="text-md font-medium transition-colors duration-300 group-hover:text-orange-500">
                            {movie.tenPhim}
                        </Link>
                        <p className="text-sm text-gray-600"><span className="text-yellow-400">★</span> {movie.danhGia}.0</p>
                    </div>
                </div>
            );
        });
    }


    return (
        <div className="mt-5">
            <h3 className="border-l-4 border-blue-700 pl-3 mb-4 text-xl">PHIM ĐANG CHIẾU</h3>
            {renderNowShowingMovies()}
        </div>
    )
}