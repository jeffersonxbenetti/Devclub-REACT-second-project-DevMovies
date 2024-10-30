import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Genres from '../../components/Genres'
import Cast from '../../components/Cast'

import { getImages } from '../../utils/getImages.js'
import { getMovieCredits, getMovieDetailsById, getMovieSimilar, getMovieVideos } from '../../services/getData.js'

import { Container, Background, Cover, Info } from './styles.js'

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
        <>
            {movieDetails && (
                <>
                    <Background $image={getImages(movieDetails.backdrop_path)} />
                    <Container>
                        <Cover>
                            <img src={getImages(movieDetails.poster_path)} />
                        </Cover>
                        <Info>
                            <h2>{movieDetails.title}</h2>
                            <Genres detailsGenres={movieDetails.genres} />
                            <p>{movieDetails.overview}</p>
                            <Cast cast={movieCredits.cast}/>
                        </Info>
                    </Container>
                </>

            )}
        </>
    )
}

export default Detail