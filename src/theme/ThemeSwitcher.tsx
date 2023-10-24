"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };
  return (
    <div>
      <button onClick={toggleTheme}>
        {/* have a moon and sun logo to switch */}
        {theme === "light" ? (
          <BsMoonStarsFill size={20} />
        ) : (
          <BsSunFill size={20} />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
