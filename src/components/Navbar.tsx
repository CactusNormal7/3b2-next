"use client"; // ⬅️ Ajouté ici, car il contient des hooks côté client

import React from "react";
import Link from 'next/link';
import "../styles/Navbar.css";
import { NavAuthSection } from "@/components/NavAuthSection";

export default function Navbar() {
  return (
    <div id="navbar-main-div">
      <section id="main-content">logo</section>
      <section id="stucked-right-part">
        <div className="nav-link-div">
          <Link className="navbar-link" href="/">Home</Link>
          <Link className="navbar-link" href="/">About</Link>
          <Link className="navbar-link" href="/">Tabs</Link>
          <Link className="navbar-link" href="/">Test</Link>
        </div>
        <NavAuthSection />
      </section>
    </div>
  );
}