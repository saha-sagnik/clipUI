import React, { useEffect, useRef } from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SpotlightSearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-32 bg-black/70 backdrop-blur-lg">
      <div
        ref={modalRef}
        className="bg-card/90 border border-border rounded-2xl shadow-2xl w-full max-w-xl mx-auto flex flex-col items-center"
        style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.32)", minHeight: "120px" }}
      >
        <form className="w-full px-8 py-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MagnifyingGlassIcon className="w-6 h-6 text-primary" />
            </div>
            <input
              type="search"
              id="spotlight-search"
              placeholder="Type a command or search..."
              required
              className="w-full pl-12 pr-4 py-3 text-base rounded-lg border border-border text-foreground placeholder:text-muted-foreground bg-transparent backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
