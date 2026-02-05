/**
 * 
 O LibraryContext atua como uma "fonte única da verdade" para os dados que são compartilhados por muitos componentes diferentes no seu sistema de biblioteca.

Em termos simples, ele resolve o problema de carregar as mesmas informações (como a lista de áreas/categorias) em vários lugares ao mesmo tempo (Sidebar, Cadastro de Livro, Edição de Livro).
 */

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import type Area from "../interfaces/Area";
import { bookService } from "../services/BookService";

interface LibraryContextData {
  areas: Area[];
  loadingAreas: boolean;
}

const LibraryContext = createContext<LibraryContextData>({} as LibraryContextData);

export default function LibraryProvider({children}:{children:ReactNode}){
    const [areas, setAreas] = useState<Area[]>([]);
    const [loadingAreas, setLoadingAreas] = useState(true);

    useEffect(()=>{
        bookService.getAreas()
        .then(setAreas)
        .finally(()=>setLoadingAreas(false));
    },[]);

    return(
        <LibraryContext.Provider value={{areas,loadingAreas}}>
            {children}
        </LibraryContext.Provider>
    )
}

export const useLibrary = () => useContext(LibraryContext);