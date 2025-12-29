import React from "react";
import SeeMoreButton from "../_components/SeeMoreButton/SeeMoreButton";
export default function News() {
    return (
        <div className="w-full flex flex-col items-center pt-8 mx-auto max-w-[1265px]">
            <div
                className="mb-6 text-[18px] font-medium uppercase border-b-2 hover:text-orange-500 transition-all duration-300 
                        drop-shadow text-orange-500 border-orange-500 transition"
            >
                Tin tức
            </div>
            <div className="flex gap-8 w-full">
                {/* Tin lớn bên trái */}
                <div className="w-[50%]">
                    <div className="rounded-sm mb-3">
                        <img
                            className="shadow-2xl w-full h-[400px] rounded-sm transform transition-transform duration-300 hover:scale-102 cursor-pointer"
                            src="https://vcdn1-giaitri.vnecdn.net/2025/12/09/avatar-fire-ash-jake-sully-exc-2935-9431-1765247095.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=rpNQQKsY1Ozef47qcfVA7w"
                            alt="Avatar Fire And Ash"
                        />
                    </div>
                    <div className="text-[18px] font-medium mt-2 hover:text-orange-500 cursor-pointer transition-colors duration-200">
                        [Preview] Avatar Fire And Ash: Một Tuyệt Tác Nữa Của James Cameron?
                    </div>
                    {/* Nút thích và lượt xem */}
                    <div className="flex gap-2 mt-2">
                        <button className="flex items-center gap-1 px-2 py-0.5 bg-blue-500 text-white rounded-sm shadow hover:bg-blue-600 transition text-xs">
                            <i className="fa-solid fa-thumbs-up text-xs"></i>
                            <span>Thích</span>
                        </button>
                        <div className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-700 rounded-sm shadow text-xs">
                            <i className="fa-solid fa-eye text-xs"></i>
                            <span>2409</span>
                        </div>
                    </div>
                </div>
                {/* Tin nhỏ bên phải */}
                <div className="flex flex-col gap-4 w-[50%]">
                    <div className="flex gap-3">
                        <div className="rounded-sm">
                            <img
                                className="shadow-2xl h-[150px] w-[250px] rounded-sm object-fill transform transition-transform duration-300 hover:scale-102 cursor-pointer"
                                src="https://cdn2.tuoitre.vn/zoom/700_525/471584752817336320/2025/12/21/z73491424251258d4f250b5755f1c2f5ce9c019bb9e3b6-17662916805851879270865-26-177-665-1398-crop-17662917090432065525417.jpg"
                                alt="Zootopia 2"
                            />
                        </div>
                        <div className="flex-1 flex flex-col">
                            <div className="text-[18px] font-medium hover:text-orange-500 cursor-pointer transition-colors duration-200">
                                [Review] Zootopia 2: Disney Thừa Biết Khán Giả Muốn Gì!
                            </div>
                            <div className="flex gap-2 mt-2">
                                <button className="flex items-center gap-1 px-2 py-0.5 bg-blue-500 text-white rounded-sm shadow hover:bg-blue-600 transition text-xs">
                                    <i className="fa-solid fa-thumbs-up text-xs"></i>
                                    <span>Thích</span>
                                </button>
                                <div className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-700 rounded-sm shadow text-xs">
                                    <i className="fa-solid fa-eye text-xs"></i>
                                    <span>1200</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-sm">
                            <img
                                className="shadow-2xl h-[150px] w-[250px] rounded-sm object-fill transform transition-transform duration-300 hover:scale-102 cursor-pointer"
                                src="https://i.ex-cdn.com/danviet.vn/files/content/2025/12/10/quan-ky-nam-0829.jpg"
                                alt="Quán Kỳ Nam"
                            />
                        </div>
                        <div className="flex-1 flex flex-col">
                            <div className="text-[18px] font-medium hover:text-orange-500 cursor-pointer transition-colors duration-200">
                                [Review] Quán Kỳ Nam: Một Phim Việt Vừa Đẹp Lại Vừa Hay!
                            </div>
                            <div className="flex gap-2 mt-2">
                                <button className="flex items-center gap-1 px-2 py-0.5 bg-blue-500 text-white rounded-sm shadow hover:bg-blue-600 transition text-xs">
                                    <i className="fa-solid fa-thumbs-up text-xs"></i>
                                    <span>Thích</span>
                                </button>
                                <div className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-700 rounded-sm shadow text-xs">
                                    <i className="fa-solid fa-eye text-xs"></i>
                                    <span>980</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="rounded-sm">
                            <img
                                className="shadow-2xl h-[150px] w-[250px] rounded-sm object-fill transform transition-transform duration-300 hover:scale-102 cursor-pointer"
                                src="https://kenh14cdn.com/203336854389633024/2025/11/14/ngang0d19536a-eac9-4402-9b91-86388af518d5-17631007126741159852151-1763112572625-1763112572856267422308.jpg"
                                alt="Truy Tìm Long Diên Hương"
                            />
                        </div>
                        <div className="flex-1 flex flex-col">
                            <div className="text-[18px] font-medium hover:text-orange-500 cursor-pointer transition-colors duration-200">
                                [Review] Truy Tìm Long Diên Hương: Võ Thuật - Hài Dẫn Đầu Màn Ảnh Việt
                            </div>
                            <div className="flex gap-2 mt-2">
                                <button className="flex items-center gap-1 px-2 py-0.5 bg-blue-500 text-white rounded-sm shadow hover:bg-blue-600 transition text-xs">
                                    <i className="fa-solid fa-thumbs-up text-xs"></i>
                                    <span>Thích</span>
                                </button>
                                <div className="flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-700 rounded-sm shadow text-xs">
                                    <i className="fa-solid fa-eye text-xs"></i>
                                    <span>1500</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SeeMoreButton to="/news" />
        </div>
    );
}