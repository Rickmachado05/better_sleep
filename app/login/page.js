
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faChartSimple, faMagnifyingGlass, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

export default function Login() {


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

        {/* Formulário de Login */}
        <div className="cadastro">
          <h2><strong>Login</strong></h2>
          <ul>
            <p><strong>Email:</strong> <input type="email" name="email" placeholder="Escreva aqui.."  /></p>
            <p><strong>Senha:</strong> <input type="password" name="senha" placeholder="Escreva aqui.." /></p>
          </ul>
          <div className="botoesCadastros">
            <button className="botaoLogar"><strong>Logar-se</strong></button>
            <button className="botaoCadastrar"><strong>Cadastre-se</strong></button>
          </div>
        </div>
      </div>
    </div>
  );
}
