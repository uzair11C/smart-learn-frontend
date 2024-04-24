import React from "react";

export const Avatar = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "relative",
          display: "inline-block",
          borderRadius: "50%",
          overflow: "hidden",
          height: "5rem",
          width: "5rem",
        }}
      >
        <img
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
          src="/images/placeholder.jpg"
          alt="Avatar"
        />
      </div>
    </div>
  );
};
