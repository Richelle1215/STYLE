import Layout from "@/components/Layout";

export default function Gallery() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Gallery
          </h1>
          <p className="text-lg text-muted-foreground">
            A collection of my work and memorable moments
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20"
            >
              <div className="flex h-full items-center justify-center text-4xl transition-transform group-hover:scale-110">
                🖼️
              </div>
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
