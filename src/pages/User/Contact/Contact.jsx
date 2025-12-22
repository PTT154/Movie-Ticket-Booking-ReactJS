import React from "react";

export default function Contact() {
    return (
        <div className="max-w-3xl mx-auto mt-[120px] p-8 bg-gray-50 rounded-sm shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">Liên hệ với chúng tôi</h2>
            <form className="space-y-5">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Họ và tên</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Nhập họ và tên"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                        placeholder="Nhập email"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Nội dung</label>
                    <textarea
                        className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                        rows={5}
                        placeholder="Nhập nội dung liên hệ"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded-sm font-semibold hover:bg-orange-600 transition"
                >
                    Gửi liên hệ
                </button>
            </form>
            <div className="mt-8 text-center text-gray-600">
                <p>
                    <strong>Địa chỉ:</strong> 123 Đường ABC, Quận 1, TP.HCM
                </p>
                <p>
                    <strong>Điện thoại:</strong> 0123 456 789
                </p>
                <p>
                    <strong>Email:</strong> info@starcinema.vn
                </p>
            </div>
        </div>
    );
}