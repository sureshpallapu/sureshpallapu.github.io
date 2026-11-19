
import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Code2,
  ArrowUp,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
  FaGlobe,
} from "react-icons/fa6";

import { portfolioData } from "../data/portfolio";
import "./Footer.css";

const Footer = () => {
  const { personal, social, contact } = portfolioData;

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: social?.linkedin, icon: FaLinkedinIn },
    { name: "GitHub", url: social?.github, icon: FaGithub },
    { name: "Twitter / X", url: social?.twitter, icon: FaXTwitter },
    { name: "Instagram", url: social?.instagram, icon: FaInstagram },
    { name: "YouTube", url: social?.youtube, icon: FaYoutube },
    { name: "Website", url: social?.website, icon: FaGlobe },
  ].filter(
    (item) =>
      item.url &&
      item.url.trim() !== "" &&
      !item.url.includes("yourusername")
  );

  const email = contact?.email || personal?.email;
  const phone = personal?.phone;
  const location =
    contact?.location || personal?.location || "India";

  return (
    <footer className="portfolio-footer" id="footer">
      <div className="footer-container">

        {/* MAIN FOOTER CONTENT */}
        <div className="footer-main">

          {/* BRAND SECTION */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo" aria-label="Go to homepage">
              <Code2 size={30} strokeWidth={2.5} />
              <span>
                SURESH <strong>PALLAPU</strong>
              </span>
            </a>

            <p className="footer-description">
              Passionate software developer crafting efficient and
              scalable solutions using Java, ServiceNow, and modern
              web technologies.
            </p>

            <div className="footer-socials">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    aria-label={item.name}
                    title={item.name}
                  >
                    <Icon size={19} />
                  </a>
                );
              })}

              {email && (
                <a
                  href={`mailto:${email}`}
                  className="footer-social-link"
                  aria-label="Send email"
                  title="Email"
                >
                  <Mail size={19} />
                </a>
              )}
            </div>
          </div>

          {/* QUICK LINKS */}
          <nav className="footer-links" aria-label="Footer navigation">
            <h3>Quick Links</h3>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    <span className="footer-link-arrow">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTACT SECTION */}
          <div className="footer-contact">
            <h3>Contact</h3>

            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>{location}</span>
            </div>

            {email && (
              <a
                href={`mailto:${email}`}
                className="footer-contact-item"
              >
                <Mail size={18} />
                <span>{email}</span>
              </a>
            )}

            {phone && !phone.includes("XXXXXXXX") && (
              <a
                href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                className="footer-contact-item"
              >
                <Phone size={18} />
                <span>{phone}</span>
              </a>
            )}
          </div>
        </div>

        {/* FOOTER DIVIDER */}
        <div className="footer-divider" />

        {/* COPYRIGHT AND BACK TO TOP */}
        
{/* COPYRIGHT */}
<div className="footer-bottom">
  <p>
    © {new Date().getFullYear()}{" "}
    <strong>Suresh Pallapu.</strong>
    {" "}All Rights Reserved. | Built with{" "}
    <span className="footer-heart">♥</span>{" "}
    and code.
  </p>
</div>

{/* DEVELOPER CREDIT */}
<div className="footer-credit">
  <Code2 size={18} />
  <span>Designed & Developed by</span>
  <strong>SURESH PALLAPU</strong>
</div>
</div>
</footer>
);
};

export default Footer;




