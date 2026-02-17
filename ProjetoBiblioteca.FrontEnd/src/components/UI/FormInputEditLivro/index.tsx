/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./style.css";
import type Area from "../../../interfaces/Area";
import type FormInputEditLivroProps from "../../../interfaces/FormInputEditLivroProps";
import { CircleX } from "lucide-react";
import { API_ENDPOINTS } from "../../../constants";

export default function FormInputEditLivro({
  livro,
  onClose,
}: FormInputEditLivroProps) {
  const [titulo, setTitulo] = useState(livro.titulo);
  const [autor, setAutor] = useState(livro.autor);
  const [ano, setAno] = useState(livro.ano);
  const [editora, setEditora] = useState(livro.editora);
  const [areaId, setAreaId] = useState(livro.area);
  const [areas, setAreas] = useState<Area[]>([]);

  const buscarAreasLivros = async () => {
    try {
      const response = await fetch(`${API_ENDPOINTS.AREAS}`);

      if (!response.ok) throw new Error("Erro ao buscar dados");

      const data = await response.json();

      setAreas(data);
    } catch (error) {
      console.error("Erro ao buscar áreas:", error);
    }
  };

  const EditarLivro = async () => {
    try {
      // Note a inclusão do código na URL
      const response = await fetch(`${API_ENDPOINTS.LIVROS}/${livro.codigo}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          titulo,
          autor,
          ano: Number(ano),
          editora,
          areaId: Number(areaId),
          imagemUrl: "",
        }),
      });

      if (response.ok) {
        window.alert("Livro Editado!");
        onClose(); // Fecha o modal
      }
    } catch (error) {
      console.error("Erro ao editar:", error);
    }
  };

  // Importante: Atualiza os campos se o "livro" recebido mudar
  useEffect(() => {
    setTitulo(livro.titulo);
    setAutor(livro.autor);
    setAno(livro.ano);
    setEditora(livro.editora);
    buscarAreasLivros();
  }, [livro]);

  return (
    <div className="container-formInput">
      <div>
        <button onClick={() => onClose()} className="btn-close-modal">
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
        type="text"
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
        {areas.map((el) => (
          <option key={el.id} value={el.id}>
            {el.nome}
          </option>
        ))}
      </select>

      <button className="btn_addLivro" onClick={EditarLivro}>
        Editar Livro
      </button>
    </div>
  );
}
