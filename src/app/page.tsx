"use server";

//import { api } from "../../convex/_generated/api";
import Navbar from "@/components/Navbar";
import "../styles/Home.scss"
import { BasicButton } from "@/components/BasicButton";

export default async function Home() {
  return (
    <>
      <Navbar/>

      <div id="home-page-container">


        <section id="home-container-1">

          <div id="home-container-1-left-part">
            <div style={{ width: "85%", height: "90%"}}>
              <h1 className="main-title">Create easily beautiful guitar tabs</h1>

              <h3 className="main-subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut la</h3>

              <BasicButton text="Learn more"></BasicButton>
            </div>
          </div>


          <div id="home-container-1-right-part">
          </div>

        </section>

      </div>
    </>
  );
}


