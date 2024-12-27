import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../services/tmdbApi';
import { getImageUrl } from "../../services/imageService.js";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        getMovieDetails(movieId).then(setMovie);
    }, [movieId]);

    const goBack = () => {
        navigate(location.state?.from || '/movies');
    };

    if (!movie) return null;

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <h1>{movie.title}</h1>
            <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
            <p>{movie.overview}</p>
            <nav>
                <Link to="cast">Cast</Link>
                <Link to="reviews">Reviews</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default MovieDetailsPage;