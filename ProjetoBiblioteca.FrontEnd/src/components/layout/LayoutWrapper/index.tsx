/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, cloneElement, isValidElement } from "react";
import "./style.css";
import Header from "../Header";
import SideBar from "../SideBar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSetbarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // Novo estado de busca

  const onToggleMenu = () => {
    setIsSetbarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout-wrapper">
      <SideBar isOpen={isSidebarOpen} />
      <div className="wrapper">
        {/* Passamos a função de busca para o Header */}
        <Header onToggleMenu={onToggleMenu} onSearch={setSearchTerm} />

        <main>
          {/* Injetamos a prop searchTerm em todos os componentes filhos 
            que são elementos React válidos.
          */}
          {isValidElement(children) 
            ? cloneElement(children as React.ReactElement<any>, { searchTerm }) 
            : children}
        </main>
      </div>
    </div>
  );
}