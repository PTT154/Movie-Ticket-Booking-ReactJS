import React from "react";

const partnerLogos = [
  "https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
  "https://movienew.cybersoft.edu.vn/hinhanh/cgv.png",
  "https://movienew.cybersoft.edu.vn/hinhanh/cinestar.png",
  "https://movienew.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
  "https://movienew.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
  "https://movienew.cybersoft.edu.vn/hinhanh/megags.png",
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 pt-10 pb-4 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Cột 1 */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">GIỚI THIỆU</h4>
            <ul className="space-y-4 text-md">
              <li className="hover:text-orange-500 cursor-pointer transition">Về Chúng Tôi</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Thỏa Thuận Sử Dụng</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Quy Chế Hoạt Động</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Chính Sách Bảo Mật</li>
            </ul>
          </div>
          {/* Cột 2 */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">GÓC ĐIỆN ẢNH</h4>
            <ul className="space-y-4 text-md">
              <li className="hover:text-orange-500 cursor-pointer transition">Thể Loại Phim</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Bình Luận Phim</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Blog Điện Ảnh</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Phim Hay Tháng</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Phim IMAX</li>
            </ul>
          </div>
          {/* Cột 3 */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">HỖ TRỢ</h4>
            <ul className="space-y-4 text-md">
              <li className="hover:text-orange-500 cursor-pointer transition">Góp Ý</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Sale & Services</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Rạp / Giá Vé</li>
              <li className="hover:text-orange-500 cursor-pointer transition">Tuyển Dụng</li>
              <li className="hover:text-orange-500 cursor-pointer transition">FAQ</li>
            </ul>
          </div>
          {/* Cột 4: Mạng xã hội + Đối tác */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <h4 className="font-bold text-lg mb-2 text-white">KẾT NỐI</h4>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-blue-400 transition" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-red-500 transition" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="hover:text-pink-400 transition" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            {/* Đối tác đặt ngay dưới phần kết nối */}
            <div className="w-full flex flex-col items-start md:items-end mt-2">
              <div className="font-bold text-lg mb-2 text-white uppercase">
                Đối tác
              </div>
              <div className="grid grid-cols-3 justify-start md:justify-end gap-4">
                {partnerLogos.map((logo, idx) => (
                  <img
                    key={idx}
                    src={logo}
                    alt={`Đối tác ${idx + 1}`}
                    className="h-10 object-contain bg-white rounded shadow p-1 cursor-pointer transition-transform duration-300 hover:scale-105"
                  />
                ))}
              </div>
            </div>
            <div className="text-xs text-gray-400 mt-2">
              © {new Date().getFullYear()} MovieBooking. All rights reserved.
            </div>
          </div>
        </div>

        {/* Đường kẻ ngang */}
        <hr className="my-6 border-gray-700" />
        {/* Thông tin công ty */}
        <div className="text-center text-xs text-gray-400">
          CÔNG TY CỔ PHẦN PHIM THIÊN NGÂN | MST: 0101595681 | 63 Võ Văn Tần, Phường 6, Quận 3, TP.HCM, Việt Nam<br />
          ĐT: 028.3933.3030 - 19002224 (8:00 - 22:00) - Email: hotro@galaxycine.vn
        </div>
      </div>
      {/* FontAwesome CDN nếu chưa có */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </footer>
  );
}