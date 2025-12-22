import React from "react";
import SeeMoreButton from "../_components/SeeMoreButton/SeeMoreButton";
export default function News() {
    return (

        <div className="w-full min-h-screen flex flex-col items-center pt-8 mx-auto max-w-[1265px]">
            <div
                className="mb-6 text-[18px] font-medium uppercase border-b-2 hover:text-orange-500 transition-all duration-300 
                        drop-shadow text-orange-500 border-orange-500 transition"
            >
                Tin tức
            </div>
            <div className="flex gap-8 w-full">
                {/* Tin lớn bên trái */}
                <div className="w-[50%]">
                    <img className="w-full h-[400px] rounded-sm mb-3"
                        src="https://vcdn1-giaitri.vnecdn.net/2025/12/09/avatar-fire-ash-jake-sully-exc-2935-9431-1765247095.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=rpNQQKsY1Ozef47qcfVA7w">
                    </img>
                    <div className="text-[17px] font-semibold mt-2">
                        [Preview] Avatar Fire And Ash: Một Tuyệt Tác Nữa Của James Cameron?
                    </div>
                </div>
                {/* Tin nhỏ bên phải */}
                <div className="flex flex-col gap-4 w-[50%]">
                    <div className="flex gap-3">
                        <img className="h-[150px] w-[250px] rounded-sm object-fill"
                            src="https://cdn2.tuoitre.vn/zoom/700_525/471584752817336320/2025/12/21/z73491424251258d4f250b5755f1c2f5ce9c019bb9e3b6-17662916805851879270865-26-177-665-1398-crop-17662917090432065525417.jpg">
                        </img>
                        <div className="text-[15px] font-medium flex-1">
                            [Review] Zootopia 2: Disney Thừa Biết Khán Giả Muốn Gì!
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <img className="h-[150px] w-[250px] rounded-sm object-fill"
                            src="https://i.ex-cdn.com/danviet.vn/files/content/2025/12/10/quan-ky-nam-0829.jpg">
                        </img>
                        <div className="text-[15px] font-medium flex-1">
                            [Review] Quán Kỳ Nam: Một Phim Việt Vừa Đẹp Lại Vừa Hay!
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <img className="h-[150px] w-[250px] rounded-sm object-fill"
                            src="https://kenh14cdn.com/203336854389633024/2025/11/14/ngang0d19536a-eac9-4402-9b91-86388af518d5-17631007126741159852151-1763112572625-1763112572856267422308.jpg">
                        </img>
                        <div className="text-[15px] font-medium flex-1">
                            [Review] Truy Tìm Long Diên Hương: Võ Thuật - Hài Dẫn Đầu Màn Ảnh Việt
                        </div>
                    </div>
                </div>
            </div>
            <SeeMoreButton onClick={() => { alert("Clicked") }} />
        </div>
    );
}