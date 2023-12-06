import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Host from '../../components/Host/Host'
import Gallery from '../../components/Gallery/Gallery'
import Rating from '../../components/Rating/Rating'
import { useFetch } from '../../utils/useFetch'
import { useParams } from 'react-router-dom'
import './Hosting.scss'
import Collapse from '../../components/Collapse/Collapse'

function Hosting() {

    const { id } = useParams()

    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/hostingsList`
    )

    const hostings = data.find((hostings) => hostings.id === id)

    return (
        <body>
            <header>
                <Navbar/>
            </header>
            {hostings ? (
                <main>
                    <Gallery
                        pictures={hostings.pictures}
                        description={hostings.description}
                    />
                    <Host
                        cardTitle={hostings.title}
                        location={hostings.location}
                        tags={hostings.tags}
                        hostName={hostings.host.name}
                        hostPicture={hostings.host.picture}
                        description={hostings.description}
                        equipments={hostings.equipments}
                        />
                    <Rating 
                        rating={hostings.rating}
                        />
                    <Collapse
                        collapseTitle={"Description"}
                        collapseContent={hostings.description}
                    />
                    <Collapse
                        collapseTitle={"Equipements"}
                        collapseContent={hostings.equipments}
                    />
                </main>
            ) : (
                <p>
                    Loading
                </p>
            )}
            <footer>
                <Footer/>
            </footer>
        </body>
    )
}

export default Hosting