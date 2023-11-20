import './Navbar.scss'
import logotypeHeader from '../../assets/Logotype__header.png'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const HomeLogo = styled.img`
    width: auto;
    height: 68px;
`

const NavContainer = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

function Navbar() {
    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo src={logotypeHeader} className='navbar__logotype' alt='Logotype Kasa'/>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            A propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </NavContainer>
    )
}

export default Navbar;