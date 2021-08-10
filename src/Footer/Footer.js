import './Footer.css'
import face from './face.svg'
import insta from './insta.svg'
import ytb from './ytb.svg'
import logo from './logo2.svg'

function Footer() {
    return (
        <section className="footer">
            <div className="footer1">
                <img src={logo}/>
                <span>@2021 Beautysalon.</span>
                <span>Todos os direitos reservados.</span>
            </div>
            <div className="socials">
                <img src={insta}/>
                <img src={face}/>
                <img src={ytb}/>
            </div>
        </section>
    )
}

export default Footer;