import { Plus } from "lucide-react";
import SearchBarUsuario from "../GestaoLivros/components/SearchBarLivro/SearchBarLivro";
import Tabela from "./components/Tabela";
import "./style.css";
import type Usuario from "../../../interfaces/Usuario";

import { useState } from "react";
import FormUsuario from "./components/FormUsuario";

export default function GerenciarUsuarios() {
  const [usuarioSelecionado, setUsuarioSelecionado] = useState<Usuario | null>(
    null,
  );

  return (
    <>
      {usuarioSelecionado && (
        <div className="modal-overlay">
          <FormUsuario
            usuario={usuarioSelecionado}
            onClose={() => setUsuarioSelecionado(null)}
          />
          <button
            className="btn-close-modal"
            onClick={() => setUsuarioSelecionado(null)}
          >
            X
          </button>
        </div>
      )}
      <div className="gestao-container">
        <div className="pesquisa-tabela">
          <div className="search-bar">
            <SearchBarUsuario />
          </div>
          <div className="btn">
            <button
              className="btn-add-livro"
              onClick={() => {
                setUsuarioSelecionado({
                  id: 0,
                  nome: "",
                  cpf: "",
                  email: "",
                  senha: "",
                  telefone: "",
                  nivelAcesso: 1,
                });
              }}
            >
              Novo Usuário <Plus />
            </button>
          </div>
        </div>
        <Tabela />
      </div>
    </>
  );
}
