import { Header } from "./Header";

import "react-before-after-slider-component/dist/build.css";
import { Introduction } from "./Introduction";
import { Layers } from "./Layers";
import { ScrollFrames } from "./ScrollFrames";
import { Chatbot } from "./Chatbot";
import { Footer } from "./Footer";
import { CaliforniaMendoza } from "./CaliforniaMendoza";
import { SliderSAR } from "./SliderSAR";
import { Typography } from "@mui/material";
import vineyards from "/VINEYARDS-AGRELO-1.jpg";
import { DisplacementVelocity } from "./DisplacementVelocity";

const sections = [
  { id: "introduccion", label: "Introduction" },
  { id: "map", label: "Map" },
  { id: "subsidence", label: "Subsidence" },
  { id: "graphics", label: "Graphics" },
];

function App() {
  return (
    <>
      <Header sections={sections} />
      <div className="w-full ">
        <img className="w-full h-96 object-cover drop-shadow" src={vineyards} />
      </div>

      <Introduction />
      <div className="flex justify-center px-4 pt-12 pb-24">
        <CaliforniaMendoza />
      </div>

      <Layers />

      <ScrollFrames />
      <SliderSAR />
      <DisplacementVelocity />
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
