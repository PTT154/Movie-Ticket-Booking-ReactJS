import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCinema } from "../cinemaSlice";
import CinemaTab from "./CinemaTab";
import {
  fetchCinemaCluster,
  setActiveCinema,
} from "./CinemaCluster/ClusterSlice";
import {
  fetchShowTimes,
  setCinemaClusterID,
} from "./CinemaShowtimes/ShowtimesSlice";

export default function CinemaTabBar() {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.cinemaReducer);
  const { data: cluster } = useSelector((state) => state.cinemaClusterReducer);
  const { cinemaClusterID } = useSelector(
    (state) => state.cinemaShowTimesReducer
  );
  // fetch logo cinema
  useEffect(() => {
    dispatch(fetchCinema());
  }, []);

  // Sau khi fetched logo cinema => Auto fetch first cinema cluster
  useEffect(() => {
    if (data && data.length > 0) {
      const firstCinema = data[0];
      // 1. CinemaClusterList: Set default first cinema cho Active Cinema
      dispatch(
        setActiveCinema({
          maHeThongRap: firstCinema.maHeThongRap,
          logo: firstCinema.logo,
        })
      );
      // 2. CinemaClusterList: Set default first cinema cho Cluster cinema
      dispatch(fetchCinemaCluster(firstCinema.maHeThongRap));

      // 3. CinemaShowTimes: Set default first cinema cho Cluster cinema
      dispatch(fetchShowTimes(firstCinema.maHeThongRap));
    }
  }, [data, dispatch]);

  // Set default Cluster cinema ID khi Cluster đã có nhưng chưa click
  useEffect(() => {
    if (!cluster?.length) return; // Chưa có cluster cinema thì return luôn

    dispatch(setCinemaClusterID(cluster[0].maCumRap));
  }, [cluster, dispatch]);

  // Function click logo Cinema
  const handleCinemaID = (cinema) => {
    const { maHeThongRap, logo } = cinema;

    // 1. CinemaClusterList: Update active Cinema
    dispatch(setActiveCinema({ maHeThongRap, logo }));
    // 2. CinemaClusterList: Fetch Cụm rạp trong hệ thống rạp từ API
    dispatch(fetchCinemaCluster(maHeThongRap));

    // 3. CinemaShowTimes: Fetch show times của hệ thống rạp
    dispatch(fetchShowTimes(maHeThongRap));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex items-center gap-4 py-3">
      {data &&
        data.map((cinema) => (
          <CinemaTab
            key={cinema.maHeThongRap}
            cinema={cinema}
            onSelect={handleCinemaID}
          />
        ))}
    </div>
  );
}
