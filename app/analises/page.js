'use client'
import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse, faChartSimple, faMagnifyingGlassChart, faPeopleGroup, faMoon, faBriefcase, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './analise.css';

function App() {
  return (
    <div>
      <div id="menusuperior">
        <button className="botaolateral">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1>Better Sleep</h1>
        <button className="semborda"><a href="./login">login/Cadastro</a></button>
      </div>

      <div id="menugeral">
        <div id="menulateral">
          <ul>
            <li>
              <FontAwesomeIcon icon={faHouse} /> <a href='/pi'> Início</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faChartSimple} /><a href='/formulario'> Formulário</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faMagnifyingGlassChart} /><a href='/analises'>Análise</a> 
            </li>
            <li>
              <FontAwesomeIcon icon={faPeopleGroup} /><a href='/pi'> Sobre Nós</a>
            </li>
          </ul>
        </div>

        <main className="container">
          <div className="row">
            <div className="container text-center">
              <div className="row">
                {/* Forçar as próximas colunas a quebrarem para uma nova linha */}
                <div className="w-100"></div>
              </div>
            </div>

            {/* Container da Tabela */}
            <div>
              {/* Tabela */}
              <div>
                <div className="conteudoPrincipal">
                  <div className="cardGeral">
                    <FontAwesomeIcon icon={faMoon} size='2x' />
                    <p className="texto1">Dorme 5 horas</p>
                    <p className="texto2">
                      Você deveria dormir pelo menos <br /> mais 2 horas
                    </p>
                  </div>

                  <div className="cardGeral2">
                    <FontAwesomeIcon icon={faBriefcase} size='2x' />
                    <p className="texto1">Trabalha em um emprego manual</p>
                    <p className="texto2">
                      O emprego manual pode impactar o ciclo circadiano de diversas
                      formas <br /> dependendo do horário, intensidade e ambiente de
                      trabalho.
                    </p>
                  </div>

                  <div className="cardGeral3">
                    <FontAwesomeIcon icon={faDumbbell} size='2x' />
                    <p className="texto1">Você pratica Exercício</p>
                    <p className="texto2">
                      A prática de exercícios pode influenciar o ciclo circadiano <br /> de
                      forma positiva ou negativa dependendo do horário e da intensidade.
                    </p>
                  </div>
                </div>

                <div className="paragrafo0">
                  <h1>Análise</h1>
                  <p>
                    Para melhorar seu ciclo circadiano e sua saúde geral, considere as
                    seguintes recomendações:
                    </p>
                    <br />


                    
                    <p>
                    <strong>Aumente suas horas de sono:</strong> Tente dormir pelo menos 7-8
                    horas por dia. Se possível, ajuste seu horário de trabalho para permitir
                    um sono mais regular.
                    </p>
                    

                    <br />


                    
                    <p>
                    <strong>Crie um ambiente propício ao sono:</strong> Use cortinas blackout
                    para bloquear a luz durante o dia e mantenha seu quarto fresco e
                    silencioso.
                    </p>
                    

                    <br />
                    
                    
                    <p>
                    <strong>Evite luzes brilhantes antes de dormir:</strong> Limite a exposição
                    a telas e luzes brilhantes pelo menos uma hora antes de dormir para ajudar
                    na produção de melatonina.
                    </p>
                    
        

                    <br />

                    
                    <p>
                    <strong>Mantenha uma rotina regular:</strong> Tente dormir e acordar nos
                    mesmos horários todos os dias, mesmo nos fins de semana.
                    </p>
                    
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
