import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Host from '../../components/Host/Host'
import Gallery from '../../components/Gallery/Gallery'
import Rating from '../../components/Rating/Rating'
import Tags from '../../components/Tags/Tags'
import Loading from '../../components/Loading/Loading'
import Collapse from '../../components/Collapse/Collapse'
import { useParams, useNavigate } from 'react-router-dom'
import './Hosting.scss'
import React, { useEffect, useState } from 'react'

/* This file builds the hosting page with React components.  */

function Hosting() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [ data, setData ] = useState(null)
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:8000/hostingsList`)
            .then((res) => res.json())
            .then((response) => {
                setData(response)
            })
            .catch((error) => {
                console.log('Il y a un problème avec fetch', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loading />
    }

    const hostings = data.find((hosting) => hosting.id === id)

    if (!hostings) {
        navigate('/404')
        return null;
    }

    return (
        <div className='hosting'>
            <header className='hosting__header'>
                <Navbar/>
            </header>
            <main className='hosting__main'>
                {loading ? (
                    <Loading />
                ) : (
                    <div className='hosting__content'>
                        <Gallery
                            pictures={hostings.pictures}
                            description={hostings.description}
                        />
                        <div className='hosting__titleTagsRateHostAndCollapses'>
                            <div className='hosting__titleTagsHostAndRating'>
                                <div className='hosting__titleAndTags'>
                                    <div className='hosting__titleGroup'>
                                        <h1 className='hosting__title'>
                                            {hostings.title}
                                        </h1>
                                        <h2 className='hosting__location'>
                                            {hostings.location}
                                        </h2>
                                    </div>
                                    <Tags
                                        tagsKeyword={hostings.tags.map((tag, id) => (
                                            <li key={id} className='hosting__tags'>
                                                {tag}
                                            </li>
                                        ))}
                                    />
                                </div>
                                <div className='hosting__hostAndRating'>
                                    <Host
                                        hostFirstName={hostings.host.name.split(' ')[0]}
                                        hostLastName={hostings.host.name.split(' ')[1]}
                                        hostPicture={hostings.host.picture}
                                    />
                                    <Rating 
                                        rating={hostings.rating}
                                    />
                                </div>
                            </div>
                            <div className='hosting__collapses'>
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
                                        ))
                                    }
                                />
                            </div>
                        </div>
                        

                    </div>
                )}
            </main>
            <footer className='hosting__footer'>
                <Footer/>
            </footer>
        </div>
    )
}

export default Hosting