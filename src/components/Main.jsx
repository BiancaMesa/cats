import "../scss/components/Main.scss";
// import { Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import CatsContainer from "./CatsContainer";
import Mission from "./Mission";
import Goals from "./Goals";
import Support from "./Support";
// import Contact from "./Contact";


function Main() {
  return (
    <main>
      <Hero />
      <CatsContainer />
      <Mission />
      <Goals />
      <Support />
      {/* <Contact /> */}
    </main>
  );
}

export default Main;
