import { getRandomLabel, getLabelColor } from "../../../../../../utils/movieLabelUtils";

export default function Showtime({ movie }) {
  // Thêm random label
  const randomLabel = getRandomLabel();
  const labelColor = getLabelColor(randomLabel);

  const showtimes = movie.lstLichChieuTheoPhim || [];

  // Helper: pad 2 số
  const pad2 = (n) => String(n).padStart(2, "0");

  // 1) Tách ngày & giờ (dạng số) để sort chuẩn, rồi format ra dd/mm và HH:mm
  const parsed = showtimes.map((st) => {
    const d = new Date(st.ngayChieuGioChieu);

    const day = d.getDate();
    const month = d.getMonth() + 1;
    const hour = d.getHours();
    const minute = d.getMinutes();

    return {
      dateKey: `${pad2(day)}/${pad2(month)}`, // dd/mm
      dateSort: month * 100 + day, // sort theo tháng rồi ngày
      timeKey: `${pad2(hour)}:${pad2(minute)}`, // HH:mm
      timeSort: hour * 60 + minute, // sort theo phút trong ngày
    };
  });

  // 2) DISTINCT + SORT ascending cho Ngày chiếu
  const uniqueDates = Array.from(
    new Map(parsed.map((p) => [p.dateKey, p.dateSort])).entries()
  )
    .sort((a, b) => a[1] - b[1])
    .map(([dateKey]) => dateKey);

  // 3) DISTINCT + SORT ascending cho Giờ chiếu
  const uniqueTimes = Array.from(
    new Map(parsed.map((p) => [p.timeKey, p.timeSort])).entries()
  )
    .sort((a, b) => a[1] - b[1])
    .map(([timeKey]) => timeKey);

  return (
    <div className="flex flex-col bg-neutral-primary-soft p-6 border border-default rounded-sm shadow-sm md:flex-row mb-4">
      <div className="relative h-60 w-40 mb-4 md:mb-0 overflow-hidden group">
        <img
          className="object-cover rounded-sm h-full w-full transition-transform duration-300 group-hover:scale-105 cursor-pointer"
          src={movie.hinhAnh}
          alt={movie.tenPhim}
        />
      </div>

      <div className="flex flex-col md:p-4 leading-normal flex-1">
        <h5 className="mb-3 text-xl font-semibold tracking-tight text-heading flex items-center gap-2 cursor-pointer">
          {/* Label */}
          <span className={`text-sm w-10 h-6 flex items-center justify-center text-white rounded-sm ${labelColor}`}>
            {randomLabel}
          </span>
          {movie.tenPhim}
        </h5>
        {/* ✅ 1 dòng: Ngày chiếu
        <div className="flex items-start gap-2 mb-3">
          <span className="text-sm font-semibold shrink-0">Ngày chiếu:</span>
          <div className="flex flex-wrap gap-2">
            {uniqueDates.map((d) => (
              <span key={d} className="px-2 py-1 text-sm border rounded">
                {d}
              </span>
            ))}
          </div>
        </div> */}

        <div className="mb-3 font-semibold">2D Phụ đề</div>
        {/* ✅ 1 dòng: Lịch chiếu */}
        <div className="flex items-start gap-2">
          <div className="flex flex-wrap gap-2">
            {uniqueTimes.map((t) => (
              <span
                key={t}
                className="w-14 h-7 flex items-center justify-center text-sm font-bold text-blue-400 border border-blue-400 rounded-sm cursor-pointer transition-transform duration-200 hover:scale-105"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}