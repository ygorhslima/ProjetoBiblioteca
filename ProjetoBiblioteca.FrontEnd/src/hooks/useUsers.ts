/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";
import { userService } from '../services/UserService'
import type Usuario from "../interfaces/Usuario";

const useUsers = (searchUser: string, cpf?: string) =>{
    const [usuario, setUsuario] = useState<Usuario[]>();
    const [loading, setLoading] = useState(true);

    const loadData = async()=>{
        try {
            setLoading(true);
            const [usersData] = await Promise.all([userService.getAllUsers()]);
            setUsuario(usersData);
        } catch (error) {
            console.error("Erro ao buscar dados: ",error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        loadData();
    },[]);

    const usersFiltrados = usuario?.filter((u)=>{
        const matchesSearch = u.nome?.toLowerCase().includes(searchUser.toLowerCase()) || u.email?.toLowerCase().includes(searchUser.toLowerCase());
        if(cpf){
            return matchesSearch && u.cpf === cpf;
        }
        return matchesSearch;
    })

    return {usersFiltrados, loading, reload: loadData, setUsuario}
}

export default useUsers;