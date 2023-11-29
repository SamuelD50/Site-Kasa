import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Footer from '../../components/Footer/Footer'
import bannerImage from '../../assets/banner-mountain.png'
import './About.scss'

function About() {
    return (
        <body>
            <header>
                <Navbar/>
            </header>
            <main>
                <Banner image={bannerImage}/>
            </main>
            <footer>
                <Footer/>
            </footer>

        </body>
    )
}

export default About