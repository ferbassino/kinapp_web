import React from "react";

export default function Title({ text }) {
  return (
    <div
      style={{
        fontSize: 30,
        fontWeight: "bold",
        color: "#232f62",
        marginTop: 30,
        marginBottom: 30,
      }}
    >
      {text}
    </div>
  );
}
