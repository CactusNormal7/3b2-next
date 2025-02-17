"use client"

import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { faXmarksLines } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";

function navSearch() {
  if (document.querySelector('.nav-button-div') != null) {
    let but_div = document.querySelector('.nav-button-div')
    console.log(but_div)
    but_div?.classList.toggle("trans")
  }
}

function navLink() {
  document.querySelector('.basic-button2')?.setAttribute("icon", `${faXmarksLines}`);
}

export function ResponsiveNav() {

  return (
    <>
      <section className="res">
        {/*TODO (iconized button / input)  make a component for this*/}
        <div className="nextjs-static-indicator-toast-icon">
          <Button variant="primary" icon={faGripLines} className="basic-button2" onClick={navLink}></Button>
          <Button variant="primary" icon={faMagnifyingGlass} className="basic-button2" onClick={navSearch}></Button>
        </div>
      </section>
    </>
  );
}
