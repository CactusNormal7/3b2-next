"use client";

import React from "react";
import Link from 'next/link'
import "../styles/Navbar.css";
import { SignInButton, SignOutButton, UserButton, UserProfile, useUser } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const { user, isLoaded } = useUser();
  const { isLoading, isAuthenticated } = useConvexAuth();

  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "width: 120px; height: 120px",
    },
  };

  return (
    <>
      <div id="navbar-main-div">
        <section id="main-content">logo</section>
        <section id="stucked-right-part">

          <div className="nav-link-div">
            <Link className="navbar-link" href="/">Home</Link>
            <Link className="navbar-link" href="/">About</Link>
            <Link className="navbar-link" href="/">Tabs</Link>
            <Link className="navbar-link" href="/">Test</Link>
          </div>

          <section className="nav-button-div">

            {(isLoaded && !isLoading) ? (
              !isAuthenticated ? (<>
                <SignInButton mode="modal">
                  <button className="basic-button">Sign in</button>
                </SignInButton>
              </>) : (
                <>
                </>
              )
            ) : (
              <>
                <span></span>
              </>
            )}

            <form>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
              <input id="navbar-input" className="basic-input" placeholder="Search" />
            </form>

            {(isLoaded && !isLoading) ? (
              isAuthenticated ? (<>
                <>
                  <UserButton appearance={userButtonAppearance}></UserButton >
                </>
              </>) : (
                <></>
              )
            ) : (
              <>
                <span></span>
              </>
            )}
          </section>
        </section>
      </div>
    </>
  );
};

export default Navbar;
