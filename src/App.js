import React from 'react';
import Header from './Header/Header'
import Inicio from './Inicio/Inicio'
import Sobre from './Sobre/Sobre'
import Servicos from './Servicos/Servicos'
import Depoimentos from './Depoimentos/Depoimentos'
import Contato from './Contato/Contato'
import Footer from './Footer/Footer'
import './Global.css'

function App() {

  function reloadPage() {
    document.location.reload();
  }

  let clear;
  window.onresize = function() {
    clearTimeout(clear);
    clear = setTimeout(reloadPage, 100);
  }

  let menu = document.getElementById('menu');

  console.log(menu)

  return (
    <>
      <Header/>
      <Inicio/>
      <Sobre/>
      <Servicos/>
      <Depoimentos/>
      <Contato/>
      <Footer/>
    </>
  );
}

export default App;
