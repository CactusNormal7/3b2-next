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


        {/*TODO (iconized button / input)  make a component for this*/}
        <form>
          <div className="input-container">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
            <input id="navbar-input" className="basic-input" placeholder="Search"/>
          </div>
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
