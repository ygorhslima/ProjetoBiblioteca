import type Livro from "./Livro";
import type Usuario from "./Usuario";

export default interface Emprestimo {
  id: number;
  usuario: Usuario;
  livro: Livro;
  dataEmprestimo: string;
  dataDevolucaoPrevista: string;
  dataDevolucaoReal: string;
}
