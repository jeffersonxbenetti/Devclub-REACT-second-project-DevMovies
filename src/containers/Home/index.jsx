import api from '../../services/api.js'

import { useState, useEffect } from 'react'
import { Background } from './styles.js'

function Home() {

    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies() {
            const data = await api.get('/movie/popular')

            setMovie(data.data.results[2])
        }

        getMovies()
    }, [])

    console.log(movie)

    return (
        <>
            {movie && (
                <Background $img='https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg'>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                </Background>
            )}
        </>
    )
}

export default Home