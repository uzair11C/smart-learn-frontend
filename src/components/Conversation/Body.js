import React from "react";

export const Body = () => {
  return (
    <div style={{ flex: "1 1 0", overflowY: "auto" }}>
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          padding: "1rem",
          justifyContent: "flex-end",
        }}
      >
        <div style={{ order: "2" }}>
          <img
            style={{
              display: "block",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
            src="/images/placeholder.jpg"
            alt="Avatar"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                color: "rgb(107 114 128 / 1)",
              }}
            >
              Moeed Rafi
            </div>
          </div>
          <div
            style={{
              fontSize: "1rem",
              borderRadius: "16px",
              lineHeight: "1.25rem",
              display: "inline-block",
              width: "fit-content",
              overflow: "hidden",
              padding: "1.25rem",
              color: "white",
              background:
                "url('/public/images/Card.png'), linear-gradient(-253.09deg, rgba(217, 217, 217, 0.15) 100.53%, rgba(217, 217, 217, 0) 100.04%)",
            }}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              imperdiet semper lacinia. Aenean varius tellus ut odio fermentum
              pulvinar.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
