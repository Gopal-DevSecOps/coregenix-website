"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${hidden ? "hidden" : ""}`} aria-hidden="true">
      <div className="spinner" />
    </div>
  );
}
