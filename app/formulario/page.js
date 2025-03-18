import "./formulario.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faChartSimple, faMagnifyingGlass, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

export default function Formulario() {
  return (
    <div id="container">
    {/* Menu Superior */}
    <div id="menusuperior">
      <button className="botaolateral">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <h1>Better Sleep</h1>
      <button className="semborda">Login/Cadastro</button>
    </div>
    
    {/* Conteúdo Principal */}
    <div id="menugeral">
      {/* Menu Lateral */}
      <div id="menulateral">
        <ul>
          <li><FontAwesomeIcon icon={faHouse} className="icones" /> Início</li>
          <li><FontAwesomeIcon icon={faChartSimple} className="icones" /> Formulário</li>
          <li><FontAwesomeIcon icon={faMagnifyingGlass} className="icones" /> Análise</li>
          <li><FontAwesomeIcon icon={faPeopleGroup} className="icones" /> Sobre nós</li>
        </ul>
      </div>

        {/* Formulário */}
        <div className="container">
          <FontAwesomeIcon icon={faChartSimple} size="2x" />
          <h1>Qual seu tipo de trabalho?</h1>
          <form>
            <div className="opcoes">
              <button className="opcao">Manual</button>
              <button className="opcao">Intelectual</button>
              <button className="opcao">Um pouco dos dois</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
