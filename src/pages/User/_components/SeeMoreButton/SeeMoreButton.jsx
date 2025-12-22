import React from "react";

export default function SeeMoreButton({ onClick, children }) {
    return (
        <button
            className="mt-6 px-8 py-2 border border-orange-500 text-orange-500 rounded-sm flex items-center gap-2 transition
                hover:bg-orange-500 hover:text-white shadow-lg"
            onClick={onClick}
        >
            {children || "Xem thêm"}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </button>
    );
}