import React from 'react'

function getRandomLabel() {
    const labels = ["P", "C16", "C18"];
    return labels[Math.floor(Math.random() * labels.length)];
}

function getLabelColor(label) {
    switch (label) {
        case "P":
            return "bg-green-400";
        case "C16":
            return "bg-orange-400";
        case "C18":
            return "bg-red-500";
    }
}

export default function MovieCard({ data }) {
    // destructuring các trường cần thiết từ data
    const { tenPhim, danhGia, hinhAnh } = data || {};
    const randomLabel = getRandomLabel();
    const labelColor = getLabelColor(randomLabel);

    return (
        <div className="w-full rounded-sm overflow-hidden bg-gray-150 p-1.5 font-sans group shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                    <button className="w-[130px] h-[42px] border border-white text-white font-semibold px-5 py-2 rounded-sm flex items-center gap-2 bg-black/30 hover:bg-black/50 transition">
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
        </div>
    )
}
