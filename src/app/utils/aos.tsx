"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-quad",
      duration: 600,
    });
  }, []);

  return null;
};
