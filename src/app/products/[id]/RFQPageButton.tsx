"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { useRFQ } from "@/context/RFQContext";

interface RFQPageButtonProps {
  productName: string;
}

export default function RFQPageButton({ productName }: RFQPageButtonProps) {
  const { openRFQ } = useRFQ();

  return (
    <button
      onClick={() => openRFQ(productName)}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-3.5 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-all glow-accent hover:bg-accent-bright"
    >
      <MessageSquare className="h-4 w-4" />
      <span>Request Pricing Quote</span>
    </button>
  );
}
