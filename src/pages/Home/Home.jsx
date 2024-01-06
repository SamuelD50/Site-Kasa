import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import bannerImage from '../../assets/banner-sea.png'
import data from '../../data.json'
import './Home.scss'
import React from 'react'

/* This file builds the home page with React components. */

function Home() {

    return (
        <div className='home'>
            <header className='home__header'>
                <Navbar/>
            </header>
            <main className='home__main'>
                <Banner 
                    image={bannerImage}
                />
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
            </main>
            <footer className='home__footer'>
                <Footer/>
            </footer>
        </div>
    )
}

export default Home