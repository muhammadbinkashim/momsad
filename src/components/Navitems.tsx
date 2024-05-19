"use client"
import { PRODUCT_CATEGORIES } from "@/config"
import { useState } from "react"
import Navitem from "./Navitem"  // Adjust the path as needed

const Navitems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)
  const isAnyOpen = activeIndex !== null
  const inAnyOpen = activeIndex !== null

  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null)
          } else {
            setActiveIndex(i)
          }
        }

        return (
          <Navitem
            key={i}
            category={category}
            handleOpen={handleOpen}
            isOpen={activeIndex === i}
            isAnyOpen={isAnyOpen}
          />
        )
      })}
    </div>
  )
}

export default Navitems
