import { Plus } from "lucide-react";
import Tabela from "./components/Tabela";
import "./style.css";
import SearchBarLivro from "./components/SearchBarLivro/SearchBarLivro";
import FormInputLivro from "./components/FormInputLivro";
import { useState } from "react";
import type Livro from "../../../interfaces/Livro";

export default function GestaoLivros() {
  const [livroParaCriar, setLivroParaCriar] = useState<Livro | null>(null);
  return (
    <>
      {livroParaCriar && (
        <div className="modal-overlay">
          <FormInputLivro
            livro={livroParaCriar}
            onClose={() => setLivroParaCriar(null)}
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
                setLivroParaCriar({
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
        <Tabela />
      </div>
    </>
  );
}
