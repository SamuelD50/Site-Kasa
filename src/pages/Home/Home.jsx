import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import bannerImage from '../../assets/banner-sea.png'
import { useFetch } from '../../utils/useFetch'
import './Home.scss'
import Loading from '../../components/Loading/Loading'
import { useNavigate } from 'react-router-dom' 

function Home() {
    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/hostingsList`
    )

    const navigate = useNavigate()
    

/*     const checkIdValidity = (id) => {
        const hostings = data.find((hostings) => hostings.id === id)

        if (!hostings) {
            navigate('/*')
        } else {
            navigate('/hosting/${id}')
        }
    } */

    const title = "Chez vous, partout et ailleurs"

    return (
        <div className='home'>
            <header>
                <Navbar/>
            </header>
            <main>
                <Banner 
                    image={bannerImage}
                    title={title}
                />
                {isLoading ? (
                    <Loading/>
                ) : (
                    <ul className='gallery'>
                        {data?.map((hostings) => (
                            <Card
                                key={hostings.id}
                                id={hostings.id}
                                cover={hostings.cover}
                                cardTitle={hostings.title}
                                /* onClick={checkIdValidity(hostings.id)} */
                            />    
                        ))}                    
                    </ul>
                )}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}


export default Home