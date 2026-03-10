/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import useUsers from "../../../../../hooks/useUsers";
import "./style.css";
import { CircleX } from "lucide-react";

export default function FormUsuario({
  usuario,
  onClose,
}: {
  usuario: any;
  onClose: () => void;
}) {
  const { criarUsuario, editarUsuario } = useUsers("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "nivelAcesso" ? Number(value) : value,
    }));
  };

  const [formData, setFormData] = useState({
    nome: usuario.nome,
    email: usuario.email,
    cpf: usuario.cpf,
    telefone: usuario.telefone,
    senha: usuario.senha,
    nivelAcesso: usuario.nivelAcesso,
  });

  const isEditing = usuario.id !== 0;

  const handleSubmit = async () => {
    const sucesso = isEditing
      ? await editarUsuario(usuario.id, formData)
      : await criarUsuario(formData);

    if (sucesso) {
      window.alert(
        isEditing
          ? "Usuário editado com sucesso!"
          : "Usuário criado com sucesso!",
      );
      onClose();
    } else {
      window.alert("Erro ao processar a solicitação.");
    }
  };

  return (
    <div className="container-formInput">
      <div className="header-modal">
        <h3>{isEditing ? `Editando: ${usuario.nome}` : "Novo Usuario"}</h3>
        <button onClick={onClose} className="btn-close-modal">
          <CircleX />
        </button>
      </div>

      <label>Nome</label>
      <input
        name="nome"
        type="text"
        className="input-add-users"
        value={formData.nome}
        onChange={handleChange}
      />

      <label>Email</label>
      <input
        name="email"
        type="email"
        className="input-add-users"
        value={formData.email}
        onChange={handleChange}
      />

      <div className="row-input">
        <div style={{ flex: 1 }}>
          <label>Cpf</label>
          <input
            name="cpf"
            type="text"
            className="input-add-users"
            value={formData.cpf}
            onChange={handleChange}
          />
        </div>
      </div>

      <label>Telefone</label>
      <input
        name="telefone"
        type="tel"
        className="input-add-users"
        value={formData.telefone}
        onChange={handleChange}
      />

      <label>Senha</label>
      <input
        name="senha"
        type="password"
        className="input-add-users"
        value={formData.senha}
        onChange={handleChange}
      />

      <button className="btn_addUsuario" onClick={handleSubmit}>
        {isEditing ? "Salvar Alterações" : "Cadastrar Usuario"}
      </button>
    </div>
  );
}
