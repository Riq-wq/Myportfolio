import { useEffect, useRef, useState } from 'react'

const experience = [
  {
    role: 'Data Analytics & BI Attachee',
    org: 'Swahilipot Hub Foundation',
    location: 'Mombasa, Kenya',
    period: 'May 11 – Jul 31, 2026',
    points: [
      'Built end-to-end analytics pipelines (Python/Pandas → MySQL → Power BI with DAX) to support business intelligence and reporting needs.',
      'Identified and remediated exposed database credentials in a public repository, rotating passwords and migrating to environment-variable-based configuration.',
      'Contributed to software development tasks using React, Vite, and Tailwind CSS alongside core data work.',
      'Supported fellow attachees with technical documentation and report preparation.',
    ],
  },
]

function Experience() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="bg-white py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Experience</h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Where I've put data analysis and development skills to work.
          </p>
        </div>

        <div className="relative border-l-2 border-cyan-200 dark:border-cyan-900 pl-8">
          {experience.map((job, index) => (
            <div
              key={job.role}
              className={`relative mb-10 last:mb-0 transition-all duration-700 ease-out ${
                visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="absolute -left-[2.55rem] top-1.5 h-4 w-4 rounded-full border-4 border-white bg-cyan-500 dark:border-gray-800" />

              <div className="rounded-xl bg-gray-50 p-6 shadow-lg ring-1 ring-transparent hover:-translate-y-1 hover:shadow-xl transition-all duration-300 dark:bg-gray-900">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.role}</h3>
                  <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">{job.period}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {job.org} · {job.location}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {job.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 text-cyan-600 dark:text-cyan-300">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience