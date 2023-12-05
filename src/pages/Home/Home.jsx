import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import bannerImage from '../../assets/banner-sea.png'
import { useFetch } from '../../utils/useFetch'
import './Home.scss'

function Home() {
    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/hostingsList`
    )

    const title = "Chez vous, partout et ailleurs"

    return (
        <body>
            <header>
                <Navbar/>
            </header>
            <main>
                <Banner image={bannerImage} title={title}/>
                <ul className='gallery'>
                    {data?.map((hostings) => (
                        <Card
                            id={hostings.id}
                            cover={hostings.cover}
                            cardTitle={hostings.title}
                        />    
                    ))}                    
                </ul>
            </main>
            <footer>
                <Footer/>
            </footer>
        </body>
    )
}


export default Home