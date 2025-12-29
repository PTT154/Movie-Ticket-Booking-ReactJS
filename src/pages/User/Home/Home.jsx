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
            <div className="border-b-4 border-gray-100"></div>
            <News />
        </div>
    );
}