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
      className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-slate-900 font-extrabold text-sm py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all uppercase tracking-wider"
    >
      <MessageSquare className="w-4 h-4 fill-slate-950/10" />
      <span>Request Pricing Quote</span>
    </button>
  );
}
