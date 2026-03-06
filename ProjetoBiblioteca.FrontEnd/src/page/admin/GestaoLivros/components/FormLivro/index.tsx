/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./style.css";
import { CircleX } from "lucide-react";
import useBooks from "../../../../../hooks/useBooks";

export default function FormLivro({ livro, onClose }: { livro: any, onClose: () => void }) {
  // 1. Pegamos as duas funções do hook
  const { criarLivro, editarLivro, areas } = useBooks("");

  // 2. Estado inicial (funciona tanto para novo quanto para editar)
  const [formData, setFormData] = useState({
    titulo: livro.titulo || "",
    autor: livro.autor || "",
    ano: livro.ano || 0,
    editora: livro.editora || "",
    areaId: livro.areaId || livro.area || 0, // Fallback para diferentes nomes de prop
  });

  const isEditing = livro.codigo !== 0;

  // Função genérica para atualizar qualquer campo
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === "ano" || name === "areaId" ? Number(value) : value }));
  };

  const handleSubmit = async () => {
    if (formData.areaId === 0) return window.alert("Selecione uma área!");

    // Montamos o payload único
    const payload = {
      ...formData,
      area: "", 
      imagemUrl: ""
    };

    // 3. Lógica Dinâmica: Decide qual função chamar
    const sucesso = isEditing 
      ? await editarLivro(livro.codigo, payload) 
      : await criarLivro(payload);

    if (sucesso) {
      window.alert(isEditing ? "Editado com sucesso!" : "Criado com sucesso!");
      onClose();
    } else {
      window.alert("Erro ao processar a solicitação.");
    }
  };

  return (
    <div className="container-formInput">
      <div className="header-modal">
        <h3>{isEditing ? `Editando: ${livro.titulo}` : "Novo Livro"}</h3>
        <button onClick={onClose} className="btn-close-modal"><CircleX /></button>
      </div>

      <label>Título</label>
      <input name="titulo" className="input-add-books" value={formData.titulo} onChange={handleChange} />

      <label>Autor</label>
      <input name="autor" className="input-add-books" value={formData.autor} onChange={handleChange} />

      <div className="row-input">
        <div style={{ flex: 1 }}>
          <label>Ano</label>
          <input name="ano" type="number" className="input-add-books" value={formData.ano} onChange={handleChange} />
        </div>
        <div style={{ flex: 1 }}>
          <label>Área</label>
          <select name="areaId" className="input-add-books" value={formData.areaId} onChange={handleChange}>
            <option value={0}>Selecione...</option>
            {areas.map(a => <option key={a.id} value={a.id}>{a.nome}</option>)}
          </select>
        </div>
      </div>

      <label>Editora</label>
      <input name="editora" className="input-add-books" value={formData.editora} onChange={handleChange} />

      <button className="btn_addLivro" onClick={handleSubmit}>
        {isEditing ? "Salvar Alterações" : "Cadastrar Livro"}
      </button>
    </div>
  );
}