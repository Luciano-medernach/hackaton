import Container from "@mui/material/Container";
import { Comparison } from "./Comparison";

export const Introduction = () => {
  return (
    <Container className="p-4" id="introduccion">
      <h2 className="text-3xl my-2 font-bold">Introduccion</h2>
      <p className="mt-2">
        <strong>
          ¿Y si el suelo que sostiene nuestras ciudades y nuestros campos más
          fértiles se estuviera desmoronando en silencio bajo nuestros pies?
        </strong>{" "}
        En muchas regiones del mundo, una crisis invisible está sucediendo. Para
        satisfacer las necesidades hídricas de la agricultura intensiva y las
        grandes metrópolis, estamos vaciando los acuíferos subterráneos a un
        ritmo insostenible, y la consecuencia es inadvertida e irreversible: la
        tierra misma se está hundiendo, amenazando con destruir todo lo que
        hemos construido sobre ella.
      </p>
      <p className="mt-4">
        Un ejemplo de este fenómeno es el caso del valle de San Joaquín en
        California (US) en el cual la extracción de agua subterránea para la
        agricultura ha permitido que esta zona se haya convertido en una de las
        regiones agrícolas más productivas del mundo, contribuyendo al mismo
        tiempo a una de las mayores alteraciones de la superficie terrestre
        atribuidas a la humanidad.
      </p>
      <blockquote className="mt-8 border-l-4 border-red-500 pl-4 italic text-xl text-gray-700">
        Pero, ¿somos ajenos a esta problematica?
      </blockquote>
      <p className="mt-8">
        {" "}
        En el centro-oeste de Argentina se encuentra <strong>Mendoza</strong>,
        una provincia ubicada al pie de la cordillera de los Andes. Es conocido
        por ser un importante productor agropecuario y también por ser la
        principal provincia vitivinícola de Argentina, concentrando más del 70%
        de la producción nacional de vino.
      </p>
      <p className="mt-4">
        California y Mendoza tienen sorprendentes similitudes que las convierten
        en regiones comparables en varios aspectos clave. A pesar de estar en
        hemisferios diferentes, ambas comparten características geográficas,
        climáticas y económicas que definen su identidad.
      </p>
      <div className="flex justify-between my-4">
        <Comparison />
        <div className="flex">
          <img
            src="/california_displacement.jpeg"
            className="border-black border-2 mr-4 w-full h-64"
          />
          <img
            src="/california_displacement2.jpg"
            className="border-black border-2 w-full h-64"
          />
        </div>
      </div>
    </Container>
  );
};
