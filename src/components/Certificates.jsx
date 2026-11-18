
import React from "react";
import {
  Award,
  GraduationCap,
  ShieldCheck,
  Code2,
  Cloud,
  Sparkles,
  ExternalLink,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  BookOpen,
  Database,
} from "lucide-react";

import { portfolioData } from "../data/portfolio";
import "./Certificates.css";

const certificateIcons = [
  Code2,
  Cloud,
  ShieldCheck,
  Award,
  Database,
  GraduationCap,
  Sparkles,
];

const Certificates = () => {
  const certificates = portfolioData.certifications || [];

  const normalizeStatus = (status = "") =>
    status.trim().toLowerCase();

  const getStatusIcon = (status) => {
    const value = normalizeStatus(status);

    if (["certified", "completed"].includes(value)) {
      return <CheckCircle2 size={13} />;
    }

    if (["in progress", "training"].includes(value)) {
      return <Clock3 size={13} />;
    }

    return <Sparkles size={13} />;
  };

  const getStatusClass = (status) => {
    const value = normalizeStatus(status);

    if (["certified", "completed"].includes(value)) {
      return "cert-status-completed";
    }

    if (["in progress", "training"].includes(value)) {
      return "cert-status-progress";
    }

    return "cert-status-planned";
  };

  const getFooterLabel = (status) => {
    const value = normalizeStatus(status);

    if (value === "certified") return "PROFESSIONAL CERTIFICATION";
    if (value === "completed") return "SUCCESSFULLY COMPLETED";
    if (value === "coming soon") return "FUTURE LEARNING";
    if (value === "update status") return "STATUS TO BE UPDATED";

    return "LEARNING JOURNEY";
  };

  const completedCount = certificates.filter((item) =>
    ["certified", "completed"].includes(
      normalizeStatus(item.status)
    )
  ).length;

  const progressCount = certificates.filter((item) =>
    ["in progress", "training"].includes(
      normalizeStatus(item.status)
    )
  ).length;

  return (
    <section className="certificates-section" id="certificates">

      <div className="certificates-container">

        {/* HEADER */}
        <div className="certificates-heading">

          <span className="cert-eyebrow">
            <Award size={15} />
            PROFESSIONAL ACHIEVEMENTS
          </span>

          <h2>
            Certifications & <span>Credentials</span>
          </h2>

          <p>
            Professional certifications, technical training and
            continuous learning that strengthen my development journey.
          </p>

          <div className="cert-heading-line" />

        </div>

        {/* STATISTICS */}
        <div className="cert-stats">

          <div className="cert-stat">
            <Award />
            <strong>
              {String(certificates.length).padStart(2, "0")}
            </strong>
            <span>LEARNING MILESTONES</span>
          </div>

          <div className="cert-stat">
            <ShieldCheck />
            <strong>
              {String(completedCount).padStart(2, "0")}
            </strong>
            <span>COMPLETED</span>
          </div>

          <div className="cert-stat">
            <Clock3 />
            <strong>
              {String(progressCount).padStart(2, "0")}
            </strong>
            <span>IN PROGRESS</span>
          </div>

          <div className="cert-stat">
            <BookOpen />
            <strong>∞</strong>
            <span>LIFELONG LEARNING</span>
          </div>

        </div>

        {/* CERTIFICATE CARDS */}
        <div className="certificates-grid">

          {certificates.map((certificate, index) => {

            const Icon =
              certificateIcons[index % certificateIcons.length];

            const isComingSoon =
              normalizeStatus(certificate.status) === "coming soon";

            return (
              <article
                className={`certificate-card ${
                  isComingSoon ? "certificate-coming" : ""
                }`}
                key={certificate.id}
                style={{ "--card-index": index }}
              >

                <div className="certificate-top-line" />

                {/* ICON AND STATUS */}
                <div className="certificate-card-header">

                  <div className="certificate-icon">
                    <Icon size={25} />
                  </div>

                  <span
                    className={`cert-status ${getStatusClass(
                      certificate.status
                    )}`}
                  >
                    {getStatusIcon(certificate.status)}
                    {certificate.status}
                  </span>

                </div>

                <span className="certificate-category">
                  {certificate.category}
                </span>

                <h3>{certificate.name}</h3>

                <div className="certificate-issuer">
                  <GraduationCap size={15} />
                  <span>{certificate.issuer}</span>
                </div>

                <div className="certificate-date">
                  <CalendarDays size={14} />
                  <span>{certificate.duration}</span>
                </div>

                <p className="certificate-description">
                  {certificate.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="certificate-technologies">

                  <span className="certificate-tech-heading">
                    KNOWLEDGE AREAS
                  </span>

                  <div className="certificate-tech-list">

                    {certificate.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>

                {/* FOOTER */}
                <div className="certificate-footer">

                  <span>
                    {getFooterLabel(certificate.status)}
                  </span>

                  {certificate.credentialUrl ? (
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${certificate.name} credential`}
                    >
                      <ExternalLink size={17} />
                    </a>
                  ) : (
                    <span className="certificate-arrow">
                      <ArrowUpRight size={17} />
                    </span>
                  )}

                </div>

              </article>
            );
          })}

        </div>

        {/* BOTTOM MESSAGE */}
        <div className="certificates-bottom">

          <div className="cert-bottom-icon">
            <Sparkles size={23} />
          </div>

          <div>
            <h3>Learning Never Stops</h3>

            <p>
              Continuously upgrading my skills in ServiceNow,
              enterprise development and modern technologies.
            </p>
          </div>

          <span className="cert-bottom-tag">
            BUILD • LEARN • GROW
          </span>

        </div>

      </div>

    </section>
  );
};

export default Certificates;
