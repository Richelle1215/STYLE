import { X, ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const albums = [
  {
    id: 1,
    title: "Projects & Work",
    description: "Web development and design projects",
    count: 12,
    preview: "💼",
    color: "from-primary/20 to-secondary/20",
  },
  {
    id: 2,
    title: "Travel & Adventures",
    description: "Moments from around the world",
    count: 8,
    preview: "✈️",
    color: "from-amber-200/20 to-orange-200/20",
  },
  {
    id: 3,
    title: "Events & Conferences",
    description: "Speaking and networking highlights",
    count: 10,
    preview: "🎤",
    color: "from-purple-200/20 to-pink-200/20",
  },
];

export default function GalleryModal({ isOpen, onClose }: GalleryModalProps) {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);

  if (!isOpen) return null;

  const album = selectedAlbum ? albums.find((a) => a.id === selectedAlbum) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-white">
        {/* Header */}
        <div className="border-b border-border bg-background px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">
            {album ? album.title : "My Albums"}
          </h2>
          <button
            onClick={() => {
              if (selectedAlbum) {
                setSelectedAlbum(null);
              } else {
                onClose();
              }
            }}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6">
          {!selectedAlbum ? (
            // Album Selection View
            <div className="grid gap-6 md:grid-cols-3">
              {albums.map((alb) => (
                <button
                  key={alb.id}
                  onClick={() => setSelectedAlbum(alb.id)}
                  className="group text-left transition-transform hover:scale-105"
                >
                  <div
                    className={cn(
                      "relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br mb-4 cursor-pointer shadow-lg transition-shadow group-hover:shadow-xl",
                      alb.color
                    )}
                  >
                    <div className="flex h-full items-center justify-center text-6xl transition-transform group-hover:scale-110">
                      {alb.preview}
                    </div>
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {alb.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {alb.description}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-primary font-medium">
                    {alb.count} photos
                    <ArrowRight size={16} />
                  </div>
                </button>
              ))}
            </div>
          ) : (
            // Album Photos View
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
              {Array.from({ length: album.count }, (_, i) => i + 1).map((i) => (
                <div
                  key={i}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 cursor-pointer"
                >
                  <div className="flex h-full items-center justify-center text-4xl transition-transform group-hover:scale-110">
                    📸
                  </div>
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
