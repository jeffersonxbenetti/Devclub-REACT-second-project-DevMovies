import { getImages } from "../../utils/getImages"

import { ListCast } from './styles.js'

function Cast({cast}) {

    return (
        <ListCast>
            {
                cast.slice(0,5).map((cast) => (
                    <li key={cast.id}>
                        <img src={getImages(cast.profile_path)} alt="Foto-do-ator-ou-atriz" />
                        <p>{cast.original_name}</p>
                    </li>
                ))
            }
        </ListCast>
    )
}

export default Cast