"use client"; // ⬅️ Ajouté ici, car il contient des hooks côté client

import React from "react";
import Link from 'next/link';
import "../styles/Navbar.scss";
import { NavAuthSection } from "@/components/NavAuthSection";
import { ResponsiveNav } from "@/components/Res";
import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour afficher/masquer la navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div id="navbar-main-div">
      <section id="main-content">logo</section>
      <section id="stucked-right-part">
        <div className={`nav-link-div ${isOpen && "active"}`}>
          <Link className="navbar-link" href="/">Home</Link>
          <Link className="navbar-link" href="/">About</Link>
          <Link className="navbar-link" href="/">Tabs</Link>
          <Link className="navbar-link" href="/">Test</Link>
        </div>

        <NavAuthSection />

        <ResponsiveNav />

      </section>
    </div>
  );
}