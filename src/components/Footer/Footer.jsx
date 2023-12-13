import './Footer.scss'
import footerLogotype from '../../assets/footer-logotype.png'


function Footer() {
    return (
        <div className='footer__container'>
            <img src={footerLogotype} alt='Logotype Kasa' className='footer__logotype'/>
            <span className='footer__copyright'>
                © 2020 Kasa. All rights reserved
            </span>
        </div>
    )
}

export default Footer