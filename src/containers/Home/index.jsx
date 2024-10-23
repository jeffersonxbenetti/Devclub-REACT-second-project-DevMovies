import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { getImages } from '../../utils/getImages.js'
import { getMovie, getPopularSeries, getTopMovies, getTopPeoples, getTopSeries, } from '../../services/getData.js'

import Button from '../../components/Button'
import Slider from '../../components/Slider'
import Modal from '../../components/Modal'

import { Background, Container, Info, Poster, ContainerButtons } from './styles.js'

function Home() {

    const [showMoldal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [popularSeries, setPopularSeries] = useState()
    const [topPeople, setTopPeople] = useState()

    const navegation = useNavigate()

    useEffect(() => { 
        async function getAllData() {        
            Promise.all([
                getMovie(),
                getTopMovies(),
                getTopSeries(),
                getPopularSeries(),
                getTopPeoples()
            ])
                .then(([movie, topMovies, topSeries, popularSeries, topPeople]) => {
                    setMovie(movie)
                    setTopMovies(topMovies)
                    setTopSeries(topSeries)
                    setPopularSeries(popularSeries)
                    setTopPeople(topPeople)
                })
                .catch((error) => console.error(error))
        }

        getAllData()
    }, [])

    return (
        <>
            {movie && (
                <Background $img={getImages(movie.backdrop_path)}>
                    {showMoldal && (<Modal movieId={movie.id} setShowModal={setShowModal} />)}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <ContainerButtons>
                                <Button onClick={() => navegation(`/detalhe/${movie.id}`)} red>Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>
                        <Poster>
                            <img src={getImages(movie.poster_path)} alt="Capa-do-filme" />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
            {popularSeries && <Slider info={popularSeries} title={'Séries Populares'} />}
            {topPeople && <Slider info={topPeople} title={'Top Artistas'} />}
        </>
    )
}

export default Home