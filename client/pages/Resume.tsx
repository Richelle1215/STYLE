import Layout from "@/components/Layout";
import { Download } from "lucide-react";

export default function Resume() {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Resume / CV
          </h1>
          <p className="text-lg text-muted-foreground">
            My professional experience and qualifications
          </p>
        </div>

        <div className="flex gap-4">
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105">
            <Download size={20} />
            Download Resume
          </button>
        </div>

        <div className="space-y-8">
          {/* Experience Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Experience</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-l-2 border-primary pl-6 py-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    Senior Developer
                  </h3>
                  <p className="text-primary font-medium">Company Name</p>
                  <p className="text-sm text-muted-foreground">Jan 2022 - Present</p>
                  <p className="mt-2 text-muted-foreground">
                    Led development of key features and mentored junior developers
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Education</h2>
            <div className="space-y-6">
              {[1, 2].map((i) => (
                <div key={i} className="border-l-2 border-primary pl-6 py-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="text-primary font-medium">University Name</p>
                  <p className="text-sm text-muted-foreground">2018 - 2022</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Certifications</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="rounded-lg border border-border bg-card p-4">
                  <p className="font-semibold text-foreground">Certification {i}</p>
                  <p className="text-sm text-muted-foreground">Issuing Organization</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
