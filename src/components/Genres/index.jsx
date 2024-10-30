import { ListGenres } from './styles.js'

function Genres({detailsGenres}) {
    
    return (
        <ListGenres>              
            {
                detailsGenres.map((genres) => (
                    <li key={genres.id}>{genres.name}</li>
                ))
            }
        </ListGenres>
    )
}

export default Genres