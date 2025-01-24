"use client";

import Image from "next/image";
import styles from "./page.module.css";

import { useConvexAuth, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import {  SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const tasks = useQuery(api.tasks.get);

    const { isLoading, isAuthenticated } = useConvexAuth();
    const {user} = useUser();

  return (
    <>
      <SignInButton mode="modal"></SignInButton>
      <SignOutButton></SignOutButton>
      <div>{tasks?.map((task) => <div key={task._id}>{task.text}</div>)}</div>
    </>
  )
}
