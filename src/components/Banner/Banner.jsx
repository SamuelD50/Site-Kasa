import './Banner.scss'
import banner__image1 from '../../assets/banner__image1.png'


const title = "Chez vous, partout et ailleurs";

function Banner () {
    return (
        <div className='banner'>
            <img src={banner__image1} alt="Paysage de montagne" className='banner__image1'/>
            <h1 className="banner__title">
                {title}
            </h1>
        </div>
    )
}

export default Banner;