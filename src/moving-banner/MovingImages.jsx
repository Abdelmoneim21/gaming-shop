"use client";

import { Carousel } from "flowbite-react";

export function MovingImage() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="/ramadan_1.jpg" alt="..." />
        <img src="/ramadan_4.jpg" className="" alt="..." />
        <img src="/ramadan_2.jpg" className="md:h-[100%] h-[77%]" alt="..." />
      </Carousel>
    </div>
  );
}
