import './Header.css'
import logo from './Logo.svg'

import { useState } from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
z-index: 1;

dl:nth-child(1){
    height: 2.5rem;
    width: 3rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    cursor: pointer;
    position: relative;
    z-index: 50;

    dt{
        height: .5rem;
        width: 100%;
        background-color: var(--primary-color);
        border-radius: 1rem;
        transform-origin: 1px;
        transition: .3s;

        &:nth-child(1){
            transform: ${({menu}) => menu ? 'rotate(45deg)' : 'rotate(0)'}
        }

        &:nth-child(2){
            opacity: ${({menu}) => menu ? 0 : 1};
        }

        &:nth-child(3){
            transform: ${({menu}) => menu ? 'rotate(-45deg)' : 'rotate(0)'}
        }
    }
}

dl:nth-child(2){
    position: fixed;
    top: -10px;
    right: 0;
    height: 100vh;
    width: ${({menu}) => menu ? '300px' : '0px'};
    background-color: var(--dark);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6.4rem;
    overflow: hidden;
    transition: .3s;

    dt a{
        text-decoration: none;
        font-size: 2rem;
        font-family: Poppins;
        font-weight: bold;
        color: var(--bg);

        &:hover{
            color: var(--primary-color);
            transition: .2s;
        }
    }
}
`

function Header() {
    const [menu, setMenu] = useState(false)

    if(document.documentElement.clientWidth > 1000) {
        return (
            <header className="desktop">
                <img src={logo}></img>
                <dl>
                    <dt><a href="#inicio" className="selected">Início</a></dt>
                    <dt><a href="#sobre">Sobre</a></dt>
                    <dt><a href="#servicos">Serviços</a></dt>
                    <dt><a href="#depoimentos">Depoimentos</a></dt>
                    <dt><a href="#contato">Contato</a></dt>
                </dl>
            </header>
        )
    }else if (document.documentElement.clientWidth <= 1000) {
        console.log(menu)
        return (
            <header className="mobile">
                <img src={logo}></img>
                <Nav menu={menu} onClick={() => setMenu(!menu)}>
                    <dl>
                        <dt/>
                        <dt/>
                        <dt/>
                    </dl>
                    <dl>
                        <dt><a href="#inicio">eu sla</a></dt>
                        <dt><a href="#sobre">Sobre</a></dt>
                        <dt><a href="#servicos">Serviços</a></dt>
                        <dt><a href="#depoimentos">Depoimentos</a></dt>
                        <dt><a href="#contato">Contato</a></dt>
                    </dl>
                </Nav>
            </header>
        )
    }
}

export default Header;