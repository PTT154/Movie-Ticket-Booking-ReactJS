import React from "react";

export default function QuickBookingBar() {
    return (
        <div className="flex items-center bg-gray-50 rounded-sm w-[75%] shadow-md">
            {/* Step 1 */}
            <div className="ml-4 flex items-center justify-between gap-2 w-[20%]">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-500 text-white text-sm font-semibold">1</span>
                <span className="text-black">Chọn phim</span>
                <span className="mx-2 text-gray-500 text-sm">
                    <i className="fa-solid fa-chevron-down"></i>
                </span>
            </div>
            {/* Step 2 */}
            <div className="ml-4 flex items-center justify-between gap-2 w-[20%]">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-500 text-white text-sm font-semibold">2</span>
                <span className="text-black">Chọn rạp</span>
                <span className="mx-2 text-gray-500 text-sm">
                    <i className="fa-solid fa-chevron-down"></i>
                </span>
            </div>
            {/* Step 3 */}
            <div className="ml-4 flex items-center justify-between gap-2 w-[20%]">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-500 text-white text-sm font-semibold">3</span>
                <span className="text-black">Chọn ngày</span>
                <span className="mx-2 text-gray-500 text-sm">
                    <i className="fa-solid fa-chevron-down"></i>
                </span>
            </div>
            {/* Step 4 */}
            <div className="ml-4 flex items-center justify-between gap-2 w-[20%]">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-500 text-white text-sm font-semibold">4</span>
                <span className="text-black">Chọn suất</span>
                <span className="mx-2 text-gray-500 text-sm">
                    <i className="fa-solid fa-chevron-down"></i>
                </span>
            </div>
            {/* Button */}
            <button className="w-[20%] bg-orange-500 text-white px-6 py-3 rounded-sm hover:bg-orange-600 transition">
                Mua vé nhanh
            </button>
        </div>
    );
}