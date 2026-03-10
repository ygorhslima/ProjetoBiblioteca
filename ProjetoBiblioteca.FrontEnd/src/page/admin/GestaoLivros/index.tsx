import "./style.css";
import { Plus } from "lucide-react";
import SearchBarLivro from "./components/SearchBarLivro/SearchBarLivro";
import Tabela from "./components/Tabela";
import { useState } from "react";
import type Livro from "../../../interfaces/Livro";
import FormLivro from "./components/FormLivro";

export default function GestaoLivros() {
  const [livroSelecionado, setLivroSelecionado] = useState<Livro | null>(null);
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
          <div className="search-bar">
            <SearchBarLivro />
          </div>
          <div className="btn">
            <button
              className="btn-add-livro"
              onClick={() =>
                setLivroSelecionado({
                  codigo: 0,
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
