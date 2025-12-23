export default function Showtime({ movie }) {
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
    <div className="flex flex-col bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs md:flex-row md:max-w-xl">
      <img
        className="object-cover w-full rounded-base h-64 md:h-auto md:w-48 mb-4 md:mb-0"
        src={movie.hinhAnh}
        alt={movie.tenPhim}
      />

      <div className="flex flex-col md:p-4 leading-normal flex-1">
        <h5 className="mb-3 text-2xl font-bold tracking-tight text-heading">
          {movie.tenPhim}
        </h5>

        {/* ✅ 1 dòng: Ngày chiếu */}
        <div className="flex items-start gap-2 mb-3">
          <span className="text-sm font-semibold shrink-0">Ngày chiếu:</span>
          <div className="flex flex-wrap gap-2">
            {uniqueDates.map((d) => (
              <span key={d} className="px-2 py-1 text-sm border rounded">
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* ✅ 1 dòng: Lịch chiếu */}
        <div className="flex items-start gap-2">
          <span className="text-sm font-semibold shrink-0">Lịch chiếu:</span>
          <div className="flex flex-wrap gap-2">
            {uniqueTimes.map((t) => (
              <span key={t} className="px-2 py-1 text-sm border rounded">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
