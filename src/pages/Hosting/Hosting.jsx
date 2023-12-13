import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Host from '../../components/Host/Host'
import Gallery from '../../components/Gallery/Gallery'
import Rating from '../../components/Rating/Rating'
import Tags from '../../components/Tags/Tags'
import Loading from '../../components/Loading/Loading'
import Collapse from '../../components/Collapse/Collapse'
import { useFetch } from '../../utils/useFetch'
import { useParams, useNavigate } from 'react-router-dom'
import './Hosting.scss'
import { useEffect } from 'react'


function Hosting() {

    const { id } = useParams()
    const navigate = useNavigate()

    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/hostingsList`
    )

    if (error) {
        return (
            <span>
                Il y a un problème avec useFetch!
            </span>
        )
    }
    
/*     useEffect(() => {
        const isIdValid = data.map((hosting) => hosting.id === id)

        if (!isIdValid) {
            navigate(`/*`)
        }
    }, [data, id, navigate]) */
    
    const hostings = data.find((hostings) => hostings.id === id)

    return (
        <div className='hostings'>
            <header>
                <Navbar/>
            </header>
            {isLoading ? (
                <Loading />
            ) : (
                <main className='hosting__main'>
                    <Gallery
                        pictures={hostings.pictures}
                        description={hostings.description}
                    />
                    <Host
                        cardTitle={hostings.title}
                        location={hostings.location}
                        hostName={hostings.host.name}
                        hostPicture={hostings.host.picture}
                        description={hostings.description}
                        equipments={hostings.equipments}
                        />
                    <Rating 
                        rating={hostings.rating}
                        id={hostings.id}
                    />
                    <Tags
                        id={hostings.id}
                        tagsKeyword={hostings.tags.map((tag, index) => (
                            <li key={index} className='tags'>
                                {tag}
                            </li>
                        ))}
                    />
                    <Collapse
                        collapseTitle={"Description"}
                        collapseContent={hostings.description}
                    />
                    <Collapse
                        collapseTitle={"Equipements"}
                        collapseContent={
                            hostings.equipments.map((equipment, id) => (
                            <li key={id}>
                                {equipment}
                            </li>
                        ))}
                    />
                </main>
            )}
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Hosting