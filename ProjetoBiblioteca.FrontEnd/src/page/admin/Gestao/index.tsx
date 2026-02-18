import SearchBar from "../../../components/UI/SearchBar/SearchBar";
import Tabela from "./components/Tabela";
import "./style.css";
export default function Gestao() {
  return (
    <div className="gestao-container">
      <div className="pesquisa-tabela">
        <div>
          <span>Mostrar</span>
          <select name="" id="">
            <option value="">2</option>
          </select>
          <span>registros</span>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
      <Tabela  />
    </div>
  );
}
