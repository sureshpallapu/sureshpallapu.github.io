
import { motion, useReducedMotion } from "framer-motion";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Target,
} from "lucide-react";

import { portfolioData } from "../data/portfolio";

const About = () => {
  const { personal, about } = portfolioData;
  const profile = about.profile;

  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: reduceMotion ? false : {
      opacity: 0,
      y: 25,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
    },
  });

  const personalDetails = [
    {
      icon: CalendarDays,
      label: "Birthday",
      value: profile.birthday,
    },
    {
      icon: MapPin,
      label: "City",
      value: profile.city,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personal.phone,
    },
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050711] px-5 py-24 text-white sm:px-8 lg:px-12"
    >

      {/* =========================================
          BACKGROUND DECORATIONS
      ========================================= */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-[140px]" />

        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-violet-600/[0.08] blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(#94a3b8 0.7px, transparent 0.7px)",
            backgroundSize: "35px 35px",
          }}
        />

      </div>


      {/* =========================================
          SECTION CONTAINER
      ========================================= */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <motion.div
          {...fadeUp()}
          className="mb-16 text-center"
        >

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-2">

            <Sparkles
              size={15}
              className="text-cyan-400"
            />

            <span className="text-xs font-bold tracking-[3px] text-cyan-300">
              GET TO KNOW ME
            </span>

          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              {profile.heading}
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            {profile.subtitle}
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />

        </motion.div>


        {/* =========================================
            MAIN ABOUT CARD
        ========================================= */}

        <motion.div
          {...fadeUp(0.15)}
          className="relative overflow-hidden rounded-[30px] border border-white/[0.09] bg-gradient-to-br from-[#121A29] via-[#101522] to-[#151126] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.3)] sm:p-10 lg:p-12"
        >

          {/* CARD GLOW */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet-500/[0.09] blur-[100px]" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[0.8fr_1.4fr]">


            {/* =====================================
                LEFT - PROFESSIONAL IDENTITY
            ===================================== */}

            <motion.div
              {...fadeUp(0.2)}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >

              {/* CODE ICON */}
              <div className="relative mb-7 flex h-28 w-28 items-center justify-center rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-violet-500/10 shadow-[0_0_40px_rgba(34,211,238,0.08)]">

                <Code2
                  size={52}
                  strokeWidth={1.5}
                  className="text-cyan-400"
                />

                <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/30 bg-[#171526]">

                  <Sparkles
                    size={15}
                    className="text-violet-400"
                  />

                </div>

              </div>


              <p className="mb-3 text-xs font-bold tracking-[3px] text-cyan-400">
                HELLO THERE!
              </p>

              <h3 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                {personal.name}
              </h3>

              <p className="mt-4 text-base font-semibold text-violet-300">
                {profile.position}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                {profile.company}
              </p>


              {/* CURRENT PROFESSIONAL STATUS */}
              <div className="mt-7 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.05] px-4 py-3">

                <BriefcaseBusiness
                  size={19}
                  className="text-emerald-400"
                />

                <div className="text-left">

                  <p className="text-xs font-bold text-emerald-300">
                    Professional Journey
                  </p>

                  <p className="mt-1 text-[11px] text-slate-400">
                    Building enterprise solutions
                  </p>

                </div>

              </div>


              {/* PERSONAL DETAILS */}
              <div className="mt-9 w-full border-t border-white/[0.08] pt-7">

                <h4 className="mb-5 text-xs font-bold tracking-[3px] text-slate-400">
                  PERSONAL DETAILS
                </h4>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">

                  {personalDetails.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="group flex min-w-0 items-start gap-3"
                      >

                        <Icon
                          size={17}
                          className="mt-0.5 shrink-0 text-cyan-400 transition-transform duration-300 group-hover:scale-110"
                        />

                        <div className="min-w-0 text-left">

                          <p className="text-[10px] font-bold tracking-[2px] text-slate-500">
                            {item.label}
                          </p>

                          <p className="mt-1 break-words text-sm text-slate-300 transition-colors duration-300 group-hover:text-cyan-300">
                            {item.value}
                          </p>

                        </div>

                      </div>
                    );
                  })}

                </div>

              </div>

            </motion.div>


            {/* =====================================
                RIGHT - ABOUT DESCRIPTION
            ===================================== */}

            <motion.div
              {...fadeUp(0.3)}
              className="min-w-0"
            >

              {/* WELCOME HEADING */}
              <div className="mb-7 flex items-center gap-3">

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">

                  <Sparkles
                    size={19}
                    className="text-violet-400"
                  />

                </span>

                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {profile.welcome}
                </h3>

              </div>


              {/* INTRODUCTION PARAGRAPHS */}
              <div className="space-y-5">

                {profile.paragraphs.map((paragraph, index) => (

                  <motion.p
                    key={index}
                    {...fadeUp(0.35 + index * 0.1)}
                    className="text-sm leading-8 text-slate-400 sm:text-base"
                  >
                    {paragraph}
                  </motion.p>

                ))}

              </div>


              {/* PROFESSIONAL HIGHLIGHTS */}
              <div className="mt-9">

                <div className="mb-5 flex items-center gap-3">

                  <Target
                    size={19}
                    className="text-cyan-400"
                  />

                  <h4 className="text-sm font-bold tracking-[2px] text-white">
                    WHAT I SPECIALIZE IN
                  </h4>

                </div>

                <div className="grid gap-3 sm:grid-cols-2">

                  {profile.highlights.map((item, index) => (

                    <motion.div
                      key={item}
                      {...fadeUp(0.4 + index * 0.08)}
                      whileHover={reduceMotion ? {} : {
                        x: 5,
                        borderColor: "rgba(34,211,238,0.4)",
                      }}
                      className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 transition-all duration-300 hover:bg-cyan-400/[0.04]"
                    >

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">

                        <ArrowUpRight size={15} />

                      </span>

                      <span className="text-xs font-medium leading-5 text-slate-300">
                        {item}
                      </span>

                    </motion.div>

                  ))}

                </div>

              </div>


              {/* TECHNOLOGY EXPERTISE */}
              <div className="mt-9">

                <div className="mb-5 flex items-center gap-3">

                  <Code2
                    size={19}
                    className="text-violet-400"
                  />

                  <h4 className="text-sm font-bold tracking-[2px] text-white">
                    TECHNOLOGIES I WORK WITH
                  </h4>

                </div>

                <div className="flex flex-wrap gap-2">

                  {profile.technologies.map((technology) => (

                    <span
                      key={technology}
                      className="cursor-default rounded-lg border border-violet-400/15 bg-violet-500/[0.05] px-3 py-2 text-xs font-medium text-violet-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      {technology}
                    </span>

                  ))}

                </div>

              </div>


              {/* EMAIL CTA */}
              <div className="mt-10">

                <a
                  href={`mailto:${personal.email}`}
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
                >

                  Let's Connect

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </a>

              </div>

            </motion.div>

          </div>

        </motion.div>


        {/* =========================================
            BOTTOM ACADEMIC / PROFESSIONAL NOTE
        ========================================= */}

        <motion.div
          {...fadeUp(0.3)}
          className="mt-10 grid gap-4 sm:grid-cols-2"
        >

          <div className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">

              <Code2
                size={24}
                className="text-cyan-400"
              />

            </div>

            <div>

              <h4 className="font-bold text-white">
                Industry Professional
              </h4>

              <p className="mt-1 text-xs text-slate-400">
                Enterprise development & ServiceNow
              </p>

            </div>

          </div>


          <div className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10">

              <GraduationCap
                size={25}
                className="text-violet-400"
              />

            </div>

            <div>

              <h4 className="font-bold text-white">
                Research & Continuous Learning
              </h4>

              <p className="mt-1 text-xs text-slate-400">
                Expanding technical and academic knowledge
              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default About;
