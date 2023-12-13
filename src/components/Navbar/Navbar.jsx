import './Navbar.scss'
import headerLogotype from '../../assets/header-logotype.png'
import { NavLink } from 'react-router-dom';
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
            <NavLink to="/">
                <HomeLogo src={headerLogotype} className='navbar__logotype' alt='Logotype Kasa'/>
            </NavLink>
            <nav>
                <ul className='navbar__list'>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/'>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to='/about'>
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </NavContainer>
    )
}

export default Navbar;