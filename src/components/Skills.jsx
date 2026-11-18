
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers3,
  Workflow,
  Monitor,
  Server,
  Database,
  Code2,
  Sparkles,
  ArrowUpRight,
  Filter,
  Network,
  Braces,
  Cpu,
} from "lucide-react";

import { portfolioData } from "../data/portfolio";

import "./Skills.css";

const categoryConfig = {
  "Frontend Development": {
    icon: Monitor,
    subtitle: "Modern user interfaces",
    description:
      "Creating responsive, interactive and maintainable web interfaces using modern frontend technologies.",
    color: "blue",
  },

  "Backend Development": {
    icon: Server,
    subtitle: "Server-side development & APIs",
    description:
      "Developing backend applications, REST APIs and business logic for scalable web applications.",
    color: "purple",
  },

  "Database & Tools": {
    icon: Database,
    subtitle: "Data management & development tools",
    description:
      "Working with relational databases, version control and essential software development tools.",
    color: "green",
  },

  "Programming Languages": {
    icon: Code2,
    subtitle: "Programming & core web technologies",
    description:
      "Building programming fundamentals and developing applications using modern languages and web technologies.",
    color: "cyan",
  },
};

const filters = [
  "All",
  "Frontend Development",
  "Backend Development",
  "Database & Tools",
  "Programming Languages",
];

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

function SkillCard({ skill, index }) {
  const config = categoryConfig[skill.category];

  if (!config) return null;

  const Icon = config.icon;

  return (
    <motion.article
      layout
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{
        y: -9,
        scale: 1.015,
      }}
      className={`skill-card ${config.color}`}
      key={skill.id}
    >
      <div className="skill-card-top">
        <div className="skill-icon">
          <Icon size={25} strokeWidth={1.8} />
        </div>

        <span className="skill-count">
          {String(skill.technologies.length).padStart(2, "0")} SKILLS
        </span>
      </div>

      <div className="skill-card-content">
        <h3>{skill.category}</h3>

        <h4>{config.subtitle}</h4>

        <p>{config.description}</p>
      </div>

      <div className="skill-divider" />

      <div className="technology-heading">
        <span>TECHNOLOGIES</span>
      </div>

      <div className="technology-list">
        {skill.technologies.map((technology, i) => (
          <motion.span
            key={`${skill.category}-${technology}`}
            className="technology-tag"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.04,
              duration: 0.3,
            }}
            whileHover={{
              y: -4,
              scale: 1.07,
            }}
          >
            {technology}
          </motion.span>
        ))}
      </div>

      <div className="skill-card-footer">
        <span>
          <i />
          TECHNICAL SKILLS
        </span>

        <ArrowUpRight size={19} />
      </div>
    </motion.article>
  );
}

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");

  const allSkills = portfolioData.skills || [];

  // Keep ServiceNow separate as the primary expertise card.
  const serviceNowSkill = allSkills.find(
    (skill) => skill.category === "ServiceNow"
  );

  // Remaining four categories appear in the card grid.
  const developmentSkills = allSkills.filter(
    (skill) => skill.category !== "ServiceNow"
  );

  const filteredSkills = useMemo(() => {
    if (activeFilter === "All") {
      return developmentSkills;
    }

    return developmentSkills.filter(
      (skill) => skill.category === activeFilter
    );
  }, [activeFilter, developmentSkills]);

  const totalTechnologies = allSkills.reduce(
    (total, skill) => total + skill.technologies.length,
    0
  );

  const serviceNowCount =
    serviceNowSkill?.technologies.length || 0;

  return (
    <section id="skills" className="skills-section">

      {/* BACKGROUND EFFECTS */}
      <div className="skills-background">
        <div className="skills-glow glow-one" />
        <div className="skills-glow glow-two" />
        <div className="skills-grid-pattern" />
      </div>

      <div className="skills-container">

        {/* SECTION HEADING */}
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">
            <Code2 size={15} />
            TECHNICAL EXPERTISE
          </span>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p>
            Technologies, tools and platforms I work with
            to build enterprise solutions and modern web applications.
          </p>

          <div className="heading-underline" />
        </motion.div>

        {/* STATISTICS */}
        <motion.div
          className="skills-stats"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: Layers3,
              value: "04",
              label: "SKILL CATEGORIES",
            },
            {
              icon: Braces,
              value: String(totalTechnologies).padStart(2, "0"),
              label: "TECHNOLOGIES",
            },
            {
              icon: Workflow,
              value: String(serviceNowCount).padStart(2, "0"),
              label: "SERVICENOW SKILLS",
            },
            {
              icon: Sparkles,
              value: "360°",
              label: "DEVELOPMENT FOCUS",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                className="skills-stat-card"
                key={stat.label}
                variants={cardVariants}
                whileHover={{ y: -5 }}
              >
                <Icon size={21} />

                <strong>{stat.value}</strong>

                <span>{stat.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* FEATURED SERVICENOW EXPERTISE */}
        {serviceNowSkill && (
          <motion.div
            className="servicenow-feature"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
          >
            <div className="featured-left">

              <div className="featured-title">
                <div className="featured-icon">
                  <Network size={27} />
                </div>

                <div>
                  <span>PRIMARY EXPERTISE</span>
                  <h3>ServiceNow</h3>
                </div>
              </div>

              <p>
                Enterprise platform development, IT service
                management, CMDB, ITOM and workflow automation.
                Building and customizing solutions for real-world
                business requirements.
              </p>

              <div className="featured-focus">
                <span>ITSM</span>
                <span>CMDB</span>
                <span>ITOM</span>
              </div>

            </div>

            <div className="featured-right">

              <div className="featured-tech-heading">
                <span>PLATFORM TECHNOLOGIES</span>
                <Workflow size={18} />
              </div>

              <div className="featured-tech-list">
                {serviceNowSkill.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="featured-tech-tag"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

            </div>
          </motion.div>
        )}

        {/* CATEGORY FILTERS */}
        <div className="skills-filter-section">

          <div className="filter-heading">
            <Filter size={16} />
            <span>EXPLORE TECHNOLOGY CATEGORIES</span>
          </div>

          <div className="skills-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-button ${
                  activeFilter === filter ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter === "All" ? "All" : filter}
              </button>
            ))}
          </div>

        </div>

        {/* FOUR BALANCED SKILL CARDS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredSkills.map((skill, index) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* BOTTOM MESSAGE */}
        <motion.div
          className="skills-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Cpu size={18} />

          <p>
            BUILDING • LEARNING • INNOVATING
          </p>

          <Sparkles size={17} />
        </motion.div>

      </div>
    </section>
  );
}
