import { useState } from "react";
import "./style.css";
import type FormInputProps from "./FormInputProps";
import { CircleX } from "lucide-react";
import useBooks from "../../../../../hooks/useBooks";

export default function FormInputLivro({ livro, onClose }: FormInputProps) {
  // Passamos uma string vazia para o searchTerm do hook
  const { criarLivro, areas } = useBooks("");

  const [titulo, setTitulo] = useState(livro.titulo);
  const [autor, setAutor] = useState(livro.autor);
  const [ano, setAno] = useState(livro.ano);
  const [editora, setEditora] = useState(livro.editora);

  // Guardamos o ID da área selecionada
  const [areaId, setAreaId] = useState<number>(0);

  const handleCriar = async () => {
    // Validação importante: O DTO exige AreaId
    if (areaId === 0) {
      window.alert("Por favor, selecione uma área válida.");
      return;
    }

    // O objeto deve bater exatamente com as propriedades do seu Record no C#
    // O ASP.NET por padrão espera camelCase no JSON (titulo, autor...)
    const dadosParaEnviar = {
      titulo: titulo,
      autor: autor,
      areaId: Number(areaId), // Garante que é um inteiro
      ano: Number(ano), // Garante que é um inteiro
      editora: editora,
      area: "", // Adicionado para satisfazer a interface Livro (Omit<Livro, "codigo">)
      imagemUrl: "", // Pode ser string vazia, já que não tem [Required] no DTO
    };

    const sucesso = await criarLivro(dadosParaEnviar);

    if (sucesso) {
      window.alert("Livro criado com sucesso!");
      onClose();
    } else {
      // Se cair aqui, o erro 500 pode ser Violação de Chave Estrangeira
      window.alert(
        "Erro ao salvar. Verifique se essa área ainda existe no banco.",
      );
    }
  };

  return (
    <div className="container-formInput">
      <div className="header-modal">
        <h3>{livro.codigo === 0 ? "Novo Livro" : "Editar Livro"}</h3>
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
        placeholder="Ex: 1984"
      />

      <label>Autor</label>
      <input
        type="text"
        className="input-add-books"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
        placeholder="Ex: George Orwell"
      />

      <div className="row-input">
        <div>
          <label>Ano</label>
          <input
            type="number"
            className="input-add-books"
            value={ano}
            onChange={(e) => setAno(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Área</label>
          <select
            className="input-add-books"
            value={areaId}
            onChange={(e) => setAreaId(Number(e.target.value))}
          >
            <option value={0}>Selecione...</option>
            {areas.map((area) => (
              <option key={area.id} value={area.id}>
                {area.nome}
              </option>
            ))}
          </select>
        </div>
      </div>

      <label>Editora</label>
      <input
        type="text"
        className="input-add-books"
        value={editora}
        onChange={(e) => setEditora(e.target.value)}
      />

      <button className="btn_addLivro" onClick={handleCriar}>
        {livro.codigo === 0 ? "Cadastrar Livro" : "Salvar Alterações"}
      </button>
    </div>
  );
}
