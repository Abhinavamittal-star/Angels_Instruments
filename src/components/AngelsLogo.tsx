import React from "react";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  /** Kept for backwards compatibility. The logo artwork already includes the wordmark. */
  showText?: boolean;
  /** Render on a light chip so the dark wordmark stays legible on dark backgrounds. */
  onDark?: boolean;
}

const HEIGHTS = { sm: 40, md: 52, lg: 72 } as const;

export default function AngelsLogo({ size = "md", onDark = false }: LogoProps) {
  const height = HEIGHTS[size];
  const width = Math.round((height * 100) / 105);

  const image = (
    <Image
      src="/angels-instruments-logo.png"
      alt="Angels Instruments logo"
      width={100}
      height={105}
      priority
      style={{ height, width, objectFit: "contain" }}
    />
  );

  if (onDark) {
    return (
      <div className="flex items-center shrink-0">
        <div className="bg-white rounded-md p-1.5 shadow-sm">{image}</div>
      </div>
    );
  }

  return <div className="flex items-center shrink-0">{image}</div>;
}
