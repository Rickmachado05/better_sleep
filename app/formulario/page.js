'use client'
import { useState } from "react";
import "./formulario.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faChartSimple, faMagnifyingGlass, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";


export default function Formulario() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const nextStep = (question, answer) => {
    const newAnswers = { ...answers, [question]: answer };
    setAnswers(newAnswers);
    
    if (question === "faz_exercicio" && answer === "Não") {
      setStep(8); // Pula as perguntas 6 e 7
    } else if (question === "faz_exercicio" && answer === "Sim") {
      setStep(step + 1);
    } else if (question === "tipo_exercicio" && answers["faz_exercicio"] === "Não") {
      setStep(8); // Garante que pula a frequência se não faz exercício
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div id="container">
      {/* Menu Superior */}
      <div id="menusuperior">
        <button className="botaolateral">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1>Better Sleep</h1>
        <button className="semborda"> <a href="./login">login/Cadastro</a></button>
      </div>

      {/* Conteúdo Principal */}
      <div id="menugeral">
        {/* Menu Lateral */}
        <div id="menulateral">
          <ul>
              <li><FontAwesomeIcon icon={faHouse} className="icones" /><a href='/pi'> Início</a></li>
                        <li><FontAwesomeIcon icon={faChartSimple} className="icones" /> <a href='/formulario'>Formulário</a></li>
                        <li><FontAwesomeIcon icon={faMagnifyingGlass} className="icones" /><a href='/analises'>Análise</a></li>
                        <li><FontAwesomeIcon icon={faPeopleGroup} className="icones" /><a href='/pi'> Sobre nós</a></li>
          </ul>
        </div>

        {/* Formulário */}
        <div className="container">
          {step === 1 && (
            <>
              <FontAwesomeIcon icon={faChartSimple} size="2x" />
              <h1>Qual seu tipo de trabalho?</h1>
              <div className="opcoes">
                <button className="opcao" onClick={() => nextStep("trabalho", "Manual")}>Manual</button>
                <button className="opcao" onClick={() => nextStep("trabalho", "Intelectual")}>Intelectual</button>
                <button className="opcao" onClick={() => nextStep("trabalho", "Um pouco dos dois")}>Um pouco dos dois</button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
            <FontAwesomeIcon icon={faChartSimple} size="2x" />
              <h1>Qual é o seu turno?</h1>
              <div className="opcoes">
                <button className="opcao" onClick={() => nextStep("turno", "6x1")}>6x1</button>
                <button className="opcao" onClick={() => nextStep("turno", "5x2")}>5x2</button>
                <button className="opcao" onClick={() => nextStep("turno", "12x36")}>12x36</button>
                <button className="opcao" onClick={() => nextStep("turno", "Freelancer")}>Freelancer</button>
                <button className="opcao" onClick={() => nextStep("turno", "Escala Rotativa")}>Escala Rotativa</button>
                <button className="opcao" onClick={() => nextStep("turno", "Autônomo")}>Autônomo</button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
            <FontAwesomeIcon icon={faChartSimple} size="2x" />
              <h1>Qual é o seu horário de turno?</h1>
              <div className="opcoes">
                <button className="opcao" onClick={() => nextStep("horario_turno", "Diurno")}>Diurno</button>
                <button className="opcao" onClick={() => nextStep("horario_turno", "Noturno")}>Noturno</button>
                <button className="opcao" onClick={() => nextStep("horario_turno", "Flexível")}>Flexível</button>
              </div>
            </>
          )}

          {step === 4 && (
            <>
            <FontAwesomeIcon icon={faChartSimple} size="2x" />
              <h1>Quanto tempo você dorme por noite?</h1>
              <div className="opcoes">
                <button className="opcao" onClick={() => nextStep("tempo_sono", "Mais de 9 horas")}>Mais de 9 horas</button>
                <button className="opcao" onClick={() => nextStep("tempo_sono", "Menos de 6 horas por noite")}>Menos de 6 horas por noite</button>
                <button className="opcao" onClick={() => nextStep("tempo_sono", "6 a 8 horas")}>6 a 8 horas</button>
              </div>
            </>
          )}

          {step === 5 && (
            <>
            <FontAwesomeIcon icon={faChartSimple} size="2x" />
              <h1>Você faz exercício?</h1>
              <div className="opcoes">
                <button className="opcao" onClick={() => nextStep("faz_exercicio", "Sim")}>Sim</button>
                <button className="opcao" onClick={() => nextStep("faz_exercicio", "Não")}>Não</button>
              </div>
            </>
          )}

          {step === 6 && answers["faz_exercicio"] === "Sim" && (
            <>
            <FontAwesomeIcon icon={faChartSimple} size="2x" />
              <h1>Qual tipo de exercício você pratica?</h1>
              <div className="opcoes">
                <button className="opcao" onClick={() => nextStep("tipo_exercicio", "Caminhadas e Corridas")}>Caminhadas e Corridas</button>
                <button className="opcao" onClick={() => nextStep("tipo_exercicio", "Academia")}>Academia</button>
                <button className="opcao" onClick={() => nextStep("tipo_exercicio", "Calistenia")}>Calistenia</button>
              </div>
            </>
            
          )}
         
        </div>
      </div>
    </div>
  );
}