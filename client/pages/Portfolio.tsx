import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Portfolio
          </h1>
          <p className="text-lg text-muted-foreground">
            Grid or list of projects with images, descriptions, and links
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="flex h-full items-center justify-center text-6xl">
                  🖼️
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground">
                  Project {i}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Project description and details go here
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    React
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    TypeScript
                  </span>
                </div>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-primary font-medium transition-colors hover:text-primary/80"
                >
                  View Project <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
