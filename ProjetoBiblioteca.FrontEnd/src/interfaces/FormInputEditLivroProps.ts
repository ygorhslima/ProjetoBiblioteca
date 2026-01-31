import type Livro from "./Livro";

export default interface FormInputEditLivroProps{
    livro:Livro;
    onClose:()=>void;
}