import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/tmdbApi';
import MovieList from '../../components/MovieList/MovieList.jsx';

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies().then(setMovies);
    }, []);

    return (
        <div>
            <h1>Popular Movies</h1>
            <MovieList movies={movies} />
        </div>
    );
};

export default HomePage;