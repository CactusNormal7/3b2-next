import React from "react";

import "../styles/Navbar.css";
import { SignInButton, SignOutButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <>
      <div id="navbar-mai-div">
        <section id="main-content">logo</section>
        <section id="stucked-right-part">
          <SignInButton  mode="modal">
            <button className="sign-in-button">Sign in</button>
          </SignInButton>
          <SignOutButton></SignOutButton>
        </section>
      </div>
    </>
  );
};

export default Navbar;
