
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Code2,
  Sparkles,
    GraduationCap,
} from "lucide-react";

import { portfolioData } from "../data/portfolio";

const Hero = () => {
  // =====================================================
  // 1. PORTFOLIO DATA
  // =====================================================

  const { personal, social, about } = portfolioData;

  const roles = personal.roles || [
    "ServiceNow Developer",
    "Full Stack Developer",
    "Web Developer",
  ];

  const technologies = personal.heroTechnologies || [];
  const dashboardTechnologies =
    personal.dashboardTechnologies || [];

  const coreExpertise = about.coreExpertise || [];

  const shouldReduceMotion = useReducedMotion();

  // =====================================================
  // 2. TYPEWRITER ANIMATION
  // =====================================================

  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!roles.length) return;

    const currentRole = roles[roleIndex];

    let delay = isDeleting ? 40 : 85;

    if (!isDeleting && typedRole === currentRole) {
      delay = 1700;
    }

    if (isDeleting && typedRole === "") {
      delay = 350;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && typedRole === currentRole) {
        setIsDeleting(true);
      } else if (isDeleting && typedRole === "") {
        setIsDeleting(false);
        setRoleIndex((previous) => (previous + 1) % roles.length);
      } else {
        setTypedRole(
          currentRole.substring(
            0,
            typedRole.length + (isDeleting ? -1 : 1)
          )
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [roles, roleIndex, typedRole, isDeleting]);

  // =====================================================
  // 3. PROFILE STATISTICS
  // =====================================================

  const stats = [
    {
      value: about.projects,
      label: "PROJECTS",
    },
    {
      value: about.experience,
      label: "YEARS EXPERIENCE",
      suffix: " YRS",
    },
    {
      value: about.technologies,
      label: "TECH STACK",
    },
    {
      value: about.coreFocus,
      detail: about.coreFocusDetail,
      label: "CORE FOCUS",
    },
  ];

  // =====================================================
  // 4. ANIMATION SETTINGS
  // =====================================================

  const entrance = (direction = 0, delay = 0) => ({
    initial: shouldReduceMotion
      ? false
      : { opacity: 0, x: direction, y: direction === 0 ? 20 : 0 },

    whileInView: { opacity: 1, x: 0, y: 0 },

    viewport: { once: true, amount: 0.2 },

    transition: {
      duration: shouldReduceMotion ? 0 : 0.8,
      delay: shouldReduceMotion ? 0 : delay,
      ease: "easeOut",
    },
  });

  // =====================================================
  // 5. HERO SECTION
  // =====================================================

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#03040B] px-5 pb-20 pt-28 text-white sm:px-8 lg:px-12"
    >
      {/* ================================================
          BACKGROUND EFFECTS
      ================================================ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Blue Glow */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[150px]" />

        {/* Cyan Glow */}
        <div className="absolute left-1/3 top-1/3 h-72 w-72 rounded-full bg-cyan-500/[0.07] blur-[140px]" />

        {/* Violet Glow */}
        <div className="absolute -right-20 top-40 h-96 w-96 rounded-full bg-violet-600/15 blur-[150px]" />

        {/* Particle Grid */}
        <div
          className="absolute inset-0 opacity-[0.13]"
          style={{
            backgroundImage:
              "radial-gradient(#94a3b8 0.7px, transparent 0.7px)",
            backgroundSize: "35px 35px",
          }}
        />

        {/* Bottom Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#03040B]/90" />
      </div>

      {/* ================================================
          MAIN CONTENT
      ================================================ */}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

        {/* ================================================
            LEFT SIDE - PERSONAL INTRODUCTION
        ================================================ */}

        <motion.div {...entrance(-40)}>

          {/* Developer Badge */}
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-2.5 shadow-[0_0_25px_rgba(34,211,238,0.05)] transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10">

            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
            </span>

            <span className="text-[11px] font-bold tracking-[3px] text-cyan-300">
              SOFTWARE DEVELOPER
            </span>

            <Sparkles size={15} className="text-violet-400" />
          </div>

          {/* Greeting */}
          <p className="mb-3 text-lg text-slate-400">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-6xl font-black leading-[1.05] tracking-tight sm:text-7xl lg:text-[88px]">

            <span className="block text-white">
              {personal.firstName}
            </span>

            <span className="mt-2 block bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
              {personal.lastName}
            </span>

          </h1>

          {/* Animated Designation */}
          <div className="mt-10 min-h-[112px]">

            <p className="mb-3 text-xs font-bold tracking-[4px] text-slate-500">
              I AM A
            </p>

            <h2
              className="min-h-[44px] text-2xl font-extrabold sm:text-3xl"
              aria-label={roles[roleIndex]}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                {shouldReduceMotion
                  ? roles[roleIndex]
                  : typedRole}
              </span>

              {!shouldReduceMotion && (
                <span className="ml-1 inline-block animate-pulse text-cyan-400">
                  |
                </span>
              )}
            </h2>

            <p className="mt-3 text-sm text-slate-400">
              Specializing in ServiceNow & Full Stack Development
            </p>
          </div>

{/* PHD RESEARCH SCHOLAR BADGE */}

<motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.4 }}
  className="mt-5 inline-flex max-w-full items-center gap-3 rounded-xl border border-violet-400/20 bg-gradient-to-r from-violet-500/[0.10] to-cyan-500/[0.05] px-4 py-3 shadow-[0_0_25px_rgba(139,92,246,0.06)] transition-all duration-300 hover:border-violet-400/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]"
>
  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/15">
    <GraduationCap
      size={22}
      className="text-violet-400"
    />
  </div>

  <div className="min-w-0">
    <p className="text-sm font-bold text-violet-300">
      {personal.research.status}
    </p>

    <p className="mt-1 text-xs leading-5 text-slate-400">
      {personal.research.specialization}
      {" • "}
      {personal.research.university}
    </p>
  </div>

  <Sparkles
    size={16}
    className="ml-auto shrink-0 text-cyan-400"
  />
</motion.div>

          {/* Introduction */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            {personal.introduction}
          </p>

          {/* Technology Stack */}
          <div className="mt-8">

            <p className="mb-4 font-mono text-xs font-bold tracking-[3px] text-cyan-400">
              PROGRAMMING & SERVICENOW STACK
            </p>

            <div className="flex max-w-2xl flex-wrap items-center gap-2.5">

              {technologies.map((technology, index) => (
                <motion.span
                  key={technology}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.035 }}
                  whileHover={shouldReduceMotion ? {} : {
                    y: -4,
                    scale: 1.05,
                  }}
                  className="cursor-default rounded-lg border border-cyan-400/10 bg-cyan-400/[0.035] px-3 py-1.5 font-mono text-xs text-cyan-300 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.12)]"
                >
                  {technology}
                </motion.span>
              ))}

            </div>
          </div>

          {/* Location */}
          <div className="mt-7 flex items-center gap-2 text-sm text-slate-500">
            <MapPin size={17} className="text-cyan-400" />
            {personal.location}
          </div>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">

            <motion.a
              href="#projects"
              whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-8 py-4 font-bold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:shadow-[0_0_35px_rgba(124,58,237,0.35)]"
            >
              View Projects

              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>

            <motion.a
              href={personal.resume}
              download
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-8 py-4 font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
            >
              Download Resume
              <ArrowUpRight size={19} />
            </motion.a>

          </div>

          {/* Social Links */}
          <div className="mt-9 flex flex-wrap gap-3">

            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                GH &nbsp; GitHub ↗
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:text-blue-300"
              >
                in &nbsp; LinkedIn ↗
              </a>
            )}

            {personal.email && (
              <a
                href={`mailto:${personal.email}`}
                className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:text-violet-300"
              >
                <Mail size={15} className="mr-2 inline" />
                Email
              </a>
            )}

          </div>
        </motion.div>

        {/* ================================================
            RIGHT SIDE - PREMIUM PROFILE DASHBOARD
        ================================================ */}

        <motion.div
          {...entrance(40, 0.2)}
          className="relative mx-auto w-full max-w-md"
        >

          {/* Animated Background Glow */}
          <motion.div
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.12, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-violet-600/30 blur-[45px]"
          />

          {/* Dashboard Card */}
          <motion.div
            animate={shouldReduceMotion ? {} : {
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative rounded-[30px] border border-white/10 bg-gradient-to-br from-white/[0.09] via-[#11121B] to-[#171125] p-[1px] shadow-[0_20px_80px_rgba(0,0,0,0.55)]"
          >

            <div className="rounded-[29px] bg-[#101116]/95 p-6 backdrop-blur-2xl sm:p-8">

              {/* Profile */}
              <div className="relative mb-8 flex flex-col items-center text-center">

                {/* Animated Avatar */}
                <div className="relative mb-5 flex h-32 w-32 items-center justify-center">

                  <motion.div
                    animate={shouldReduceMotion ? {} : { rotate: 360 }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40"
                  />

                  <div className="absolute inset-2 rounded-full border border-violet-500/50 shadow-[0_0_30px_rgba(139,92,246,0.2)]" />

                  {/* Avatar Image */}
                  <div className="relative flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-2 border-violet-500 bg-gradient-to-br from-[#222033] to-[#101116]">

                    

               <img
  src={personal.profileImage}
  alt={personal.name}
  className="profile-image"
  loading="eager"
/>
                  </div>

                  {/* Online Indicator */}
                  <motion.span
                    animate={shouldReduceMotion ? {} : {
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.6, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute right-1 top-3 h-4 w-4 rounded-full border-[3px] border-[#101116] bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                  />

                </div>

                <h3 className="text-2xl font-extrabold tracking-tight text-white">
                  {personal.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-slate-400">
                  {personal.designation}
                </p>

                {/* Availability */}
                <div className="mt-4 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-4 py-2">

                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                  <span className="text-xs font-medium text-emerald-300">
                    {personal.availability}
                  </span>

                </div>

              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-3">

                {stats.map((stat, index) => (

                  <motion.div
                    key={stat.label}
                    initial={shouldReduceMotion ? false : {
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                    }}
                    whileHover={shouldReduceMotion ? {} : {
                      y: -6,
                      scale: 1.035,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.07] to-white/[0.02] px-3 py-5 text-center transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.1)]"
                  >

                    {/* Hover Light */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-violet-500/0 transition-all duration-500 group-hover:from-cyan-400/10 group-hover:to-violet-500/10" />

                    <p className="relative bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
                      {stat.value}
                    </p>

                    {stat.detail && (
                      <p className="relative mt-1 text-[10px] font-semibold text-violet-300">
                        {stat.detail}
                      </p>
                    )}

                    <p className="relative mt-2 text-[9px] font-bold tracking-[2px] text-slate-500">
                      {stat.label}
                    </p>

                  </motion.div>

                ))}

              </div>

              {/* Core Expertise */}
              <div className="mt-8">

                <div className="mb-5 flex items-center justify-center gap-2">

                  <Code2 size={16} className="text-cyan-400" />

                  <p className="text-xs font-bold tracking-[2px] text-slate-400">
                    CORE EXPERTISE
                  </p>

                </div>

                <div className="flex flex-wrap justify-center gap-2">

                  {coreExpertise.map((technology, index) => (

                    <motion.span
                      key={technology}
                      initial={shouldReduceMotion ? false : {
                        opacity: 0,
                        scale: 0.8,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={shouldReduceMotion ? {} : {
                        scale: 1.08,
                        y: -3,
                      }}
                      className="cursor-default rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-semibold text-cyan-300 transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-violet-300"
                    >
                      {technology}
                    </motion.span>

                  ))}

                </div>
              </div>

              {/* Technology Stack */}
              <div className="mt-8">

                <div className="mb-4 flex items-center justify-center gap-2">

                  <Sparkles size={15} className="text-violet-400" />

                  <p className="text-xs font-bold tracking-[2px] text-slate-400">
                    TECHNOLOGY STACK
                  </p>

                </div>

                <div className="flex flex-wrap justify-center gap-2">

                  {dashboardTechnologies.map((technology, index) => (

                    <motion.span
                      key={technology}
                      initial={shouldReduceMotion ? false : {
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.07 }}
                      whileHover={shouldReduceMotion ? {} : {
                        scale: 1.07,
                        y: -2,
                      }}
                      className="cursor-default rounded-lg border border-violet-400/15 bg-violet-500/[0.05] px-3 py-2 text-[10px] font-medium text-violet-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      {technology}
                    </motion.span>

                  ))}

                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 border-t border-white/[0.08] pt-5 text-center">

                <p className="text-[10px] font-semibold tracking-[3px] text-slate-500 transition-colors duration-300 hover:text-cyan-300">
                  {about.tagline}
                </p>

              </div>

            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
