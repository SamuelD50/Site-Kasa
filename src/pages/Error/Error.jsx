import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Error.scss'
import { Link } from 'react-router-dom'

function Error() {
    return (
        <body>
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
                <Link to="/" className='error404__link'>
                    Retourner sur la page d'accueil
                </Link>
            </main>
            <footer>
                <Footer/>
            </footer>
        </body>
    )
}

export default Error