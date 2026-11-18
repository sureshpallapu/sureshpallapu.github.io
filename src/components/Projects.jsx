
import { motion } from "framer-motion";

import {
  GitBranch,
  ExternalLink,
  ArrowUpRight,
  FolderGit2,
  Sparkles,
  Code2,
  Rocket,
} from "lucide-react";

import { portfolioData } from "../data/portfolio";

import "./Projects.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

function ProjectCard({ project, index }) {
  const isComingSoon = project.comingSoon;

  return (
    <motion.article
      className={`project-card ${
        isComingSoon ? "coming-soon-card" : ""
      }`}
      variants={cardVariants}
      whileHover={
        isComingSoon
          ? {}
          : {
              y: -9,
              scale: 1.015,
            }
      }
      layout
    >

      {/* PROJECT IMAGE */}
      <div className="project-image-wrapper">

        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        ) : null}

        <div className="project-image-overlay" />

        <div className="project-image-content">
          {isComingSoon ? (
            <Rocket size={48} />
          ) : (
            <FolderGit2 size={48} />
          )}

          <span>
            {isComingSoon ? "UPCOMING PROJECT" : "PROJECT PREVIEW"}
          </span>
        </div>

        <span
          className={`project-status ${
            isComingSoon
              ? "status-upcoming"
              : project.status === "Completed"
              ? "status-completed"
              : "status-development"
          }`}
        >
          {project.status}
        </span>

        {project.featured && (
          <span className="project-featured">
            <Sparkles size={12} />
            FEATURED
          </span>
        )}

        {!isComingSoon && (
          <div className="project-image-hover">
            <span>EXPLORE PROJECT</span>
            <ArrowUpRight size={23} />
          </div>
        )}

      </div>

      {/* PROJECT DETAILS */}
      <div className="project-content">

        <span className="project-category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.description}
        </p>

        {/* TECHNOLOGIES */}
        <div className="project-tech-heading">
          <Code2 size={14} />
          <span>TECHNOLOGY STACK</span>
        </div>

        <div className="project-technologies">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* ACTION LINKS */}
        <div className="project-actions">

          {isComingSoon ? (
            <div className="coming-soon-message">
              <Sparkles size={15} />
              More exciting work is on the way
            </div>
          ) : (
            <>
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                  aria-label={`View ${project.title} GitHub repository`}
                >
                 <GitBranch size={17} />
                  GitHub
                  <ArrowUpRight size={14} />
                </a>
              ) : (
                <span className="project-link project-link-disabled">
                <GitBranch size={17} />
                  GitHub pending
                </span>
              )}

              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live-link"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              ) : (
                <span className="project-link project-link-disabled">
                  <ExternalLink size={16} />
                  Demo pending
                </span>
              )}
            </>
          )}

        </div>

      </div>

    </motion.article>
  );
}

export default function Projects() {
  const projects = portfolioData.projects || [];

  return (
    <section id="projects" className="projects-section">

      {/* BACKGROUND */}
      <div className="projects-background">
        <div className="projects-glow projects-glow-one" />
        <div className="projects-glow projects-glow-two" />
        <div className="projects-grid-pattern" />
      </div>

      <div className="projects-container">

        {/* HEADER */}
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span className="projects-eyebrow">
            <Code2 size={15} />
            MY DEVELOPMENT JOURNEY
          </span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            A collection of applications and digital solutions
            built through learning, creativity and practical development.
          </p>

          <div className="projects-heading-line" />

        </motion.div>

        {/* PROJECT STATISTICS */}
        <div className="projects-stats">

          <div className="projects-stat">
            <FolderGit2 size={21} />
            <strong>
              {projects.filter((p) => !p.comingSoon).length}
            </strong>
            <span>PROJECTS</span>
          </div>

          <div className="projects-stat">
            <Code2 size={21} />
            <strong>
              {new Set(
                projects
                  .filter((p) => !p.comingSoon)
                  .flatMap((p) => p.technologies)
              ).size}
            </strong>
            <span>TECHNOLOGIES</span>
          </div>

          <div className="projects-stat">
            <Sparkles size={21} />
            <strong>
              {projects.filter((p) => p.featured).length}
            </strong>
            <span>FEATURED WORKS</span>
          </div>
        </div>

        {/* PROJECT GRID */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        {/* BOTTOM */}
        <motion.div
          className="projects-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Sparkles size={18} />

          <p>
            DESIGNING • DEVELOPING • DELIVERING
          </p>

          <Sparkles size={18} />
        </motion.div>

      </div>
    </section>
  );
}
