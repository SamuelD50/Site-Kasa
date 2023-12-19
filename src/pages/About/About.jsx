import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
import Footer from '../../components/Footer/Footer'
import bannerImage from '../../assets/banner-mountain.png'
import './About.scss'

const reliabilityTitle = "Fiabilité"
const reliabilityContent = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."

const respectTitle = "Respect"
const respectContent = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."

const serviceTitle = "Service"
const serviceContent = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."

const securityTitle = "Sécurité"
const securityContent = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien pour l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

/* This file builds the about page with React components */

function About() {
    return (
        <div className='about'>
            <header className='about__header'>
                <Navbar/>
            </header>
            <main className='about__main'> 
                <Banner
                    image={bannerImage}
                />
                <Collapse 
                    collapseTitle={reliabilityTitle}
                    collapseContent={reliabilityContent}
                />
                <Collapse
                    collapseTitle={respectTitle}
                    collapseContent={respectContent}
                />
                <Collapse
                    collapseTitle={serviceTitle}
                    collapseContent={serviceContent}
                />
                <Collapse
                    collapseTitle={securityTitle}
                    collapseContent={securityContent}
                />
            </main>
            <footer className='about__footer'>
                <Footer/>
            </footer>

        </div>
    )
}

export default About