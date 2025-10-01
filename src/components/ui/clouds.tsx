"use client";
import React from "react";

type Props = { intensity?: "low" | "medium" | "high"; layer?: "below" | "above"; palette?: "indigo" | "white" | "both" };

export default function CloudsBackdrop({ intensity = "high", layer = "below", palette = "indigo" }: Props) {
  const opacity = intensity === "high" ? "opacity-40" : intensity === "medium" ? "opacity-30" : "opacity-20";
  const z = layer === "above" ? "z-10" : "-z-10";
  return (
    <div className={`pointer-events-none absolute inset-0 ${z} overflow-hidden ${opacity}`} aria-hidden>
      {(palette === "indigo" || palette === "both") && (
        <>
          <div className="cloud-layer cloud-layer-1" />
          <div className="cloud-layer cloud-layer-2" />
          <div className="cloud-layer cloud-layer-3" />
        </>
      )}
      {(palette === "white" || palette === "both") && (
        <div className="cloud-layer cloud-layer-white" />
      )}
      <div className="clouds-vignette" />
    </div>
  );
}
