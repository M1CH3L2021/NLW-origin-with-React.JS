import './Inicio.css'
import img from './sec1.svg'

function Inicio() {
    return (
        <section className="inicio" id="inicio">
            <div className="text">
                <h1>Saúde natural para os seus cabelos</h1>
                <p>Um salao exclusivo em São Paulo, especializado em tratamentos naturais.</p>
                <button>Agendar um horário</button>
            </div>
            <div className="img">
                <div>
                    <img src={img}/>
                </div>
            </div>
            <span className="divider"/>
        </section>
    )
}

export default Inicio;