"use client"

import {SignInButton, UserButton, useUser} from "@clerk/nextjs";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {useConvexAuth} from "convex/react";

export function NavAuthSection() {

  const {isLoaded} = useUser();
  const {isLoading, isAuthenticated} = useConvexAuth();

  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "width: 120px; height: 120px",
    },
  };

  return (
    <>
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
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
          <input id="navbar-input" className="basic-input" placeholder="Search"/>
        </form>

        {(isLoaded && !isLoading) ? (
          isAuthenticated ? (<>
            <>
              <UserButton appearance={userButtonAppearance}></UserButton>
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
    </>
  );
}
