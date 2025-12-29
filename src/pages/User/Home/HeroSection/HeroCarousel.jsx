/**
 *
 * -------------------------------
 * ⏱️ TIMELINE THỰC TẾ
 * -------------------------------
 *
 * 1️⃣ React render JSX:
 *    <div data-carousel="slide">...</div>
 *
 *    → React tạo DOM node
 *    → DOM được gắn vào document
 *
 * 2️⃣ Sau khi render xong, React mới chạy useEffect
 *
 * 3️⃣ initFlowbite() được gọi
 *
 * 4️⃣ Flowbite quét DOM:
 *    document.querySelectorAll('[data-carousel]')
 *
 * 5️⃣ Flowbite tìm thấy carousel
 *    - Khởi tạo state JS nội bộ (slide hiện tại, index…)
 *    - Gắn event listener cho:
 *        + data-carousel-prev
 *        + data-carousel-next
 *        + data-carousel-slide-to
 *    - Thao tác class:
 *        + Bỏ 'hidden' khỏi slide active
 *        + Thêm animation classes
 *
 * 6️⃣ Kết quả:
 *    → Carousel hoạt động (next/prev, indicator, animation)
 *
 */

import { useEffect } from "react";
import { initFlowbite } from "flowbite";

export default function HeroCarousel() {
  useEffect(() => {
    // đảm bảo DOM đã có rồi mới init
    initFlowbite(); // hoặc initCarousels();
  }, []);
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      {/* <div className="relative h-150 overflow-hidden rounded-base md:h-170"> */}
      {/* <div className="relative overflow-hidden rounded-base h-[360px] md:h-[480px] lg:h-[560px]"> */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "calc(100vh - 92px)" }}
      >
        {/* Item 1 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://images.angelstudios.com/image/upload/q_auto,f_webp,c_fill,g_faces/v1742923896/king-of-kings-horz-img-01b_qgeths.webp"
            // className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            className="absolute inset-0 w-full h-full object-cover"
            alt="..."
          />
        </div>
        {/* Item 2 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://roadtovrlive-5ea0.kxcdn.com/wp-content/uploads/2025/09/avatar-3.jpg"
            // className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            className="absolute inset-0 w-full h-full object-cover"
            alt="..."
          />
        </div>
        {/* Item 3 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/71c47741-e31c-4911-8d2d-2ebc0278de75/compose?aspectRatio=1.78&format=webp&width=1200"
            // className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            className="absolute inset-0 w-full h-full object-cover"
            alt="..."
          />
        </div>
        {/* Item 4 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/cg_buy_tickets_now_for_avatar_fire_and_ash_article_thum_c3527ff5.jpeg?region=0,0,1250,680"
            // className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            className="absolute inset-0 w-full h-full object-cover"
            alt="..."
          />
        </div>
        {/* Item 5 */}
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="https://cdn-media.sforum.vn/storage/app/media/phuonganh/cach-xem-hoang-tu-quy.jpg"
            // className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            className="absolute inset-0 w-full h-full object-cover"
            alt="..."
          />
        </div>
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="w-3 h-3 rounded-base bg-white/80 border border-orange-500"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to={0}
        />
        <button
          type="button"
          className="w-3 h-3 rounded-base bg-white/80 border border-orange-500"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to={1}
        />
        <button
          type="button"
          className="w-3 h-3 rounded-base bg-white/80 border border-orange-500"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to={2}
        />
        <button
          type="button"
          className="w-3 h-3 rounded-base bg-white/80 border border-orange-500"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to={3}
        />
        <button
          type="button"
          className="w-3 h-3 rounded-base bg-white/80 border border-orange-500"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to={4}
        />
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-5 h-5 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m15 19-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg
            className="w-5 h-5 text-white rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m9 5 7 7-7 7"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
