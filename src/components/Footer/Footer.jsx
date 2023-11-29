import './Footer.scss'
import footer__logotype from '../../assets/Logotype__footer.png'


function Footer() {
    return (
        <div className='footer__container'>
            <img src={footer__logotype} alt='Logotype Kasa' className='footer__logotype'/>
            <span className='footer__copyright'>
                © 2020 Kasa. All rights reserved
            </span>
        </div>
    )
}

export default Footer