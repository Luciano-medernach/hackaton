import { useState } from "react";
import { Header } from "./Header";

const sections = [
  { id: "introduccion", label: "Introduccion" },
  { id: "SAR", label: "SAR" },
  { id: "california", label: "California" },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <Header sections={sections}>
      {sections.map((section) => (
        <h1 id={section.id} key={section.id} className="my-96 p-16">
          {section.label}
        </h1>
      ))}
    </Header>
  );
}

export default App;
