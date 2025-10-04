import { useEffect } from "react";
import L from "leaflet";

const boundsMendoza = [
  [-37.0, -70.5], // suroeste (lat, lng)
  [-31.5, -66.5], // noreste (lat, lng)
];

export const Layers = () => {
  useEffect(() => {
    const map = L.map("map", {
      center: [-32.8895, -68.8458],
      zoom: 8,
      maxBounds: boundsMendoza,
      maxBoundsViscosity: 0.5,
    });

    // Base layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );

    const geoJsonFiles = [
      {
        name: "Water Extraction",
        path: "/geojson/water_extraction.geojson",
        color: "#27F5B0",
      },
      {
        name: "Water Flow",
        path: "/geojson/water_flow.geojson",
        color: "#276CF5",
      },
      {
        name: "Vineyard",
        path: "/geojson/vinyards.geojson",
        color: "#F54927",
      },
    ];

    const layers = {};

    const createLayerControl = () => {
      L.control.layers(null, layers, { position: "topleft" }).addTo(map);
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

          if (index === 0) geoJsonLayer.addTo(map);
        })
    );

    Promise.all(geoJsonPromises).then(createLayerControl);
  }, []);

  return <div id="map" className=" w-1/2 m-8" style={{ height: "80vh" }}></div>;
};
