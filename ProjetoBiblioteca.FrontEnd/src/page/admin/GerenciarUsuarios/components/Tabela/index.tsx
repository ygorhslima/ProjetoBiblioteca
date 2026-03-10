import "./style.css";

import useUsers from "../../../../../hooks/useUsers";
import { useSearch } from "../../../../../context/SearchContext";
import type Usuario from "../../../../../interfaces/Usuario";
import { useParams } from "react-router-dom";
import { useState } from "react";
import FormUsuario from "../FormUsuario";

export default function Tabela() {
  const { searchTerm } = useSearch();
  const { id } = useParams();
  const {
    usersFiltrados: usuariosFiltrados,
    loading,
    excluirUsuario,
  } = useUsers(searchTerm, id ? Number(id) : undefined);

  const [usuarioParaEditar, setUsuarioParaEditar] = useState<Usuario | null>(
    null,
  );

  if (loading) {
    return <p>carregando usuarios...</p>;
  }
  return (
    <>
      <div className="table-container">
        {usuarioParaEditar && (
          <div className="modal-overlay">
            <FormUsuario
              usuario={usuarioParaEditar}
              onClose={() => setUsuarioParaEditar(null)}
            />
          </div>
        )}
        <table className="custom-table">
          <thead>
            <tr>
              <th>id</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Cpf</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados &&
              usuariosFiltrados.length > 0 &&
              usuariosFiltrados.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.nome}</td>
                  <td>{user.email}</td>
                  <td>{user.cpf}</td>
                  <td>{user.telefone}</td>
                  <td>
                    <button
                      className="btn-edit"
                      onClick={() => setUsuarioParaEditar(user)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => {
                        if (window.confirm("tem certeza que deseja excluir?")) {
                          excluirUsuario(user.id);
                        }
                      }}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
