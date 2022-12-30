import React from "react";
import IconArrowUp from "../assets/arrow-up.png";

export default function ButtonBackToTop() {
  return (
    <>
      <button
        type="button"
        onClick={() => window.scrollTo(0, 0)}
        data-testid="button-back-wrapper"
      >
        <img src={IconArrowUp} alt="" data-testid="icon-arrow-back" />
      </button>
    </>
  );
}
