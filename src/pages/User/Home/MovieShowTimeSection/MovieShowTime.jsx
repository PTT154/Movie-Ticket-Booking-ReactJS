import CinemaTabBar from "./component/CinemaTabBar";
import CinemaClusterList from "./component/CinemaCluster/CinemaClusterList";
import ShowtimesList from "./component/CinemaShowtimes/ShowtimesList";

export default function MovieShowTime() {
  return (
    <div>
      <CinemaTabBar />
      <CinemaClusterList />
      <ShowtimesList />
    </div>
  );
}
