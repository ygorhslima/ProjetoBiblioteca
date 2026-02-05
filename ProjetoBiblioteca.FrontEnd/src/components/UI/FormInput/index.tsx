/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { bookService } from "../../../services/BookService";
import { useLibrary } from "../../../context/LibraryContext"; // 1. Importe o hook
import "./style.css";

export default function FormInput() {
  // 2. Acesse as áreas que o LibraryContext buscou para você
  const { areas } = useLibrary();

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [ano, setAno] = useState("");
  const [editora, setEditora] = useState("");
  const [areaId, setAreaId] = useState(0);

  const adicionarLivro = async () => {
    // Adicione uma validação simples para não enviar areaId 0
    if (areaId === 0) {
      alert("Por favor, selecione uma área.");
      return;
    }

    const novoLivro = {
      titulo,
      autor,
      ano: Number(ano),
      editora,
      areaId: Number(areaId),
      imagemUrl: "", // Não esqueça de enviar os campos que o backend espera
    };

    const sucesso = await bookService.create(novoLivro);

    if (sucesso) {
      alert("Livro adicionado!");
      // Limpe os campos aqui se desejar
      setTitulo("");
      setAutor("");
      setAno("");
      setEditora("");
      setAreaId(0);
    }
  };

  return (
    <div>
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
