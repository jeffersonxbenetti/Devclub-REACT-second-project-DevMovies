import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

import { Container, Menu, Li } from './styles.js'


function Header() {

    return (
        <Container>
            <img src={Logo} />
            <Menu>
                <Li>
                    <Link>Home</Link>
                </Li>
                <Li>
                    <Link>Filmes</Link>
                </Li>
                <Li>
                    <Link>Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header