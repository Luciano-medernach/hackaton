import { useState, useEffect, useRef } from "react";

export const ScrollFrames = () => {
  const totalFrames = 50;
  const [frame, setFrame] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

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
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex" ref={containerRef}>
      {/* Imagen fija a la izquierda */}
      <div className="sticky top-0 self-start flex-shrink-0 w-96 h-screen  flex justify-center items-center">
        <img
          src={`/displacement/frame_${frame}.png`}
          alt={`Frame ${frame}`}
          className="w-full h-auto border"
        />
      </div>

      {/* Contenido de scroll */}
      <div className="flex-1 p-8 space-y-8">
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scroll para
            ver cómo cambia la imagen a la izquierda mientras el texto baja.
          </p>
        ))}
      </div>
    </div>
  );
};
