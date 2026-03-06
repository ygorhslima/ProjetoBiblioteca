import "./style.css";
import { Plus } from "lucide-react";
import SearchBarLivro from "./components/SearchBarLivro/SearchBarLivro";
import Tabela from "./components/Tabela";
import { useState } from "react";
import type Livro from "../../../interfaces/Livro";
import FormLivro from "./components/FormLivro";

export default function GestaoLivros() {
  const [livroSelecionado, setLivroSelecionado] = useState<Livro|null>(null);
  return (
    <>
      {livroSelecionado && (
        <div className="modal-overlay">
          <FormLivro
            livro={livroSelecionado}
            onClose={() => setLivroSelecionado(null)}
          />
        </div>
      )}
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
            <SearchBarLivro />
          </div>
          <div>
            <button
              className="btn-add-livro"
              onClick={() =>
                setLivroSelecionado({
                  codigo: 0, // Ou remova se o ID for gerado no banco
                  titulo: "",
                  autor: "",
                  ano: new Date().getFullYear(),
                  editora: "",
                  area: "",
                })
              }
            >
              Adicionar Livro <Plus />
            </button>
          </div>
        </div>
        <Tabela onEditar={setLivroSelecionado} />
      </div>
    </>
  );
}
