import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";
import { useEffect, useState } from "react";

export const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("isdarkMode") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
   if (isDarkMode === "dark") {
    element.classList.add("dark")
    localStorage.setItem("isdarkMode", "dark")
   }else {
    element.classList.remove("dark")
    localStorage.setItem("isdarkMode", "light")
   }
  });

  return (
    <div className="relative">
      <img
        src={LightButton}
        alt="LightButton"
        onClick={() => setIsDarkMode(isDarkMode === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          isDarkMode === "dark" ? "opacity-0" : "opacity-100"
        } `}
      />
      <img
        src={DarkButton}
        alt="DarkButton"
        onClick={() => setIsDarkMode(isDarkMode === "light" ? "dark" : "light")}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 "
      />
    </div>
  );
};
