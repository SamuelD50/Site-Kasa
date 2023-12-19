import './Navbar.scss'
import headerLogotype from '../../assets/header-logotype.png'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const NavBar__logotype = styled.img`
    width: auto;
    height: 68px;
`

const NavBar = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`



/* This component is used to create the navigation bar at the top of the screen. */

function Navbar() {
    return (
        <NavBar>
            <NavLink to="/">
                <NavBar__logotype src={headerLogotype} alt='Logotype Kasa'/>
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
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </NavBar>
    )
}

export default Navbar;