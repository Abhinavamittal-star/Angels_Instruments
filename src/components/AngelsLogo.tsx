import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function AngelsLogo({ size = "md", showText = true }: LogoProps) {
  const dims = { sm: 32, md: 44, lg: 64 }[size];

  return (
    <div className="flex items-center gap-3 shrink-0">
      {/* SVG Recreation of the Angels Instruments geometric logo */}
      <svg
        width={dims}
        height={dims}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Angels Instruments logo"
      >
        {/* Outer circle background */}
        <circle cx="50" cy="50" r="48" fill="#1E3A8A" />
        
        {/* Inner geometric "A" shape with teal accents */}
        {/* Left diagonal bar */}
        <polygon points="20,82 38,18 50,45 32,82" fill="#38BDF8" opacity="0.9" />
        {/* Right diagonal bar */}
        <polygon points="80,82 62,18 50,45 68,82" fill="#0EA5E9" opacity="0.9" />
        {/* Crossbar highlight */}
        <rect x="30" y="52" width="40" height="7" rx="2" fill="white" opacity="0.9" />
        {/* Top peak accent */}
        <circle cx="50" cy="18" r="4" fill="#F59E0B" />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-black tracking-tight text-blue-900" style={{ fontSize: size === "lg" ? "1.5rem" : size === "md" ? "1.25rem" : "1rem", lineHeight: 1 }}>
            ANGELS
          </span>
          <span className="font-bold tracking-widest text-slate-500 mt-0.5" style={{ fontSize: size === "lg" ? "0.65rem" : size === "md" ? "0.55rem" : "0.45rem", lineHeight: 1 }}>
            INSTRUMENTS
          </span>
          {size !== "sm" && (
            <span className="font-semibold text-slate-400 mt-0.5" style={{ fontSize: "0.4rem", lineHeight: 1 }}>
              ISO 9001:2008 CERTIFIED
            </span>
          )}
        </div>
      )}
    </div>
  );
}
