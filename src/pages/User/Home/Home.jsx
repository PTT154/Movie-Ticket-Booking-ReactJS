import News from "../News/News";
import HeroCarousel from "./HeroSection/HeroCarousel";
import MovieList from "./MovieList/MovieList";
import MovieShowTime from "./MovieShowTimeSection/MovieShowTime";

export default function Home() {
    return (
        <div>
            <HeroCarousel />
            <MovieList />
            <MovieShowTime />
            <News />
        </div>
    );
}
