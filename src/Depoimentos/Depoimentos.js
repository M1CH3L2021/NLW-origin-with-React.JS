import aspas from './Aspas.svg'
import wanessa from './wanessa.svg'
import luna from './luna.svg'
import './Depoimentos.css'

function Depoimentos() {
    function slider1(e) {
        let slide = document.getElementById('slider');
        let label2 = document.getElementById('label2')
        slide.style.transform = 'translateX(26.5%)'
        e.target.classList.add('selectedBullet')
        label2.classList.remove('selectedBullet')
    }

    function slider2(e) {
        let slide = document.getElementById('slider');
        let label1 = document.getElementById('label1')
        slide.style.transform = 'translateX(-26%)'
        e.target.classList.add('selectedBullet')
        label1.classList.remove('selectedBullet')
    }

    return (
        <section className="depoimentos" id="depoimentos">
            <h1>Depoimentos de quem já passou por aqui</h1>
            <div className="speechs">
                <nav className="slider" id="slider">
                    <div className="speech">
                        <p><img src={aspas}/> Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.</p>
                        <div className="person">
                            <img src={wanessa}/>
                            <span>Wanessa Souza</span>
                        </div>
                    </div>
                    <div className="speech">
                        <p><img src={aspas}/> Minha mãe frequenta o salão há anos e me levou um dia para conhecer. Minha experiência foi incrível, eu continuo fazendo o a terapia capilar e isso salvou o meu cabelo. Adoro todos os profissionais do Beautysalon.</p>
                        <div className="person">
                            <img src={luna}/>
                            <span>Luna Falcão</span>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="bullets">
                <label onClick={slider1} id="label1" className="selectedBullet"/>
                <label onClick={slider2} id="label2"/>
            </div>
            <span className="divider4"/>
        </section>
    )
}

export default Depoimentos;