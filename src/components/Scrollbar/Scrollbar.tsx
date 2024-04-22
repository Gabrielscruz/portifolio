"use client";

import { useRef } from "react";

interface ScrollbarProps {
  sectionId: string;
}
export function Scrollbar({ sectionId }: ScrollbarProps) {
  const minhaDivRef: any = useRef(null);

  const scrollToDiv = () => {
    const minhaDiv = document.getElementById(sectionId);
    if (minhaDiv) {
      minhaDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToDiv}
      className="rounded-full h-8 w-6 transition-all border-[1px] border-base-content hover:border-primary"
    >
      <div className="w-1 h-2 rounded-full m-auto animate-bounce bg-primary" ref={minhaDivRef}/>
    </button>
  );
}
