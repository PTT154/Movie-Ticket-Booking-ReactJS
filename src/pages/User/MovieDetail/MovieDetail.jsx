import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetail } from "../../../store/movieDetailSlice";
import { useState, useEffect } from "react";
import TrailerModal from "../_components/TrailerModal/TrailerModal";
import NowShowing from "./NowShowing";


export default function MovieDetail() {
    const param = useParams();
    const { id } = param;
    const dispatch = useDispatch();
    const state = useSelector((state) => state.movieDetailReducer);
    // State để mở modal trailer
    const [showTrailer, setShowTrailer] = useState(false);

    useEffect(() => {
        if (id) {
            dispatch(fetchMovieDetail(id));
        }
    }, [dispatch, id]);

    if (state.loading) return <div>Loading...</div>
    if (state.error) return <div>Error: {state.error.message}</div>
    if (!state.data) return null;

    const {
        tenPhim,
        hinhAnh,
        trailer,
        moTa,
        ngayKhoiChieu,
        danhGia,
    } = state.data;

    return (
        <div className="">
            {/* Banner */}
            <div className="w-full bg-black h-[500px] relative flex items-center justify-center overflow-hidden">
                <div className="w-[60%] h-full relative flex items-center justify-center rounded-lg overflow-hidden z-10">
                    <img src={hinhAnh} alt={tenPhim} className="object-cover w-full h-full rounded-lg" />
                    {/* Overlay radial gradient */}
                    <div className="absolute inset-0 pointer-events-none rounded-lg"
                        style={{
                            background: "radial-gradient(circle, rgba(0,0,0,0) 55%, rgba(0,0,0,0.85) 100%)"
                        }}
                    ></div>
                </div>
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <button
                    className="absolute z-20 inline-block bg-black bg-opacity-60 rounded-full w-20 h-20 text-center leading-[80px] text-4xl text-white no-underline"
                    onClick={() => setShowTrailer(true)}
                >
                    <i className="fa-solid fa-play translate-x-1"></i>
                </button>
                <div className="absolute z-20 bottom-2 left-8 bg-black bg-opacity-70 px-5 py-2 rounded text-lg">
                    Khởi chiếu: {new Date(ngayKhoiChieu).toLocaleDateString()}
                </div>
            </div>

            <div className="flex mx-auto max-w-[1265px] gap-8">
                <div className="w-[75%]">
                    {/* Movie Info */}
                    <div className="flex pt-4">
                        {/* Poster */}
                        <div className="w-auto min-w-[180px] max-w-[300px] h-[400px] rounded-xs shadow mr-8 z-999 border-2 border-white overflow-hidden translate-y-[-70px] shadow-xl">
                            <img src={hinhAnh} alt={tenPhim} className="w-full h-full object-cover" />
                        </div>
                        {/* Info */}
                        <div className="flex-1">
                            <div className="flex items-center mb-2">
                                <h2 className="text-2xl font-semibold">{tenPhim}</h2>
                                <span className="bg-orange-500 text-white rounded-xs px-3 py-1 font-bold ml-4">T16</span>
                            </div>
                            <div className="flex flex-wrap gap-4 text-base mb-2">
                                <span className="flex items-center gap-1 text-sm">
                                    {/* Clock Icon SVG */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    180 Phút
                                </span>
                                <span className="flex items-center gap-1 text-sm"><i className="fa fa-calendar text-orange-500"></i>{new Date(ngayKhoiChieu).toLocaleDateString()}</span>
                            </div>
                            <div className="text-xl my-3 flex items-center gap-2">
                                <i className="fa-solid fa-star text-orange-500"></i>
                                <span className="text-xl">{danhGia}.00</span>
                                <span className="text-sm text-gray-400">(54 votes)</span>
                            </div>
                            <div className="flex flex-col gap-1 text-sm mb-2 text-gray-400">
                                <div className="mb-3">Quốc gia:
                                    <span className="text-black"> Việt Nam</span>
                                </div>
                                <div className="mb-3">Nhà sản xuất:
                                    <span className="text-black"> Mega PTT</span>
                                </div>
                                <div className="flex gap-2 items-center flex-wrap mb-3">
                                    Thể loại:
                                    <span className="rounded-sm px-2 py-1 border border-gray-400 text-black">Tình Cảm</span>
                                    <span className="rounded-sm px-2 py-1 border border-gray-400 text-black">Hành Động</span>
                                </div>
                                <div className="mb-3">
                                    Đạo diễn:
                                    <span className="rounded-sm px-2 py-1 border border-gray-400 text-black ml-2">Nguyễn Minh Phước</span>
                                </div>
                                <div className="flex gap-2 items-center flex-wrap">Diễn viên:
                                    <span className="rounded-sm px-2 py-1 border border-gray-400 text-black">Quang Tuấn</span>
                                    <span className="rounded-sm px-2 py-1 border border-gray-400 text-black">Hoài Lâm</span>
                                    <span className="rounded-sm px-2 py-1 border border-gray-400 text-black">Quách Ngọc Ngoan</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Description */}
                    <div>
                        <h3 className="border-l-4 border-blue-700 pl-3 mb-4 text-xl font-semibold">Nội dung phim</h3>
                        <div className="text-lg leading-relaxed text-gray-700">{moTa}</div>
                    </div>
                </div>
                <div className="w-[25%]">
                    <NowShowing />
                </div>
            </div>

            {/* refactor Trailer Modal */}
            {showTrailer && (
                <TrailerModal trailer={trailer} onClose={() => setShowTrailer(false)} />
            )}
        </div>
    );
}