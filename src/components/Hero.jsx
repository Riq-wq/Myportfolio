import { useEffect, useState } from 'react'

const roles = ['Data Analyst', 'Software Developer', 'Power BI Builder', 'Insight Storyteller']

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length)
    }, 1800)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section id="home" className="min-h-screen overflow-hidden bg-cyan-50 pt-16 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="absolute inset-x-0 top-16 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent dark:via-cyan-300/40" />

        <div className="text-left">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-500/30 bg-white/80 px-4 py-2 text-sm font-semibold text-cyan-900 shadow-lg shadow-cyan-200/50 backdrop-blur dark:border-cyan-300/30 dark:bg-white/10 dark:text-cyan-100 dark:shadow-cyan-950/40">
            <span className="h-2 w-2 rounded-full bg-emerald-400 live-dot" />
            Available for data and web projects
          </div>

          <p className="mb-4 text-base font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-200">
            Hassan Jumaa
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight text-slate-950 dark:text-white md:text-7xl">
            Turning raw data and code into work people can actually use.
          </h1>

          <div className="mt-6 flex min-h-14 flex-wrap items-center gap-3 text-2xl font-bold text-cyan-900 dark:text-cyan-100 md:text-3xl">
            <span>I am a</span>
            <span className="role-loader rounded-lg bg-cyan-300 px-4 py-2 text-slate-950 shadow-lg shadow-cyan-500/20">
              {roles[roleIndex]}
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300 md:text-xl">
            I build Power BI dashboards, SQL-backed analysis workflows, and responsive web applications with clean user journeys and practical business value.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-800 dark:text-slate-100">
            <span className="rounded-full border border-cyan-700/15 bg-white/80 px-4 py-2 backdrop-blur dark:border-white/15 dark:bg-white/10">Power BI</span>
            <span className="rounded-full border border-cyan-700/15 bg-white/80 px-4 py-2 backdrop-blur dark:border-white/15 dark:bg-white/10">Python and SQL</span>
            <span className="rounded-full border border-cyan-700/15 bg-white/80 px-4 py-2 backdrop-blur dark:border-white/15 dark:bg-white/10">React and Express</span>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-700 px-8 py-3 text-center font-bold text-white shadow-lg shadow-cyan-500/20 transition-colors hover:bg-cyan-800 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-cyan-800/30 px-8 py-3 text-center font-bold text-cyan-900 transition-colors hover:bg-cyan-100 dark:border-white/30 dark:text-white dark:hover:bg-white/10"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-lg font-semibold text-slate-700 dark:text-slate-300">
            <a href="https://github.com/Riq-wq" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cyan-700 dark:hover:text-cyan-200">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mrisa-juma-56a600416" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-cyan-700 dark:hover:text-cyan-200">
              LinkedIn
            </a>
            <a href="mailto:jumaah933@gmail.com" className="transition-colors hover:text-cyan-700 dark:hover:text-cyan-200">
              Email
            </a>
          </div>
        </div>

        <div className="hero-console relative mx-auto w-full max-w-xl rounded-lg border border-cyan-900/10 bg-white/80 p-5 shadow-2xl shadow-cyan-200/60 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:shadow-cyan-950/60">
          <div className="mb-5 grid gap-5 border-b border-slate-900/10 pb-5 dark:border-white/10 sm:grid-cols-[0.9fr_1.1fr]">
            <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-900">
              <img
                src={`${import.meta.env.BASE_URL}images/hassan-profile-clean.jpeg`}
                alt="Hassan Jumaa"
                className="h-72 w-full object-cover object-center sm:h-full"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">Live Portfolio Preview</p>
                <p className="mt-1 text-3xl font-bold text-slate-950 dark:text-white">Hassan Jumaa</p>
                <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  Data analyst and developer building dashboards, insight workflows, and responsive web tools.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <div className="rounded-lg bg-emerald-400/15 px-3 py-2 text-sm font-bold text-emerald-200">
                  Online
                </div>
                <div className="rounded-lg bg-cyan-400/15 px-3 py-2 text-sm font-bold text-cyan-200">
                  Portfolio Live
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-950/70">
              <p className="text-sm text-slate-500 dark:text-slate-400">Revenue Analyzed</p>
              <p className="mt-2 text-3xl font-bold text-cyan-200">438K</p>
            </div>
            <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-950/70">
              <p className="text-sm text-slate-500 dark:text-slate-400">Profit Found</p>
              <p className="mt-2 text-3xl font-bold text-emerald-200">37K</p>
            </div>
            <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-950/70">
              <p className="text-sm text-slate-500 dark:text-slate-400">Projects</p>
              <p className="mt-2 text-3xl font-bold text-amber-200">3</p>
            </div>
          </div>

          <div className="mt-5 rounded-lg bg-slate-100 p-5 dark:bg-slate-950/70">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-semibold text-slate-700 dark:text-slate-200">Building insight layer</span>
              <span className="text-sm text-cyan-700 dark:text-cyan-200">86%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-800">
              <div className="hero-progress h-full rounded-full bg-cyan-300" />
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            {['Clean data', 'Model relationships', 'Design dashboard', 'Ship web app'].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-lg border border-slate-900/10 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                <span className="font-semibold text-slate-700 dark:text-slate-200">{item}</span>
                <span className="text-sm font-bold text-emerald-200">Ready</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
