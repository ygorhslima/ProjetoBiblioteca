/* eslint-disable @typescript-eslint/no-explicit-any */
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
    <div className="layout-wrapper">
      <SideBar isOpen={isSidebarOpen} />
      <div className="wrapper">
        <Header onToggleMenu={onToggleMenu}/>
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}