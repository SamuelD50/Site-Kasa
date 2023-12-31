import './Navbar.scss'
import headerLogotype from '../../assets/header-logotype.png'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const NavBarLogotype = styled.img`
    width: auto;
    height: 68px;

    @media (max-width: 890px) {
        width: 145px;
        height: auto;
    }
`

const NavBar = styled.nav`
    width: 100%;
    height: 68px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1280) {
        height: 58px;
    }

    @media (max-width: 890px) {
        height: 46.88px;
    }
`



/* This component is used to create the navigation bar at the top of the screen. */

function Navbar() {
    return (
        <NavBar>
            <NavLink to="/">
                <NavBarLogotype src={headerLogotype} alt='Logotype Kasa'/>
            </NavLink>
            <nav>
                <ul className='navbar__list'>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'a')} to='/'>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'a')} to='/about'>
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </NavBar>
    )
}

export default Navbar;