import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Typography } from "@mui/material";
import { RiskAccordion } from "./RisksAccordion";

export const ScrollFrames = () => {
  const totalFrames = 50;
  const [frame, setFrame] = useState(1);
  const containerRef = useRef(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const preloadImages = () => {
      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        img.src = `/hackaton/displacement/frame_${i}.png`;
      }
    };
    preloadImages();
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          const start =
            windowHeight > rect.top + screen.height
              ? windowHeight - (rect.top + screen.height)
              : 0;

          const progress = Math.min(1, start / (rect.height - screen.height));
          const newFrame = Math.min(
            totalFrames,
            Math.max(0, Math.ceil(progress * (totalFrames - 1)))
          );

          setFrame(newFrame);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex p-8" ref={containerRef} id="subsidence">
      {/* Imagen fija a la izquierda */}
      <div
        style={{ width: "32vw" }}
        className="sticky top-8 self-start flex-shrink-0 h-screen  flex flex-col justify-center items-center"
      >
        <img
          src={`/hackaton/displacement/frame_${frame}.png`}
          alt={`Frame ${frame}`}
          className="w-full h-auto border"
        />
        <Typography>Accumulated subsidence in Mendoza</Typography>
        <Typography> (Last 5 years in mm)</Typography>
      </div>

      {/* Contenido de scroll */}
      <div className="flex-1 p-8 space-y-8">
        <motion.h2
          ref={ref}
          className="mt-12 text-2xl px-4 font-extrabold font-montserrat text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          What really happens when the ground subsides?
        </motion.h2>
        <Typography className="p-4 !text-xl">
          When excess groundwater is extracted, the ground begins to sink. This
          happens because the water between the soil particles—in layers of
          sand, gravel, and clay—helps support the weight of the land above. If
          water is removed faster than it is replenished, the groundwater
          pressure disappears, and the weight of the overlying ground is then
          transferred to the soil particles, which move closer together.
        </Typography>
        <Typography className="p-4 !text-xl">
          Initially, the ground can compress and return to its original state
          when the water level rises; this is called elastic deformation and it
          is a temporary change. But if water extraction continues, the
          groundwater pressure drops too much, the pores collapse, and the
          ground compacts permanently; this is called inelastic deformation.
        </Typography>
        <Typography className="p-4 !text-xl">
          In this case, the land subsides and can no longer recover its shape.
          As a result, the ground sinks slowly and, in cases where it is not
          addressed in time, the process can be irreversible and lead to
          multiple consequences. consecuencias.
        </Typography>

        <h3 className="mt-12 px-4 text-xl font-extrabold font-montserrat text-gray-700">
          What are the consequences of ground subsidence?
        </h3>
        <Typography className="px-4 !text-xl">
          The consequences of subsidence affect all citizens equally, as the
          main effects of the sinking ground are reflected in damage to urban
          infrastructure. These problems include:
        </Typography>
        <RiskAccordion />
      </div>
    </div>
  );
};
