// src/layouts/AdminLayout.tsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../../layout/Header";
import AdminSideBar from "../AdminSideBar";
import './style.css'
export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const onToggleMenu = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout-wrapper">
      <AdminSideBar isOpen={isSidebarOpen} />
      <div className="wrapper">
        <Header onToggleMenu={onToggleMenu}/>
        <main>
          {/* O Outlet funciona como o {children} automático das rotas */}
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}