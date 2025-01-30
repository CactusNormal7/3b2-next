"use client";

import React from "react";
import Link from 'next/link'
import "../styles/Navbar.css";
import { SignInButton, SignOutButton, UserButton, UserProfile, useUser } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";

const Navbar = () => {
  const { user, isLoaded } = useUser();
  const { isLoading, isAuthenticated } = useConvexAuth();

  return (
    <>
      <div id="navbar-main-div">
        <section id="main-content">logo</section>
        <section id="stucked-right-part">

          <div className="nav-link-div">
            <Link className="navbar-link" href="/">Home</Link>
            <Link className="navbar-link" href="/">Home</Link>
            <Link className="navbar-link" href="/">Home</Link>
            <Link className="navbar-link" href="/">Home</Link>
            <Link className="navbar-link" href="/">Home</Link>
            <Link className="navbar-link" href="/">Home</Link>
          </div>

          <section className="nav-button-div">
            {(isLoaded && !isLoading) ? (
              !isAuthenticated ? (<>
                <SignInButton>
                  <button className="basic-button">Sign in</button>
                </SignInButton>
              </>) : (
                <>
                  <UserButton ></UserButton >
                </>
              )
            ) : (
              <>
                <span>ratio</span>
              </>
            )}
            <button className="basic-button">Search</button>
          </section>

        </section>
      </div>
    </>
  );
};

export default Navbar;
