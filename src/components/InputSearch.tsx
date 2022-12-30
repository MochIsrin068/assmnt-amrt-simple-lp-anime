import React from "react";

export default function InputSearch({ onSearch, onClearSearch }: any) {
  return (
    <>
      <div className="input-search">
        <input
          type="text"
          placeholder="Search anime movie..."
          onChange={onSearch}
        />
      </div>
    </>
  );
}
