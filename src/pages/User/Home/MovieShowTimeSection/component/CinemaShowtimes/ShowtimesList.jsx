import { useSelector } from "react-redux";
import Showtime from "./Showtime";

export default function ShowtimesList() {
  //   const { data } = useSelector((state) => state.cinemaShowTimesReducer);
  //   const stateCinemaClusterID = useSelector((state) => state.)
  const { data } = useSelector((state) => state.cinemaShowTimesReducer);
  const { cinemaClusterID } = useSelector(
    (state) => state.cinemaShowTimesReducer
  );

  const listCinemaCluster = data?.[0].lstCumRap;

  const selectCluster = listCinemaCluster?.find(
    (cluster) => cluster.maCumRap === cinemaClusterID
  );

  return (
    <div>
      {selectCluster?.danhSachPhim?.map((movie) => (
        <Showtime
          key={movie.maPhim}
          movie={movie}
        />
      ))}
    </div>
  );
}