/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./style.css";
import type Area from "../../../interfaces/Area";

export default function FormInput() {
  const [areas, setAreas] = useState<Area[]>([]);
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [ano, setAno] = useState("");
  const [editora, setEditora] = useState("");
  const [areaId, setAreaId] = useState(0);

  const buscarAreasLivros = async () => {
    try {
      const response = await fetch("http://localhost:5002/api/area");
      if (!response.ok) throw new Error("Erro ao buscar dados");
      const data = await response.json();
      setAreas(data);
    } catch (error) {
      console.error("Erro ao buscar áreas:", error);
    }
  };

  const adicionarLivro = async () => {
    try {
      const response = await fetch("http://localhost:5002/api/livros", {
        method: "POST",
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
        window.alert("Livro adicionado com sucesso");
        // Limpar campos após sucesso
        setTitulo("");
        setAutor("");
        setAno("");
        setEditora("");
        setAreaId(0);
      }
    } catch (error) {
      console.error("Erro ao adicionar livro:", error);
    }
  };

  useEffect(() => {
    buscarAreasLivros();
  }, []);

  return (
    <div className="">
      <div className="container-formInput">
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
          onChange={(e) => setAno(e.target.value)}
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
          onChange={(e) => setAreaId(Number(e.target.value))}
        >
          <option value={0}>Selecione uma área</option>
          {areas.map((el) => (
            <option key={el.id} value={el.id}>
              {el.nome}
            </option>
          ))}
        </select>

        <button className="btn_addLivro" onClick={adicionarLivro}>
          Adicionar Livro
        </button>
      </div>
    </div>
  );
}
