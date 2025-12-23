import { setCinemaClusterID } from "../CinemaShowtimes/ShowtimesSlice";
import { useDispatch } from "react-redux";

export default function CinemaCluster(props) {
  const { cluster, activeCinema } = props;
  const dispatch = useDispatch();

  const handleCinemaClusterID = (cineClusterID) => {
    dispatch(setCinemaClusterID(cineClusterID.maCumRap));
  };

  return (
    <div
      onClick={() => handleCinemaClusterID(cluster)}
      className="flex items-start gap-3 p-3 rounded-lg border hover:bg-gray-50 transition"
    >
      {/* Logo left */}
      <div className="w-12 h-12 flex items-center justify-center shrink-0">
        <img
          src={activeCinema.logo}
          alt={activeCinema.maHeThongRap}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Right text */}
      <div className="min-w-0">
        <p className="font-semibold leading-5 truncate">{cluster.tenCumRap}</p>
        <p className="text-sm text-gray-500 leading-5 line-clamp-2">
          {cluster.diaChi}
        </p>
      </div>
    </div>
  );
}
