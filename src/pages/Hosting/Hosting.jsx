import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Host from '../../components/Host/Host'
import Gallery from '../../components/Gallery/Gallery'
import Rating from '../../components/Rating/Rating'
import './Hosting.scss'

function Hosting() {
    return (
        <body>
            <header>
                <Navbar/>
            </header>
            <main>
                <Gallery/>
                <Host/>
                <Rating />
            </main>
            <footer>
                <Footer/>
            </footer>
        </body>
    )
}

export default Hosting