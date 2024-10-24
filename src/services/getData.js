import api from './api.js'

export async function getMovie() {
    const { data: { results } } = await api.get('/movie/popular')

    return results[0]
}

export async function getTopMovies() {
    const { data: { results } } = await api.get("/movie/top_rated")

    return results
}

export async function getTopSeries() {
    const { data: { results } } = await api.get("/tv/top_rated")

    return results
}

export async function getPopularSeries() {
    const { data: { results } } = await api.get("/tv/popular")

    return results
}

export async function getTopPeoples() {
    const { data: { results } } = await api.get("/person/popular")

    return results
}

export async function getMovieVideos(movieId) {
    const { data: { results } } = await api.get(`/movie/${movieId}/videos`)

    return results
}

export async function getMovieCredits(movieId) {
    const { data } = await api.get(`/movie/${movieId}/credits`)

    return data
}

export async function getMovieSimilar(movieId) {
    const { data: { results } } = await api.get(`/movie/${movieId}/similar`)

    return results[0]
}

export async function getMovieDetailsById(movieId) {
    const { data } = await api.get(`/movie/${movieId}`)

    return data
}