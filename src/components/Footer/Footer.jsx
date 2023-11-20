import './Footer.scss'
import styled from 'styled-components'
import logotypeFooter from '../../assets/Logotype__footer.png'

const FooterContainer = styled.footer`
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

function Footer() {
    return (
        <FooterContainer>
            <img src={logotypeFooter} alt='Logotype Kasa' className='footer__logotype'/>
            <span className='footer__copyright'>
                © 2020 Kasa. All rights reserved
            </span>
        </FooterContainer>
    )
}

export default Footer