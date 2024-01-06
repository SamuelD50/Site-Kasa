import './Navbar.scss'
import headerLogotype from '../../assets/header-logotype.png'
import { NavLink } from 'react-router-dom';

/* This component is used to create the navigation bar at the top of the screen. */

function Navbar() {
    return (
        <div className='navbar'>
            <NavLink to="/">
                <img src={headerLogotype} className='navbar__logotype' alt='Logotype Kasa'/>
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
        </div>
    )
}

export default Navbar;