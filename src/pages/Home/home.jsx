import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import bannerImage from '../../assets/banner-sea.png'
import './Home.scss'

function Home() {

    const title = "Chez vous, partout et ailleurs"

    return (
        <body>
            <header>
                <Navbar/>
            </header>
            <main>
                <Banner image={bannerImage} title={title}/>
                <Card/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </body>
    )
}

export default Home