import { useEffect, useRef, useState } from "react";
import { Button, Fab, Popover, Typography } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";

export const Chatbot = () => {
  const [openBot, setOpenBot] = useState(false);
  const [openPopover, setOpenPopover] = useState(false);
  const fabRef = useRef(null);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setOpenPopover(true);

      const closeTimer = setTimeout(() => {
        setOpenPopover(false);
      }, 10000);

      closeTimerRef.current = closeTimer;
    }, 3000);
    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimerRef.current);
    };
  }, []);

  return (
    <>
      {/* Botón flotante */}
      <Button
        ref={fabRef}
        variant="contained"
        color="secondary"
        onClick={() => {
          setOpenBot((prev) => !prev);
          setOpenPopover(false);
        }}
        className="!fixed bottom-4 right-4 z-10000 border-r-8"
      >
        {openBot ? (
          <CloseIcon />
        ) : (
          <div className="flex">
            <p className="mr-4">NASABOT</p>
            <ChatIcon />
          </div>
        )}
      </Button>

      <div
        className={`fixed bottom-12 right-4 w-4/5 max-w-sm md:max-w-md h-[80vh] shadow-lg rounded-xl overflow-hidden z-10000 transform transition-all duration-300 ${
          openBot
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <iframe
          src="https://rebot.cpaferrere.com/public/12Jhez1fNM7q_7GUvFEe_LRNt5wOOXyY3-v--GFjOKQ"
          title="NasaBot"
          className="w-full h-full border-0"
        ></iframe>
      </div>

      {openPopover && !openBot && (
        <div className="fixed bottom-16 right-8 z-10000 bg-white text-purple-800 border-purple-300 border-1 p-3 rounded-lg shadow-lg animate-slide-in pointer-events-auto drop-shadow-black ">
          Do you want to know if this happens in your city? 😊
        </div>
      )}
    </>
  );
};
