import Head from "next/head";
import Particles from "react-tsparticles";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

import {ThemeChanger, ThemedLogo} from "../components/ThemeChanger"


export default function Home() {
  return (
    <body>
      <Navbar/>
      <div id="main">
        <div className="item">
          <ThemedLogo/>
        </div>
        <div className="item">
        <h2>Java developer, randomly creative.</h2>
        </div>
      </div>
      <Footer/>
    </body>
  ) 
}