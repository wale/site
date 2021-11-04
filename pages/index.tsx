import Head from "next/head";
import Particles from "react-tsparticles";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

import ThemeChanger from "../components/ThemeChanger"


export default function Home() {
  return (
    <body>
      <Navbar/>
      <main id="mainContent">
        <h1 id="logo">/wɐːli:/</h1>
        <h2>Java developer, randomly creative.</h2>
      </main>
      <Footer/>
    </body>
  ) 
}