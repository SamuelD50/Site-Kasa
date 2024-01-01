import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import bannerImage from '../../assets/banner-sea.png'
import './Home.scss'
import Loading from '../../components/Loading/Loading'
import React, { useEffect, useState } from 'react'

/* This file builds the home page with React components. So, the fetch function is used to call datas from the file db.json using json server. */

function Home() {

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

    /* const title = 'Chez vous, partout et ailleurs'; */

    return (
        <div className='home'>
            <header className='home__header'>
                <Navbar/>
            </header>
            <main className='home__main'>
                <Banner 
                    image={bannerImage}
                />
                {loading ? (
                    <Loading />
                ) : (
                    <ul className='home__list'>
                        {data.map((hostings) => (
                            <Card
                                key={hostings.id}
                                id={hostings.id}
                                cover={hostings.cover}
                                cardTitle={hostings.title}
                            />                        
                        ))}
                    </ul> 
                )}
            </main>
            <footer className='home__footer'>
                <Footer/>
            </footer>
        </div>
    )
}

export default Home