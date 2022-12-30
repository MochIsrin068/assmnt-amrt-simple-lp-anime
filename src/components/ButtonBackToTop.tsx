import React from "react";
import IconArrowUp from "../assets/arrow-up.png";

export default function ButtonBackToTop() {
  return (
    <>
      <button type="button" onClick={() => window.scrollTo(0, 0)}>
        <img src={IconArrowUp} alt="" />
      </button>
    </>
  );
}
