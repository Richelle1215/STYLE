import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, Briefcase, Zap, FileText, ImageIcon, Mail, MoreVertical } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const mainNavItems = [
    { label: "Home", path: "/", icon: Home },
    { label: "Portfolio", path: "/portfolio", icon: Briefcase },
    { label: "Skills", path: "/skills", icon: Zap },
    { label: "Resume", path: "/resume", icon: FileText },
    { label: "Gallery", path: "/gallery", icon: ImageIcon },
  ];

  const overflowItems = [
    { label: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-background pb-24 sm:pb-0">
      {/* Desktop Header */}
      <header className="hidden sm:block sticky top-0 z-40 border-b border-border bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">P</span>
              </div>
              <span className="text-xl font-bold text-foreground">Portfolio</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="flex gap-1">
              {mainNavItems.concat(overflowItems).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {children}
      </main>

      {/* Desktop Footer */}
      <footer className="hidden sm:block border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            © 2024 My Portfolio. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-border">
        <div className="flex items-center justify-around">
          {/* Main Navigation Items */}
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex-1 flex flex-col items-center justify-center py-3 px-2 transition-colors",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon size={24} />
                <span className="text-xs mt-1 font-medium text-center">{item.label}</span>
              </Link>
            );
          })}

          {/* More Menu Button */}
          <div className="flex-1 relative">
            <button
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              className={cn(
                "w-full flex flex-col items-center justify-center py-3 px-2 transition-colors",
                showMoreMenu
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <MoreVertical size={24} />
              <span className="text-xs mt-1 font-medium">More</span>
            </button>

            {/* Dropdown Menu */}
            {showMoreMenu && (
              <div className="absolute bottom-full right-0 mb-2 w-40 rounded-lg border border-border bg-white shadow-lg p-2 z-50">
                {overflowItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setShowMoreMenu(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors w-full text-left text-sm font-medium",
                        location.pathname === item.path
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      <Icon size={18} />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
