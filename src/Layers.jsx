import { useEffect } from "react";
import L from "leaflet";
import { Typography } from "@mui/material";
import { useRef } from "react";

const boundsMendoza = [
  [-37.0, -70.5], // suroeste (lat, lng)
  [-31.5, -66.5], // noreste (lat, lng)
];

export const Layers = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map", {
        center: [-32.8895, -68.8458],
        zoom: 8,
        maxBounds: boundsMendoza,
        maxBoundsViscosity: 0.5,
        minZoom: 6,
      });
    }

    // Base layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      mapRef.current
    );

    const geoJsonFiles = [
      {
        name: "Water Extraction",
        path: "/hackaton/geojson/water_extraction.geojson",
        color: "#27F5B0",
      },
      {
        name: "Water Flow",
        path: "/hackaton/geojson/water_flow.geojson",
        color: "#276CF5",
      },
      {
        name: "Vineyard",
        path: "/hackaton/geojson/vinyards.geojson",
        color: "#F54927",
      },
      {
        name: "Geological Failures",
        path: "/hackaton/geojson/failures.geojson",
        color: "brown",
      },
    ];

    const layers = {};

    const createLayerControl = () => {
      L.control
        .layers(null, layers, { position: "topleft" })
        .addTo(mapRef.current);
    };

    // Load GeoJSONs
    const geoJsonPromises = geoJsonFiles.map((geoJson, index) =>
      fetch(geoJson.path)
        .then((res) => res.json())
        .then((data) => {
          const geoJsonLayer = L.geoJSON(data, {
            style: { weight: 2, color: geoJson.color, fillOpacity: 0.1 },
            pointToLayer: (feature, latlng) => {
              return L.circleMarker(latlng, {
                radius: 6, // tamaño fijo en píxeles
                fillColor: "white", // color del relleno
                color: "red", // borde
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8,
              });
            },
          });
          layers[geoJson.name] = geoJsonLayer;

          if (index === 0) geoJsonLayer.addTo(mapRef.current);
        })
    );

    Promise.all(geoJsonPromises).then(createLayerControl);

    return () => {
      mapRef.current?.remove(); // opcional, elimina el mapa si el componente se desmonta
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row justify-evenly px-4 ">
      <div className="w-full md:w-1/2 md:mt-0 mt-4 px-0 md:px-4">
        <h3 className="text-xl font-extrabold font-montserrat text-gray-700 mb-4">
          What did we take into consideration?
        </h3>
        <Typography className="!text-md !my-4">
          In Mendoza, large-scale groundwater extractions are carried out to
          sustain the region’s extensive agricultural production. Periods of
          drought lead to intensified pumping over short intervals, which has
          been identified as one of the main drivers of land subsidence. This
          process also reduces the soil’s capacity for natural recharge and
          water retention.
        </Typography>
        <Typography className="!text-md ">
          In addition, the presence of geological faults combined with
          differential land subsidence —where the ground sinks unevenly across
          specific areas— significantly increases the associated risks. These
          variations in settlement can amplify structural stresses, leading to
          ground ruptures, tilting of buildings, and higher vulnerability of
          infrastructure such as roads, pipelines, and irrigation systems.
        </Typography>
      </div>
      <div
        id="map"
        className="w-full md:w-1/2 mb-8 md:mb-0 border border-black"
        style={{ height: "60vh", mdHeight: "80vh" }}
      ></div>
    </div>
  );
};
