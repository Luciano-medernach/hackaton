import { Header } from "./Header";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import { Introduction } from "./Introduction";
import { Layers } from "./Layers";

const sections = [
  { id: "introduccion", label: "Introduccion" },
  { id: "SAR", label: "SAR" },
  { id: "california", label: "California" },
];

const firstImage = {
  imageUrl: "https://picsum.photos/id/1018/600/400",
};

const secondImage = {
  imageUrl: "https://picsum.photos/id/1015/600/400",
};

function App() {
  return (
    <>
      <Header sections={sections} />
      <div className="w-full ">
        <img
          className="w-full h-96 object-cover drop-shadow-2xl"
          src="../public/VINEYARDS-AGRELO-1.jpg"
        />
      </div>

      <Introduction />

      <Layers />
      {sections.map((section) => (
        <h1 id={section.id} key={section.id} className="my-96 p-16">
          {section.label}
        </h1>
      ))}

      <div className="w-1/2">
        <ReactBeforeSliderComponent
          firstImage={firstImage}
          secondImage={secondImage}
          delimiterColor="#fff"
          currentPercentPosition={50}
          withResizeFeel={true}
        />
      </div>
    </>
  );
}

export default App;
