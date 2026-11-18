
import { motion, useReducedMotion } from "framer-motion";

import {
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  ArrowUpRight,
  Code2,
  Sparkles,
  GraduationCap,
} from "lucide-react";

import { portfolioData } from "../data/portfolio";

const Experience = () => {
  const experiences = portfolioData.experience || [];

  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050711] px-5 py-24 text-white sm:px-8 lg:px-12"
    >

      {/* =========================================
          BACKGROUND EFFECTS
      ========================================= */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[150px]" />

        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-violet-600/[0.08] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
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

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* SECTION HEADER */}

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
          className="mb-20 text-center"
        >

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-2">

            <BriefcaseBusiness
              size={15}
              className="text-cyan-400"
            />

            <span className="text-xs font-bold tracking-[3px] text-cyan-300">
              CAREER JOURNEY
            </span>

          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Professional Experience
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            My professional journey in software development,
            enterprise applications and technology.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />

        </motion.div>


        {/* =========================================
            EXPERIENCE TIMELINE
        ========================================= */}

        <div className="relative space-y-12 lg:space-y-16">

          {/* CENTRAL TIMELINE LINE */}

          <div className="absolute bottom-4 left-[13px] top-4 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-600 shadow-[0_0_15px_rgba(34,211,238,0.4)] lg:left-1/2 lg:-translate-x-1/2" />

          {experiences.map((experience, index) => {

            const isLeft = index % 2 === 0;

            return (

              <div
                key={experience.id}
                className="relative grid grid-cols-[28px_minmax(0,1fr)] items-start gap-4 lg:grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)] lg:gap-0"
              >

                {/* TIMELINE DOT */}

                <div className="absolute left-[6px] top-8 z-20 flex h-4 w-4 items-center justify-center lg:left-1/2 lg:-translate-x-1/2">

                  <motion.span
                    animate={reduceMotion ? {} : {
                      scale: [1, 1.25, 1],
                      boxShadow: [
                        "0 0 8px rgba(34,211,238,0.3)",
                        "0 0 22px rgba(34,211,238,0.9)",
                        "0 0 8px rgba(34,211,238,0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                    }}
                    className="h-3.5 w-3.5 rounded-full border-2 border-cyan-300 bg-[#080D19]"
                  />

                </div>


                {/* EXPERIENCE CARD */}

                <motion.div
                  initial={reduceMotion ? false : {
                    opacity: 0,
                    x: isLeft ? -45 : 45,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.15,
                  }}
                  whileHover={reduceMotion ? {} : {
                    y: -7,
                    borderColor: "rgba(34,211,238,0.4)",
                  }}
                  className={`group relative col-start-2 overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#121A29] via-[#101522] to-[#171326] p-5 shadow-[0_15px_45px_rgba(0,0,0,0.25)] transition-all duration-300 hover:shadow-[0_20px_55px_rgba(34,211,238,0.08)] sm:p-7 ${
                    isLeft
                      ? "lg:col-start-1 lg:pr-8"
                      : "lg:col-start-3 lg:pl-8"
                  }`}
                >

                  {/* CARD HOVER GLOW */}

                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/[0.05] blur-[70px] transition-all duration-500 group-hover:bg-cyan-500/[0.13]" />


                  {/* CARD HEADER */}

                  <div className="relative">

                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">

                      <div className="flex items-center gap-2">

                        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10">

                          {index === 0 ? (
                            <BriefcaseBusiness
                              size={18}
                              className="text-cyan-400"
                            />
                          ) : (
                            <GraduationCap
                              size={19}
                              className="text-violet-400"
                            />
                          )}

                        </span>

                        <span className="text-[10px] font-bold tracking-[2px] text-slate-500">
                          {index === 0
                            ? "PROFESSIONAL EXPERIENCE"
                            : "PROFESSIONAL TRAINING"}
                        </span>

                      </div>

                      {experience.current && (

                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-[10px] font-bold text-emerald-300">

                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                          CURRENT

                        </span>

                      )}

                    </div>


                    {/* POSITION */}

                    <h3 className="text-xl font-extrabold leading-snug text-white transition-colors duration-300 group-hover:text-cyan-300 sm:text-2xl">
                      {experience.position}
                    </h3>


                    {/* COMPANY */}

                    <p className="mt-2 text-sm font-bold text-cyan-300">
                      {experience.company}
                    </p>


                    {/* LOCATION */}

                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">

                      <span className="flex items-center gap-1.5">

                        <MapPin
                          size={14}
                          className="text-violet-400"
                        />

                        {experience.location}

                      </span>

                      <span className="flex items-center gap-1.5">

                        <CalendarDays
                          size={14}
                          className="text-cyan-400"
                        />

                        {experience.duration}

                      </span>

                    </div>

                    <div className="my-5 h-px bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />

                  </div>


                  {/* DESCRIPTION */}

                  <p className="relative mb-4 text-sm leading-7 text-slate-400">
                    {experience.description}
                  </p>


                  {/* RESPONSIBILITIES */}

                  <div className="relative space-y-3">

                    {experience.responsibilities.map((responsibility, itemIndex) => (

                      <motion.div
                        key={itemIndex}
                        whileHover={reduceMotion ? {} : {
                          x: 4,
                        }}
                        className="flex items-start gap-3"
                      >

                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]" />

                        <p className="text-xs leading-6 text-slate-300 sm:text-sm">
                          {responsibility}
                        </p>

                      </motion.div>

                    ))}

                  </div>


                  {/* TECHNOLOGY BADGES */}

                  <div className="relative mt-7 border-t border-white/[0.07] pt-5">

                    <div className="mb-3 flex items-center gap-2">

                      <Code2
                        size={14}
                        className="text-violet-400"
                      />

                      <span className="text-[10px] font-bold tracking-[2px] text-slate-500">
                        TECHNOLOGIES & SKILLS
                      </span>

                    </div>

                    <div className="flex flex-wrap gap-2">

                      {experience.technologies.map((technology) => (

                        <motion.span
                          key={technology}
                          whileHover={reduceMotion ? {} : {
                            scale: 1.07,
                            y: -3,
                          }}
                          className="cursor-default rounded-lg border border-violet-400/15 bg-violet-500/[0.06] px-3 py-1.5 text-[10px] font-semibold text-violet-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                        >
                          {technology}
                        </motion.span>

                      ))}

                    </div>

                  </div>


                  {/* CARD FOOTER */}

                  <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">

                    <span className="text-[10px] font-semibold tracking-[2px] text-slate-500">
                      {experience.employmentType}
                    </span>

                    <Sparkles
                      size={16}
                      className="text-cyan-400/60 transition-all duration-300 group-hover:rotate-12 group-hover:text-cyan-300"
                    />

                  </div>

                </motion.div>

              </div>

            );

          })}

        </div>


        {/* =========================================
            TIMELINE END
        ========================================= */}

        <motion.div
          initial={reduceMotion ? false : {
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center text-center"
        >

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10">

            <Sparkles
              size={22}
              className="text-violet-400"
            />

          </div>

          <p className="mt-4 text-sm font-bold tracking-[2px] text-slate-300">
            ALWAYS LEARNING • ALWAYS GROWING
          </p>

          <p className="mt-2 text-xs text-slate-500">
            Every experience is another step forward.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default Experience;
