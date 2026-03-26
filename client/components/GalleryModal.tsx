import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GalleryModal({ isOpen, onClose }: GalleryModalProps) {
  const images = Array.from({ length: 12 }, (_, i) => i + 1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl bg-white">
        {/* Header */}
        <div className="border-b border-border bg-background px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Gallery</h2>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X size={24} />
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {images.map((i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 cursor-pointer"
              >
                <div className="flex h-full items-center justify-center text-5xl transition-transform group-hover:scale-110">
                  🖼️
                </div>
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
