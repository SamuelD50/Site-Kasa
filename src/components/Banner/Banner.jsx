import './Banner.scss'

/* This component is used to create banners in home and about pages */

function Banner ({image, title}) {
    return (
        <div className='banner'>
            <img src={image} alt="Paysage" className='banner__image'/>
            <h1 className="banner__title">
                <span>
                    Chez vous, <br className='banner__mobileOnly'/> partout et ailleurs
                </span>
            </h1>
        </div>
    )
}

export default Banner;