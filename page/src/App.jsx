import { Header } from "./Header";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import { Introduction } from "./Introduction";
import { Layers } from "./Layers";
import { ScrollFrames } from "./ScrollFrames";
import { Chatbot } from "./Chatbot";
import { Typography } from "@mui/material";
import { Footer } from "./Footer";
import { CaliforniaMendoza } from "./CaliforniaMendoza";

const sections = [
  { id: "introduccion", label: "Introduction" },
  { id: "subsidence", label: "Subsidence" },
  { id: "california", label: "IA" },
];

const firstImage = {
  imageUrl: "/SinColorPhase.jpg",
};

const secondImage = {
  imageUrl: "/ConColorPhase.jpg",
};

function App() {
  return (
    <>
      <Header sections={sections} />
      <div className="w-full ">
        <img
          className="w-full h-96 object-cover drop-shadow"
          src="/VINEYARDS-AGRELO-1.jpg"
        />
      </div>

      <Introduction />
      <CaliforniaMendoza />

      <Layers />

      <ScrollFrames />
      <div className="flex flex-col m-4 justify-center items-center">
        <div className="w-2/3 ">
          <ReactBeforeSliderComponent
            firstImage={firstImage}
            secondImage={secondImage}
            delimiterColor="#fff"
            currentPercentPosition={20}
            withResizeFeel={true}
          />
        </div>
        <Typography className="mt-4 text-gray-700">Phase Unwrapping</Typography>
      </div>
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
