import React from "react";
import img from "../images/hero_img.jfif";

export default function Hero() {
  return (
    <div>
      <img src={img} alt="" className="heroImg" />
      <h1>Online Experiences</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit nulla
        veritatis officiis porro, soluta ipsam possimus ipsum modi velit sit
        dolores id illo, corporis error eos, sapiente mollitia molestias
        blanditiis.
      </p>
    </div>
  );
}
