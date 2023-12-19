import './Footer.scss'
import footerLogotype from '../../assets/footer-logotype.png'

/* This component is used to build the footer which is found in each page */

function Footer() {
    return (
        <div className='footer'>
            <img src={footerLogotype} alt='Logotype Kasa' className='footer__logotype'/>
            <span className='footer__copyright'>
                © 2020 Kasa. All rights reserved
            </span>
        </div>
    )
}

export default Footer