import { useEffect } from "react";
import L from "leaflet";
import parseGeoraster from "georaster";
import GeoRasterLayer from "georaster-layer-for-leaflet";

export const Layers = () => {
  useEffect(() => {
    const map = L.map("map").setView([-32.8895, -68.8458], 8);

    // Base layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );

    const tiffFiles = [
      {
        name: "NDVI 2023",
        path: "/tiffs/mapa_comportamiento_georref.tif",
        colorScale: "viridis",
      },
    ];

    const layers = {};

    const createLayerControl = () => {
      L.control.layers(null, layers, { position: "topleft" }).addTo(map);
    };

    // Cargar todos los GeoTIFF
    Promise.all(
      tiffFiles.map(({ name, path }) =>
        fetch(path)
          .then((res) => res.arrayBuffer())
          .then(parseGeoraster)
          .then((georaster) => {
            const layer = new GeoRasterLayer({ georaster, opacity: 0.7 });
            layers[name] = layer;

            // activamos la primera capa por defecto
            if (name === "NDVI 2023") layer.addTo(map);
          })
      )
    ).then(() => {
      fetch("/geojson/datos_filtrados.geojson")
        .then((res) => res.json())
        .then((data) => {
          const geoJsonLayer = L.geoJSON(data, {
            style: { color: "red", weight: 2, fillOpacity: 0.1 },
          });
          layers["Mendoza GeoJSON"] = geoJsonLayer;

          createLayerControl();
        });
    });
  }, []);

  return <div id="map" style={{ height: "100vh", width: "100%" }}></div>;
};
