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
      className="cursor-pointer flex items-start gap-3 p-3 rounded-sm border border-gray-200 hover:bg-gray-50 transition shadow-sm"
    >
      {/* Logo left */}
      <div className="w-10 h-10 flex items-center justify-center shrink-0">
        <img
          src={activeCinema.logo}
          alt={activeCinema.maHeThongRap}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Right text */}
      <div className="min-w-0">
        <p className="font-semibold leading-5">{cluster.tenCumRap}</p>
        <p className="text-sm text-gray-500 leading-5">
          {cluster.diaChi}
        </p>
      </div>
    </div>
  );
}