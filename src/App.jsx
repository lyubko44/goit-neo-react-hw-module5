import './App.css';
import {getImageUrl} from './services/imageService';

function App() {
    const posterPath = '/1E5baAaEse26fej7uHcjOgEE2t2.jpg';
    const fullImageUrl = getImageUrl(posterPath);

    return (
        <>
            <img src={fullImageUrl} alt="Movie Poster" />
        </>
    );
}

export default App;