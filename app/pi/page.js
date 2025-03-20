'use client'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faChartSimple, faMagnifyingGlass, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import "./projetointegrador.css";

const telainicial = () => {
  return (
    <div id="container">
          {/* Menu Superior */}
          <div id="menusuperior">
            <button className="botaolateral">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <h1>Better Sleep</h1>
            <button className="logincadastro"><a href="./login">login/Cadastro</a></button>
          </div>
          
          {/* Conteúdo Principal */}
          <div id="apresentacao">
            {/* Menu Lateral */}
            <div id="menulateral">
              <ul>
            <li><FontAwesomeIcon icon={faHouse} className="icones" /><a href='/pi'> Início</a></li>
            <li><FontAwesomeIcon icon={faChartSimple} className="icones" /> <a href='/formulario'>Formulário</a></li>
            <li><FontAwesomeIcon icon={faMagnifyingGlass} className="icones" /><a href='/analises'>Análise</a></li>
            <li><FontAwesomeIcon icon={faPeopleGroup} className="icones" /><a href='/pi'> Sobre nós</a></li>
              </ul>
            </div>
    

         {/* Conteúdo Principal */}
         <div>
          <p className="primeiramensagem">
            Está levando a vida no automático, e não sabe como consertar seu Ciclo Circadiano?
          </p>
          



          <div className="container-imagens">
          <img src="trampo1.jpg" alt="Imagem 1" />
          <img className= "segundaimagem"      src="trampo2.jpg" alt="Imagem 2" />
          </div>


          <br></br>

          <h1 className="sobrenos">Sobre nós</h1>

          <div className="segundamensagem">
            <p>
              Nós somos a BetterSleep, uma empresa focada na saúde e bem-estar dos nossos usuários, especialmente
              daqueles cujas vidas são impactadas pela falta de qualidade no sono,
            </p>
            <p>
              devido às longas jornadas de trabalho, e àqueles que atuam durante a noite, impedindo que mantenham um
              ciclo circadiano adequado.
            </p>
            <p>Aqui você receberá assistência em relação à situação que deseja nos informar.</p>
            <br></br>

            <p className="segundamensagem">O botão abaixo, irá encaminhá-lo</p>
          <button className="primeirobotao">Cadastre/logue-se</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default telainicial;