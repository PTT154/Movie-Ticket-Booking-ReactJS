import { useSelector } from "react-redux";
import CinemaCluster from "./CinemaCluster";

export default function CinemaClusterList() {
  const { data, activeCinema } = useSelector(
    (state) => state.cinemaClusterReducer
  );

  if (!data || !activeCinema) return null;

  return (
    <div className="space-y-3">
      {data &&
        data.map((cluster) => (
          <CinemaCluster
            key={cluster.maCumRap}
            cluster={cluster}
            activeCinema={activeCinema}
          />
        ))}
    </div>
  );
}