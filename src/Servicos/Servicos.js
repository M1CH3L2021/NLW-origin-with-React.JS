import './Servicos.css'
import hair from './hair.svg'
import scissor from './scissor.svg'
import products from './products.svg'

function Servicos() {
    return (
        <section className="servicos" id="servicos">
            <h1>Serviços</h1>
            <p>Com mais de 10 anos no mercado, o <span>Beautysalon</span> já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais</p>
            <div className="services">
                <div>
                    <img src={hair}/>
                    <h2>Terapia capilar</h2>
                    <p>Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.</p>
                </div>
                <div>
                    <img src={scissor}/>
                    <h2>Cortes</h2>
                    <p>A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos.</p>
                </div>
                <div>
                    <img src={products}/>
                    <h2>Tratamentos</h2>
                    <p>O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo.</p>
                </div>
            </div>
            <span className="divider3"/>
        </section>
    )
}

export default Servicos;