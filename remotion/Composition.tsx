import React from "react";
import { AbsoluteFill } from "remotion";

export const MyComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: 60,
        backgroundColor: "white",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h1>Claude AI Skills Hub</h1>
    </AbsoluteFill>
  );
};
