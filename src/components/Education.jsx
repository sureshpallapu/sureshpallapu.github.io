
import { motion, useReducedMotion } from "framer-motion";

import {
  GraduationCap,
  BookOpen,
  Microscope,
  Award,
  MapPin,
  CalendarDays,
  Sparkles,
  BrainCircuit,
  ArrowUpRight,
  FlaskConical,
  Target,
  School,
} from "lucide-react";

import { portfolioData } from "../data/portfolio";

const iconMap = {
  phd: Microscope,
  masters: GraduationCap,
  bachelors: BookOpen,
  intermediate: BrainCircuit,
  school: School,
};

const Education = () => {
  const education = portfolioData.education || [];
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      className="relative isolate overflow-hidden bg-[#050711] px-5 py-24 text-white sm:px-8 lg:px-12"
    >

      {/* =========================================
          BACKGROUND EFFECTS
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 -z-10">

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[150px]" />

        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-violet-600/[0.09] blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "radial-gradient(#94a3b8 0.7px, transparent 0.7px)",
            backgroundSize: "35px 35px",
          }}
        />

      </div>


      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="relative z-10 mx-auto max-w-7xl">


        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <motion.div
          initial={reduceMotion ? false : {
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-2">

            <GraduationCap
              size={17}
              className="text-cyan-400"
            />

            <span className="text-xs font-bold tracking-[3px] text-cyan-300">
              ACADEMIC JOURNEY
            </span>

          </div>


          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Education & Research
            </span>

          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            A journey of continuous learning, academic excellence
            and research-driven innovation.
          </p>


          <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />

        </motion.div>


        {/* =========================================
            EDUCATION STATISTICS
        ========================================= */}

        <motion.div
          initial={reduceMotion ? false : {
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4"
        >

          {[
            {
             value: String(education.length).padStart(2, "0"),
              label: "QUALIFICATIONS",
              icon: GraduationCap,
            },
            {
              value: "01",
              label: "DOCTORAL RESEARCH",
              icon: Microscope,
            },
            {
              value: "2026",
              label: "RESEARCH JOURNEY",
              icon: FlaskConical,
            },
            {
              value: "∞",
              label: "LIFELONG LEARNING",
              icon: Sparkles,
            },
          ].map((stat, index) => {

            const Icon = stat.icon;

            return (

              <motion.div
                key={stat.label}
                whileHover={reduceMotion ? {} : {
                  y: -5,
                  borderColor: "rgba(34,211,238,0.4)",
                }}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition-all duration-300 hover:bg-cyan-400/[0.04] sm:p-5"
              >

                <div className="flex items-center justify-between">

                  <Icon
                    size={20}
                    className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
                  />

                  <span className="text-2xl font-black text-white sm:text-3xl">
                    {stat.value}
                  </span>

                </div>

                <p className="mt-3 text-[9px] font-bold tracking-[1.5px] text-slate-500 sm:text-[10px]">
                  {stat.label}
                </p>

              </motion.div>

            );

          })}

        </motion.div>


        {/* =========================================
            HORIZONTAL EDUCATION CARDS
        ========================================= */}

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">

          {education.map((item, index) => {

            const Icon = iconMap[item.type] || GraduationCap;

            const isPhD = item.type === "phd";

            return (

              <motion.article
                key={item.id}
                initial={reduceMotion ? false : {
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                whileHover={reduceMotion ? {} : {
                  y: -9,
                  scale: 1.01,
                }}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[24px] border p-6 shadow-[0_15px_50px_rgba(0,0,0,0.2)] transition-all duration-500 sm:p-7 ${
                  isPhD
                    ? "border-violet-400/30 bg-gradient-to-br from-[#19152D] via-[#121A29] to-[#101522] hover:border-violet-400/60 hover:shadow-[0_20px_60px_rgba(139,92,246,0.13)]"
                    : "border-white/[0.09] bg-gradient-to-br from-[#121A29] via-[#101522] to-[#141426] hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(34,211,238,0.09)]"
                }`}
              >

                {/* CARD GLOW */}

                <div className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-[90px] transition-all duration-700 ${
                  isPhD
                    ? "bg-violet-500/[0.09] group-hover:bg-violet-500/[0.2]"
                    : "bg-cyan-500/[0.04] group-hover:bg-cyan-500/[0.14]"
                }`} />


                {/* TOP ACCENT */}

                <div className={`absolute left-0 top-0 h-[3px] w-full origin-left scale-x-50 transition-transform duration-500 group-hover:scale-x-100 ${
                  isPhD
                    ? "bg-gradient-to-r from-violet-500 via-purple-400 to-cyan-400"
                    : "bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
                }`} />


                {/* CARD HEADER */}

                <div className="relative flex items-start justify-between gap-3">

                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 ${
                    isPhD
                      ? "border-violet-400/30 bg-violet-400/10"
                      : "border-cyan-400/20 bg-cyan-400/10"
                  }`}>

                    <Icon
                      size={27}
                      className={isPhD ? "text-violet-400" : "text-cyan-400"}
                    />

                  </div>


                  {item.current ? (

                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-2 text-[9px] font-bold tracking-wider text-emerald-300">

                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                      PURSUING

                    </span>

                  ) : (

                    <span className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-[9px] font-bold tracking-wider text-slate-500">
                      COMPLETED
                    </span>

                  )}

                </div>


                {/* DEGREE DETAILS */}

                <div className="relative mt-7">

                  <p className="mb-2 text-[10px] font-bold tracking-[2px] text-slate-500">
                    {String(index + 1).padStart(2, "0")} / ACADEMIC QUALIFICATION
                  </p>


                  <h3 className={`text-xl font-extrabold leading-snug transition-colors duration-300 sm:text-2xl ${
                    isPhD
                      ? "text-violet-200 group-hover:text-white"
                      : "text-white group-hover:text-cyan-300"
                  }`}>
                    {item.degree}
                  </h3>


                  {item.specialization && (

                    <p className="mt-2 text-xs font-semibold leading-6 text-cyan-300">
                      {item.specialization}
                    </p>

                  )}


                  <p className="mt-4 text-sm font-bold leading-6 text-slate-200">
                    {item.institution}
                  </p>


                  {item.affiliation && (

                    <p className="mt-1 text-xs text-violet-300">
                      Through {item.affiliation}
                    </p>

                  )}

                </div>


                {/* LOCATION AND DURATION */}

                <div className="relative mt-5 space-y-3 border-y border-white/[0.07] py-5">

                  <div className="flex items-start gap-3">

                    <MapPin
                      size={16}
                      className="mt-0.5 shrink-0 text-violet-400"
                    />

                    <span className="text-xs leading-5 text-slate-400">
                      {item.location}
                    </span>

                  </div>


                  <div className="flex items-start gap-3">

                    <CalendarDays
                      size={16}
                      className="mt-0.5 shrink-0 text-cyan-400"
                    />

                    <span className="text-xs leading-5 text-slate-400">
                      {item.duration}
                    </span>

                  </div>


                  {item.grade && (

                    <div className="flex items-center gap-3">

                      <Award
                        size={16}
                        className="shrink-0 text-emerald-400"
                      />

                      <span className="text-xs font-bold text-emerald-300">
                        {item.grade}
                      </span>

                    </div>

                  )}

                </div>


                {/* DESCRIPTION */}

                <p className="relative mt-5 text-xs leading-7 text-slate-400 sm:text-sm">
                  {item.description}
                </p>


                {/* ACADEMIC HIGHLIGHTS */}

                {item.highlights?.length > 0 && (

                  <div className="relative mt-7">

                    <h4 className="mb-4 flex items-center gap-2 text-[10px] font-bold tracking-[2px] text-slate-500">

                      <Target
                        size={15}
                        className="text-cyan-400"
                      />

                      {isPhD
                        ? "RESEARCH & ACADEMIC FOCUS"
                        : "ACADEMIC HIGHLIGHTS"}

                    </h4>


                    <div className="space-y-3">

                      {item.highlights.map((highlight, highlightIndex) => (

                        <motion.div
                          key={highlightIndex}
                          whileHover={reduceMotion ? {} : {
                            x: 4,
                          }}
                          className="flex items-start gap-3"
                        >

                          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                            isPhD
                              ? "bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.7)]"
                              : "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]"
                          }`} />

                          <p className="text-xs leading-6 text-slate-300">
                            {highlight}
                          </p>

                        </motion.div>

                      ))}

                    </div>

                  </div>

                )}


                {/* PHD RESEARCH PANEL */}

                {item.research && (

                  <div className="relative mt-7 overflow-hidden rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.10] to-blue-500/[0.04] p-4">

                    <div className="mb-4 flex items-center gap-2">

                      <FlaskConical
                        size={17}
                        className="text-violet-400"
                      />

                      <h4 className="text-[10px] font-bold tracking-[2px] text-violet-300">
                        RESEARCH DIRECTION
                      </h4>

                    </div>


                    <p className="text-xs font-bold leading-6 text-white sm:text-sm">
                      {item.research.proposedTitle}
                    </p>


                    <p className="mt-3 text-[10px] leading-5 text-violet-300">
                      {item.research.titleStatus}
                    </p>


                    <div className="mt-4 flex flex-wrap gap-2">

                     {Array.isArray(item.research?.areas) &&
  item.research.areas.length > 0 && (
    <div className="mt-4 flex flex-wrap gap-2">
      {item.research.areas.map((area) => (
        <span
          key={area}
          className="rounded-lg border border-violet-400/20 bg-violet-400/[0.08] px-2.5 py-1.5 text-[9px] font-medium text-violet-200 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
        >
          {area}
        </span>
      ))}
    </div>
  )}
                    </div>

                  </div>

                )}


                {/* CARD FOOTER */}

                <div className="relative mt-auto flex items-center justify-between border-t border-white/[0.07] pt-5 mt-7">

                  <span className={`text-[10px] font-bold tracking-[2px] ${
                    isPhD ? "text-violet-300" : "text-slate-500"
                  }`}>
                    {item.status || item.type.toUpperCase()}
                  </span>


                  <div className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                    isPhD
                      ? "border-violet-400/20 text-violet-300 group-hover:bg-violet-400/10"
                      : "border-cyan-400/20 text-cyan-300 group-hover:bg-cyan-400/10"
                  }`}>

                    <ArrowUpRight size={17} />

                  </div>

                </div>

              </motion.article>

            );

          })}

        </div>


        {/* =========================================
            BOTTOM MESSAGE
        ========================================= */}

        <motion.div
          initial={reduceMotion ? false : {
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10">

            <Sparkles
              size={25}
              className="text-violet-400"
            />

          </div>


          <h3 className="mt-5 text-xl font-bold text-white sm:text-2xl">
            Learning Never Stops
          </h3>


          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-400">
            From academic foundations to professional development
            and doctoral research, every step contributes to
            continuous growth and innovation.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default Education;
