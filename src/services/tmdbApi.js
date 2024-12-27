import axios from 'axios';

const API_READ_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTFjOGY0YWQ2ZGZjOTliZTlmMDI1YzIxMjQzZjhjZiIsIm5iZiI6MTczNTI3OTk1Mi43OTgsInN1YiI6IjY3NmU0NTUwM2RmZjBkZTk5YjYxNjljOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ba9fQ_7psVUqEDnya3DSTtG_gz_l7NPdmIbN97lrZJI';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${API_READ_ACCESS_TOKEN}`
    }
});

export const getTrendingMovies = async () => {
    const response = await api.get('/trending/movie/day');
    return response.data.results;
};

export const searchMovies = async (query) => {
    const response = await api.get('/search/movie', {
        params: {
            query,
            include_adult: false,
            language: 'en-US',
            page: 1
        }
    });
    return response.data.results;
};

export const getMovieDetails = async (movieId) => {
    const response = await api.get(`/movie/${movieId}`);
    return response.data;
};

export const getMovieCredits = async (movieId) => {
    const response = await api.get(`/movie/${movieId}/credits`);
    return response.data.cast;
};

export const getMovieReviews = async (movieId) => {
    const response = await api.get(`/movie/${movieId}/reviews`);
    return response.data.results;
};