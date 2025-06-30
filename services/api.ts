export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_TOKEN}`
    }
}

export const fetchPopularMovies = async ({query}: { query?: string }) => {
    const endpoint = query ? `/search/movie?query${encodeURIComponent(query)}` :'discover/movie?sort_by=popularity.desc';
    const lastEndpoint = `${TMDB_CONFIG.BASE_URL}/${endpoint}`;

    const response = await fetch(endpoint, {
        method: "GET",
        headers: TMDB_CONFIG.headers
    })

    if (!response.ok) {
        throw new Error(`Error fetching movies: ${response.statusText}`);
    }

    const data = await response.json();

    return data.results;
}
// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzQ2NzU0ZGE3MDBjNjA5NzQ3Y2QyZjA3YjY3NDBlMCIsIm5iZiI6MTc1MDc5OTgwMS41NzcsInN1YiI6IjY4NWIxNWI5N2IwNGVhOWUzMTA0MzI1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zM5KCKfVVs1BBk7FywZGRAmxvJDXoV1tkHot4qqCFOU'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));