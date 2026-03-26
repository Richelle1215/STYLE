import { Link } from "react-router-dom";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import GalleryModal from "@/components/GalleryModal";
import { useState } from "react";

export default function Index() {
  const [showGalleryModal, setShowGalleryModal] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="space-y-12">
        {/* Profile Section */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative h-56 w-56 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center bg-primary/20">
                <span className="text-6xl">👤</span>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-foreground md:text-5xl">
                Hi, I'm Your Name
              </h1>
              <p className="text-2xl font-semibold text-primary">
                Full Stack Developer & Designer
              </p>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I craft beautiful, modern web experiences with attention to detail.
              Specializing in React, TypeScript, and modern web technologies to
              build scalable applications that users love.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                <Mail size={18} />
                Get in touch
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 pt-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground">Featured Work</h2>
            <p className="text-lg text-muted-foreground">
              A selection of recent projects I've worked on
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
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
                    An innovative project showcasing modern web technologies
                  </p>
                  <Link
                    to="/portfolio"
                    className="mt-4 inline-flex items-center gap-2 text-primary font-medium transition-colors hover:text-primary/80"
                  >
                    View Project <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="space-y-8 pt-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground">Skills</h2>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {["Frontend", "Backend", "Design"].map((category) => (
              <div
                key={category}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {category}
                </h3>
                <div className="mt-4 space-y-2">
                  {["Skill 1", "Skill 2", "Skill 3"].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/skills"
                  className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Preview */}
        <div className="space-y-8 pt-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground">Gallery</h2>
            <p className="text-lg text-muted-foreground">
              A collection of my work and memorable moments
            </p>
          </div>

          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 cursor-pointer transition-transform hover:scale-105"
              >
                <div className="flex h-full items-center justify-center text-4xl transition-transform group-hover:scale-110">
                  🖼️
                </div>
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShowGalleryModal(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              View All <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary px-8 py-12 text-center text-white md:px-12">
          <h2 className="text-3xl font-bold">Ready to work together?</h2>
          <p className="mt-2 text-white/90">
            Let's create something amazing. Get in touch today.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-transform hover:scale-105"
          >
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      {/* Gallery Modal */}
      <GalleryModal isOpen={showGalleryModal} onClose={() => setShowGalleryModal(false)} />
    </Layout>
  );
}
