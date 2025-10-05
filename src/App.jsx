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

const sections = [
  { id: "introduccion", label: "Introduction" },
  { id: "map", label: "Map" },
  { id: "subsidence", label: "Subsidence" },
];

function App() {
  return (
    <>
      <Header sections={sections} />
      <div className="w-full ">
        <img className="w-full h-96 object-cover drop-shadow" src={vineyards} />
      </div>

      <Introduction />
      <CaliforniaMendoza />

      <div className="flex justify-evenly">
        <Layers />
        <div className="mt-8 w-1/2 px-4">
          <h3 className="px-4 text-xl font-extrabold font-montserrat text-gray-700">
            What did we take into consideration?
          </h3>
          <Typography className="pt-8 !text-xl">
            In Mendoza, large-scale groundwater extractions are carried out to
            sustain the region’s extensive agricultural production. Periods of
            drought lead to intensified pumping over short intervals, which has
            been identified as one of the main drivers of land subsidence. This
            process also reduces the soil’s capacity for natural recharge and
            water retention.
          </Typography>
          <Typography className="pt-4 !text-xl">
            In addition, the presence of geological faults combined with
            differential land subsidence —where the ground sinks unevenly across
            specific areas— significantly increases the associated risks. These
            variations in settlement can amplify structural stresses, leading to
            ground ruptures, tilting of buildings, and higher vulnerability of
            infrastructure such as roads, pipelines, and irrigation systems.
          </Typography>
        </div>
      </div>

      <ScrollFrames />
      <SliderSAR />
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
