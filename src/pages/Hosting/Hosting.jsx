import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Host from '../../components/Host/Host'
import Gallery from '../../components/Gallery/Gallery'
import Rating from '../../components/Rating/Rating'
<<<<<<< HEAD
import { useFetch } from '../../utils/useFetch'
import { useParams } from 'react-router-dom'
import './Hosting.scss'

function Hosting() {

    const { id } = useParams()

    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/hostingsList`
    )

    const hostings = data.find((hostings) => hostings.id === id)

=======
import './Hosting.scss'

function Hosting() {
>>>>>>> 56f6a193487b782b2a5a32b0e37942cf27211c7a
    return (
        <body>
            <header>
                <Navbar/>
            </header>
<<<<<<< HEAD
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
                    <Rating />
                </main>
            ) : (
                <p>
                    Loading
                </p>
            )}
=======
            <main>
                <Gallery/>
                <Host/>
                <Rating />
            </main>
>>>>>>> 56f6a193487b782b2a5a32b0e37942cf27211c7a
            <footer>
                <Footer/>
            </footer>
        </body>
    )
}

export default Hosting