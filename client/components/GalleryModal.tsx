import { X, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  albumId?: number;
}

const albums = [
  {
    id: 1,
    title: "My Self",
    count: 12,
  },
  {
    id: 2,
    title: "Travel & Adventures",
    count: 8,
  },
  {
    id: 3,
    title: "Events & Highlights",
    count: 10,
  },
];

export default function GalleryModal({ isOpen, onClose, albumId = 1 }: GalleryModalProps) {
  const [currentAlbum, setCurrentAlbum] = useState(albumId);

  if (!isOpen) return null;

  const album = albums.find((a) => a.id === currentAlbum);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white">
        {/* Header */}
        <div className="border-b border-border bg-background px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {albums.length > 1 && (
              <button
                onClick={() => {
                  const currentIdx = albums.findIndex((a) => a.id === currentAlbum);
                  const prevAlbum = albums[(currentIdx - 1 + albums.length) % albums.length];
                  setCurrentAlbum(prevAlbum.id);
                }}
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <ChevronLeft size={24} />
              </button>
            )}
            <h2 className="text-2xl font-bold text-foreground">{album?.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X size={24} />
          </button>
        </div>

        {/* Photos Grid */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: album?.count || 12 }, (_, i) => i + 1).map((i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 cursor-pointer transition-transform hover:scale-105"
              >
                <div className="flex h-full items-center justify-center text-4xl transition-transform group-hover:scale-110">
                  📸
                </div>
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              </div>
            ))}
          </div>

          {/* Album Navigation */}
          {albums.length > 1 && (
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Other Albums</p>
              <div className="flex gap-3 overflow-x-auto pb-2">
                {albums.map((alb) => (
                  <button
                    key={alb.id}
                    onClick={() => setCurrentAlbum(alb.id)}
                    className={cn(
                      "flex-shrink-0 px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap",
                      currentAlbum === alb.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    )}
                  >
                    {alb.title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
