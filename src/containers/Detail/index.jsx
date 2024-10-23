import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getMovieCredits, getMovieDetailsById, getMovieSimilar, getMovieVideos } from '../../services/getData.js'
import { Container } from './styles.js'

function Detail() {
    const [movieDetails, setMovieDetails] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimilar, setMovieSimilar] = useState()

    const { id } = useParams()

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovieDetailsById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id)
            ])
                .then(([details, videos, credits, similar]) => {

                    console.log({ details, videos, credits, similar })

                    setMovieDetails(details)
                    setMovieVideos(videos)
                    setMovieCredits(credits)
                    setMovieSimilar(similar)
                })
                .catch((error) => console.error(error))
        }

        getAllData()
    }, [])

    return (
        <Container>
            <h1>DETALHE</h1>
            <p>Esse é a DETALHE</p>
        </Container>
    )
}

export default Detail