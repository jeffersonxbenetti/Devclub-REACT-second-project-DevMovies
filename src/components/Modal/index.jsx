import api from '../../services/api.js'
import { useState, useEffect } from 'react'
import { Background, Container, ButtonX } from './styles.js'

function Modal({ movieId, setShowModal }) {

    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies() {
            const { data: { results } } = await api.get(`/movie/${movieId}/videos`)

            setMovie(results[0])
        }

        getMovies()
    }, [])

    return (
        <Background onClick={() => setShowModal(false)}>
            {movie && (
                <Container>
                    <ButtonX />
                    <iframe
                        src={`https://www.youtube.com/embed/${movie.key}`}
                        title='Youtube Video Player'
                        height='400px'
                        width='100%'>
                    </iframe>
                </Container>
            )}
        </Background>

    )
}

export default Modal