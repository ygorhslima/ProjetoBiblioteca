import SearchBarUsuario from "../GestaoLivros/components/SearchBarLivro/SearchBarLivro";
import Tabela from "./components/Tabela";
import "./style.css";

export default function GerenciarUsuarios() {
  return (
    <div className="gestaousuario-container">
      <div className="pesquisa-tabela">
        <div>
          <span>Mostrar</span>
          <select name="" id="">
            <option value="">2</option>
          </select>
          <span>registros</span>
        </div>
        <div>
          <SearchBarUsuario />
        </div>
      </div>
      <Tabela />
    </div>
  );
}
