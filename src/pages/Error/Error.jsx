import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Error.scss'
import { NavLink } from 'react-router-dom'

/* This file builds the error page with React components */

function Error() {
    return (
        <div className='error404'>
            <header className='error404__header'>
                <Navbar/>
            </header>
            <main className='error404__main'>
                <h1 className='error404__title'>
                    404
                </h1>
                <h2 className='error404__info'>
                    Oups! La page que vous demandez n'existe pas.
                </h2>
                <NavLink to="/" className='error404__link'>
                    Retourner sur la page d'accueil
                </NavLink>
            </main>
            <footer className='error404__footer'>
                <Footer/>
            </footer>
        </div>
    )
}

export default Error