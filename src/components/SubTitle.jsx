import React from "react";

export default function SubTitle({ text, value }) {
  return (
    <div
      style={{
        fontSize: 26,
        fontWeight: "bold",
        color: "#232f62",
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      {text}: {value}
    </div>
  );
}
