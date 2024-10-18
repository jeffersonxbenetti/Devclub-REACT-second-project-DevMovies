import api from '../../services/api.js'

import { useState, useEffect } from 'react'
import { Background, Container, Info, Poster } from './styles.js'

function Home() {

    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies() {
            const { data: { results } } = await api.get('/movie/popular')

            setMovie(results[0])
        }

        getMovies()
    }, [])

    // console.log(movie)

    return (
        <>
            {movie && (
                <Background $img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                        </Info>
                        <Poster>
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>
            )}
        </>
    )
}

export default Home