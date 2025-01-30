"use client";

import { useConvexAuth, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";


export default function Home() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const { user, isLoaded } = useUser(); 

  if (isLoading) return <p>Loading...</p>; // Évite un rendu serveur différent du client
  if (!isLoaded) return <p>Loading...</p>; 

  return (
    <>
      <Navbar/>
    </>
  );
}
