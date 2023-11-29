import './Navbar.scss'
import header__logotype from '../../assets/Logotype__header.png'
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
                <HomeLogo src={header__logotype} className='navbar__logotype' alt='Logotype Kasa'/>
            </Link>
            <nav>
                <ul className='navbar__list'>
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