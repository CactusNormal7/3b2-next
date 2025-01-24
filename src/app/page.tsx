"use client";

import Image from "next/image";
import styles from "./page.module.css";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useAuthActions } from "@convex-dev/auth/react";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  console.log("tasksa", tasks);
  const { signIn } = useAuthActions();
  return (
    <>
      <button onClick={() => void signIn("github")}>Sign in with GitHub</button>
      <div>{tasks?.map((task) => <div key={task._id}>{task.text}</div>)}</div>
    </>
  );
}
