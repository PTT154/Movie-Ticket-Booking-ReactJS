import News from "../News/News";
import HeroCarousel from "./HeroSection/HeroCarousel";
import MovieList from "./MovieList/MovieList";

export default function Home() {
    return (
        <div>
            <HeroCarousel />
            <MovieList />
            <News />
        </div>
    );
}