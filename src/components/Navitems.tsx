"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useState } from "react";
import Navitem from "./Navitem"; // Adjust the path as needed
import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { handler } from "tailwindcss-animate";

const Navitems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const isAnyOpen = activeIndex !== null;
  const inAnyOpen = activeIndex !== null;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  const navRef = useState<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        return (
          <Navitem
            key={i}
            category={category}
            handleOpen={handleOpen}
            isOpen={activeIndex === i}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default Navitems;
