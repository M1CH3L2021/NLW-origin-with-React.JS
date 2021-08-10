import './Contato.css'
import whats from './whats.svg'
import gps from './gps.svg'
import mail from './mail.svg'
import phone from './phone.svg'

function Contato() {
    return(
        <section className="contato" id="contato">
            <div className="talk">
                <div>
                    <h1>Entre em contato com a gente!</h1>
                    <p>Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</p>
                    <button><img src={whats}/> Entrar em contato</button>
                </div>
            </div>
            <div className="info">
                <div>
                    <div>
                        <img src={phone}/> <span>11 99845-6754</span>
                    </div>
                    <div>
                        <img src={gps}/> <span>R.Amauri Souza, 346</span>
                    </div>
                    <div>
                        <img src={mail}/> <span>contato@beautysalon.com</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contato;