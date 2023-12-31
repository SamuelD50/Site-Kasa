import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Host from '../../components/Host/Host'
import Gallery from '../../components/Gallery/Gallery'
import Rating from '../../components/Rating/Rating'
import Tags from '../../components/Tags/Tags'
import Collapse from '../../components/Collapse/Collapse'
import data from '../../data.json'
import { useParams, useNavigate } from 'react-router-dom'
import './Hosting.scss'
import React, { useEffect, useState } from 'react'

/* This file builds the hosting page with React components.  */

function Hosting() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [ hostings, setHostings ] = useState(null)

    useEffect(() => {
        const information = data.find((hosting) => hosting.id === id)

        if (information) {
            setHostings(information)
        } else {
            navigate('/*')
        }
    }, [id, navigate])

    if (!hostings) {
        return null;
    }

    return (
        <div className='hosting'>
            <header className='hosting__header'>
                <Navbar/>
            </header>
            <main className='hosting__main'>
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
            </main>
            <footer className='hosting__footer'>
                <Footer/>
            </footer>
        </div>
    )
}

export default Hosting