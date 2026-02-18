// src/layouts/ClientLayout.tsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../../../layout/Header";
import ClientSideBar from "../ClientSideBar";
import './style.css'
export default function ClientLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const onToggleMenu = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="layout-wrapper">
      <ClientSideBar isOpen={isSidebarOpen} />
      <div className="wrapper">
        <Header onToggleMenu={onToggleMenu}/>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}