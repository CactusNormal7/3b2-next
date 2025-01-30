"use client";

import Image from "next/image";
import styles from "./page.module.css";

import { useConvexAuth, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";


export default function Home() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const { user } = useUser();

  console.log("isauth", isAuthenticated);
  console.log("user", user?.id);
  console.log("user", user);

  return (
    <>
      <Navbar></Navbar>
      
    </>
  );
}
