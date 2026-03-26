import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <div className="space-y-12">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            Contact form and social media links
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <div className="space-y-6 rounded-xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold text-foreground">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  className="mt-1 w-full rounded-lg border border-border bg-white px-4 py-2 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">
                Contact Information
              </h2>

              <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
                <Mail className="mt-1 flex-shrink-0 text-primary" size={24} />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <a
                    href="mailto:hello@example.com"
                    className="text-primary hover:underline"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
                <Phone className="mt-1 flex-shrink-0 text-primary" size={24} />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-primary hover:underline"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
                <MapPin
                  className="mt-1 flex-shrink-0 text-primary"
                  size={24}
                />
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">City, Country</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Follow Me</h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
