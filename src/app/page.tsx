"use client";

import Image from "next/image";
import styles from "./page.module.css";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  console.log("tasksa", tasks);

  return (
    <>
    <div>
      {tasks?.map( ({_id, text}) => <div key={_id}> {text}</div>   )}
    </div>
    </>
  );
}
