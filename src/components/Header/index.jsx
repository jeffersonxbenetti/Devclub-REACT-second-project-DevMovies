import Logo from '../../assets/logo.png'

function Header() {

    return (
        <div>
            <h1>Header</h1>
            <img src={Logo} style={{ width: 300}}/>
        </div>
    )
}

export default Header