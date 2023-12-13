import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Error.scss'
import { NavLink } from 'react-router-dom'

function Error() {
    return (
        <div className='error'>
            <header>
                <Navbar/>
            </header>
            <main className='error404'>
                <h1 className='error404__title'>
                    404
                </h1>
                <p className='error404__info'>
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <NavLink to="/" className='error404__link'>
                    Retourner sur la page d'accueil
                </NavLink>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Error