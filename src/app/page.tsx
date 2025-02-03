"use server";

//import { api } from "../../convex/_generated/api";
import Navbar from "@/components/Navbar";
import "../styles/Home.scss"

export default async function Home() {
  return (
    <>
      <Navbar/>

      <div id="home-page-container">
        <section id="home-container-1">
          <div>
            <h1>
              Create easy and beautiful tab.
            </h1>
          </div>
          <div>
          </div>
        </section>
      </div>
    </>
  );
}


