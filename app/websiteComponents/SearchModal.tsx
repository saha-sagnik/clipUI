import React, { useEffect, useRef } from "react";
import SearchBar from "./SearchBar";

export default function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        onClose();
      }
    }
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => {
        (modalRef.current?.querySelector('input[type="search"]') as HTMLInputElement | null)?.focus();
      }, 100);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg">
      <div
        ref={modalRef}
        className="bg-card/90 border border-border rounded-2xl shadow-2xl w-full max-w-lg mx-auto flex flex-col items-center"
        style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.32)", minHeight: "120px" }}
      >
        <div className="w-full px-8 py-6">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
