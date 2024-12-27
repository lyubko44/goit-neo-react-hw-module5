const BASE_URL = 'https://image.tmdb.org/t/p/';
const FILE_SIZE = 'w500';

export function getImageUrl(filePath) {
    return `${BASE_URL}${FILE_SIZE}${filePath}`;
}