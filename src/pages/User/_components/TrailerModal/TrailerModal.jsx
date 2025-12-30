import React from "react";

function getYoutubeId(url) {
    if (!url) return "";
    const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&#]*)/;
    const match = url.match(regExp);
    return match && match[1] ? match[1] : "";
}

export default function TrailerModal({ trailer, onClose }) {
    const youtubeId = getYoutubeId(trailer);
    if (!youtubeId) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 z-999999" onClick={onClose}>
            <div className="relative bg-black rounded-sm overflow-hidden shadow-lg" onClick={e => e.stopPropagation()}>
                <button
                    className="absolute top-2 right-2 text-white text-2xl z-10"
                    onClick={onClose}
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
    );
}