import { useState } from "react";
import "./style.css";
import Header from "../Header";
import SideBar from "../SideBar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSetbarOpen] = useState(true);

  const onToggleMenu = () => {
    setIsSetbarOpen(!isSidebarOpen);
  };

  return (
    // Container Pai: Ocupa a tela toda e não deixa scroll no body
    <div className="layout-wrapper">
      {/* 1. Lado Esquerdo: Sidebar fixa */}
      <SideBar isOpen={isSidebarOpen} />

      {/* 2. Lado Direito: Container vertical para Header + Conteúdo */}
      <div className="wrapper">
        {/* Header no topo */}
        <Header onToggleMenu={onToggleMenu} />

        {/* Área de conteúdo que realmente rola */}
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}
