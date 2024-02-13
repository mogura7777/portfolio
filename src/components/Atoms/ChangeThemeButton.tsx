/** @format */

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunLight, HalfMoon } from "iconoir-react";

export const ChangeThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <button
        aria-label="DarkModeToggle"
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {mounted && (
          <>
            {theme === "dark" ? (
              <HalfMoon color="yellow" strokeWidth="2" width={20} />
            ) : (
              <SunLight color="white" strokeWidth="2" width={20} />
            )}
          </>
        )}
      </button>
    </>
  );
};
