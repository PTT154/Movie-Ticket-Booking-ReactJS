import React from 'react'
import { useState } from 'react';
import { getRandomLabel, getLabelColor } from "../../../../utils/movieLabelUtils";

export default function MovieCard({ data }) {
    // destructuring các trường cần thiết từ data
    const { tenPhim, danhGia, hinhAnh, trailer } = data || {};
    const randomLabel = getRandomLabel();
    const labelColor = getLabelColor(randomLabel);

    // State để mở modal trailer
    const [showTrailer, setShowTrailer] = useState(false);

    // Hàm lấy id video từ link youtube
    const getYoutubeId = (url) => {
        if (!url) return "";
        const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&#]*)/;
        const match = url.match(regExp);
        return match && match[1] ? match[1] : "";
    };
    const youtubeId = getYoutubeId(trailer);

    return (
        <div className="w-full rounded-sm overflow-hidden bg-gray-50 p-1.5 font-sans group shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <div className="relative w-full h-[430px] bg-gray-300 rounded-sm mb-2 flex items-center justify-center overflow-hidden">
                <img src={hinhAnh} alt={tenPhim} className="w-full h-full object-cover rounded-sm" />
                {/* Nhãn độ tuổi */}
                <span className={`absolute text-center w-12 h-7 top-2 left-2 ${labelColor} text-white rounded-sm px-2 py-[2px] text-md font-semibold`}>
                    {randomLabel}
                </span>
                {/* Điểm IMDb */}
                <span className="absolute font-semibold w-14 h-7 top-2 right-2 bg-black/45 text-white rounded-sm px-2 py-[2px] text-md flex items-center">
                    {danhGia || "6.9"}
                    <span className="text-yellow-400 ml-1">★</span>
                </span>
                {/* Overlay xám khi hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                {/* Nút khi hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <button className="w-[130px] h-[42px] bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-sm flex items-center gap-2 shadow">
                        <i className="fa-solid fa-ticket"></i> Mua vé
                    </button>
                    <button className="w-[130px] h-[42px] border border-white text-white font-semibold px-5 py-2 rounded-sm flex items-center gap-2 bg-black/30 hover:bg-black/50 transition"
                        onClick={() => setShowTrailer(true)}>
                        <i className="fa-solid fa-circle-play"></i> Trailer
                    </button>
                </div>
            </div>

            <div className="mt-2 flex justify-between">
                <div>
                    <div className="text-[16px] font-medium">{tenPhim || "Tên phim"}</div>
                    <div className="text-[13px] text-gray-700">
                        180 phút - {danhGia || "6.9"} IMDb
                    </div>
                </div>
            </div>

            {/* Modal Trailer */}
            {showTrailer && youtubeId && (
                <div className="fixed inset-0 z-99999999 flex items-center justify-center bg-black/70"
                    onClick={() => setShowTrailer(false)} //Click ngoài modal để đóng
                >
                    <div className="relative bg-black rounded-sm overflow-hidden shadow-lg"
                        onClick={e => e.stopPropagation()} //Click trong modal không đóng
                    >
                        <button
                            className="absolute top-2 right-2 text-white text-2xl z-10"
                            onClick={() => setShowTrailer(false)}
                        >
                            &times;
                        </button>
                        <iframe
                            width="800"
                            height="500"
                            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    )
}
