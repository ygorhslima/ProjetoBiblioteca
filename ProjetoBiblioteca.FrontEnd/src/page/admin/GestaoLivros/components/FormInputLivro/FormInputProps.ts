import type Livro from "../../../../../interfaces/Livro";

export default interface FormInputEditLivroProps{
    livro:Livro;
    onClose:()=>void;
}