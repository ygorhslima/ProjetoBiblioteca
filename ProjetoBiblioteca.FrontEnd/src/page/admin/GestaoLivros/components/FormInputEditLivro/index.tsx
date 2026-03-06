import { useState } from "react";
import "./style.css";
import type FormInputEditLivroProps from "./FormInputEditLivroProps";
import { CircleX } from "lucide-react";
import useBooks from "../../../../../hooks/useBooks"; // Importe seu hook

export default function FormInputEditLivro({
  livro,
  onClose,
}: FormInputEditLivroProps) {
  // 1. Pegamos as funções e dados necessários do hook
  // Passamos string vazia para o searchTerm para não filtrar nada aqui
  const { editarLivro, areas } = useBooks("");

  // 2. Estados locais apenas para controlar os inputs do formulário
  const [titulo, setTitulo] = useState(livro.titulo);
  const [autor, setAutor] = useState(livro.autor);
  const [ano, setAno] = useState(livro.ano);
  const [editora, setEditora] = useState(livro.editora);
  const [areaId, setAreaId] = useState(livro.area);

  // 3. Função para disparar a edição
  const handleEditar = async () => {
    const payload = {
      titulo,
      autor,
      ano: Number(ano),
      editora,
      areaId: Number(areaId),
    };

    const sucesso = await editarLivro(livro.codigo, payload);

    if (sucesso) {
      window.alert("Livro Editado com sucesso!");
      onClose(); // Fecha o modal após o sucesso
    } else {
      window.alert("Erro ao editar o livro. Tente novamente.");
    }
  };

  return (
    <div className="container-formInput">
      <div>
        <button onClick={onClose} className="btn-close-modal">
          <CircleX />
        </button>
      </div>

      <label>Título</label>
      <input
        type="text"
        className="input-add-books"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <label>Autor</label>
      <input
        type="text"
        className="input-add-books"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />

      <label>Ano</label>
      <input
        type="number" // Alterado para number para facilitar
        className="input-add-books"
        value={ano}
        onChange={(e) => setAno(Number(e.target.value))}
      />

      <label>Editora</label>
      <input
        type="text"
        className="input-add-books"
        value={editora}
        onChange={(e) => setEditora(e.target.value)}
      />

      <label>Área</label>
      <select
        className="input-add-books"
        value={areaId}
        onChange={(e) => setAreaId(e.target.value)}
      >
        <option value={0}>Selecione uma área</option>
        {areas.map((area) => (
          <option key={area.id} value={area.id}>
            {area.nome}
          </option>
        ))}
      </select>

      <button className="btn_addLivro" onClick={handleEditar}>
        Salvar Alterações
      </button>
    </div>
  );
}