"use client";

import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export default function Component({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="main-page-wrapper">
      {children}
      {/*<ScrollToTop />*/}
    </div>
  );
}
