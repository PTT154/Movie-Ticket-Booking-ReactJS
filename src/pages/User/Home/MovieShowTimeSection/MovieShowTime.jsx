import CinemaTabBar from "./component/CinemaTabBar";
import CinemaClusterList from "./component/CinemaCluster/CinemaClusterList";
import ShowtimesList from "./component/CinemaShowtimes/ShowtimesList";
import SeeMoreButton from "../../_components/SeeMoreButton/SeeMoreButton";

export default function MovieShowTime() {
  return (
    <div className="py-10">
      <div className="w-full flex flex-col items-center mx-auto max-w-[1265px]">
        {/* Tiêu đề */}
        <div className="mb-6 text-[18px] font-medium uppercase border-b-2 drop-shadow text-orange-500 border-orange-500">
          Lịch chiếu
        </div>
        {/* Khung trắng bao toàn bộ tab + 2 cột */}
        <div className="w-full bg-white rounded-sm shadow-lg p-4 min-h-[400px] border border-gray-200">
          {/* Logo rạp (tab ngang) */}
          <CinemaTabBar />
          <div className="w-full border-b border-gray-200"></div>
          {/* Khung 2 cột: trái là rạp, phải là phim & suất chiếu */}
          <div className="flex">
            {/* Cột trái: danh sách rạp */}
            <div className="pt-4 w-2/5 pr-4 overflow-y-auto max-h-[500px] border-r border-gray-200">
              <CinemaClusterList />
            </div>
            {/* Cột phải: phim & suất chiếu */}
            <div className="pt-4 w-3/5 pl-4 overflow-y-auto max-h-[500px]">
              <ShowtimesList />
            </div>
          </div>
        </div>
        {/* Nút Xem thêm */}
        <SeeMoreButton to="/showtimes" />
      </div>
    </div>
  );
}
