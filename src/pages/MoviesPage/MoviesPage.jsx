import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/tmdbApi';
import MovieList from '../../components/MovieList/MovieList.jsx';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';

    useEffect(() => {
        if (query) {
            searchMovies(query).then(setMovies).catch(error => {
                console.error('Error fetching movies:', error);
            });
        }
    }, [query]);

    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const newQuery = form.elements.query.value;
        setSearchParams({ query: newQuery });
    };

    return (
        <div>
            <h1>Search Movies</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    name="query"
                    defaultValue={query}
                />
                <button type="submit">Search</button>
            </form>
            <MovieList movies={movies} />
        </div>
    );
};

export default MoviesPage;