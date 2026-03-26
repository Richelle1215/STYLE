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


        {/* Recents Gallery Preview */}
        <div className="space-y-8 pt-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground">Recents</h2>
            <p className="text-lg text-muted-foreground">
              A glimpse into my recent moments and projects
            </p>
          </div>

          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="group relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 cursor-pointer transition-transform hover:scale-105"
              >
                <div className="flex h-full items-center justify-center text-4xl transition-transform group-hover:scale-110">
                  📸
                </div>
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <button
              onClick={() => setShowGalleryModal(true)}
              className="inline-flex items-center gap-2 rounded-lg text-primary font-semibold transition-all hover:gap-3 group"
            >
              View Albums <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <GalleryModal isOpen={showGalleryModal} onClose={() => setShowGalleryModal(false)} />
    </Layout>
  );
}
