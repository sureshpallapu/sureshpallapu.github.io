
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation configuration
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Resume", id: "resume", external: true },
    { name: "Contact", id: "contact" },
  ];

  const serviceNowUrl = portfolioData.social?.servicenow || "";
  const resumeUrl = portfolioData.personal?.resume || "";

  // Detect currently visible section
  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 160;

      const sections = navLinks
        .filter((link) => !link.external)
        .map((link) => ({
          id: link.id,
          element: document.getElementById(link.id),
        }))
        .filter((item) => item.element);

      let currentSection = "home";

      sections.forEach(({ id, element }) => {
        if (element.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      });

      // Ensure Contact becomes active at the bottom
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 30
      ) {
        if (document.getElementById("contact")) {
          currentSection = "contact";
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  // Handle internal navigation
  const handleNavigation = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  // Reusable navigation link
  const renderNavLink = (link) => {
    const isActive = activeSection === link.id;

    return (
      <a
        key={link.id}
        href={`#${link.id}`}
        onClick={() => handleNavigation(link.id)}
        className={`relative whitespace-nowrap rounded-lg px-3 py-2 text-[13px] font-medium transition-all duration-300 ${
          isActive
            ? "bg-cyan-400/10 text-cyan-300"
            : "text-slate-300 hover:bg-white/5 hover:text-cyan-300"
        }`}
      >
        {link.name}

        {isActive && (
          <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
        )}
      </a>
    );
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.08] bg-[#030303]/95 shadow-lg shadow-black/20 backdrop-blur-xl">

      <nav className="mx-auto flex min-h-[72px] max-w-[1450px] items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* BRAND LOGO */}
        <a
          href="#home"
          onClick={() => handleNavigation("home")}
          className="group flex shrink-0 items-center gap-2"
        >
          <span className="font-mono text-3xl font-black text-cyan-400 transition group-hover:text-violet-400">
            {"</>"}
          </span>

          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-xl font-extrabold tracking-tight text-transparent sm:text-2xl">
            SURESH PALLAPU
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => {
            if (link.id === "resume") {
              return resumeUrl ? (
                <a
                  key="resume"
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg px-3 py-2 text-[13px] font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
                >
                  Resume
                </a>
              ) : null;
            }

            return renderNavLink(link);
          })}

          {/* SERVICENOW EXTERNAL WEBSITE */}
          {serviceNowUrl ? (
            <a
              href={serviceNowUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-1 inline-flex items-center gap-1 rounded-lg border border-violet-400/30 bg-violet-500/10 px-3 py-2 text-[13px] font-semibold text-violet-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              ServiceNow
              <ArrowUpRight size={13} />
            </a>
          ) : (
            <span
              title="Add your ServiceNow website URL in portfolio.js"
              className="ml-1 cursor-not-allowed rounded-lg px-3 py-2 text-[13px] text-slate-500"
            >
              ServiceNow
              <span className="ml-1 text-[10px]">↗</span>
            </span>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="rounded-lg border border-white/10 p-2 text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-300 xl:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#030303] px-5 py-5 shadow-2xl xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">

            {navLinks.map((link) => {
              if (link.id === "resume") {
                return resumeUrl ? (
                  <a
                    key="resume"
                    href={resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                  >
                    Resume
                  </a>
                ) : null;
              }

              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => handleNavigation(link.id)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                    activeSection === link.id
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            {serviceNowUrl && (
              <a
                href={serviceNowUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-violet-300 hover:bg-violet-500/10"
              >
                ServiceNow ↗
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
