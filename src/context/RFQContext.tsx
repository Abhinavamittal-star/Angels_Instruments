"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface RFQContextType {
  isOpen: boolean;
  prefilledInstrument: string;
  openRFQ: (instrumentName?: string) => void;
  closeRFQ: () => void;
}

const RFQContext = createContext<RFQContextType | undefined>(undefined);

export function RFQProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledInstrument, setPrefilledInstrument] = useState("");

  const openRFQ = (instrumentName?: string) => {
    setPrefilledInstrument(instrumentName || "");
    setIsOpen(true);
  };

  const closeRFQ = () => {
    setIsOpen(false);
    setPrefilledInstrument("");
  };

  return (
    <RFQContext.Provider
      value={{
        isOpen,
        prefilledInstrument,
        openRFQ,
        closeRFQ,
      }}
    >
      {children}
    </RFQContext.Provider>
  );
}

export function useRFQ() {
  const context = useContext(RFQContext);
  if (!context) {
    throw new Error("useRFQ must be used within an RFQProvider");
  }
  return context;
}
