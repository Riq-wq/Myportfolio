import { useEffect, useRef, useState } from 'react'

const skills = [
  {
    category: 'Data Analysis',
    accent: 'cyan',
    items: [
      { name: 'Power BI', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'SQL', level: 85 },
      { name: 'Data Cleaning', level: 88 },
      { name: 'Dashboard Design', level: 85 },
    ],
  },
  {
    category: 'Software Development',
    accent: 'violet',
    items: [
      { name: 'React', level: 82 },
      { name: 'JavaScript', level: 80 },
      { name: 'Node.js', level: 70 },
      { name: 'Express', level: 68 },
      { name: 'Firebase', level: 65 },
    ],
  },
  {
    category: 'Business Tools',
    accent: 'emerald',
    items: [
      { name: 'Excel', level: 92 },
      { name: 'GitHub', level: 80 },
      { name: 'Reporting', level: 85 },
      { name: 'Data Modeling', level: 78 },
      { name: 'API Integration', level: 70 },
    ],
  },
]

const accentClasses = {
  cyan: {
    title: 'text-cyan-600 dark:text-cyan-400',
    bar: 'bg-cyan-500',
    ring: 'ring-cyan-500/20',
  },
  violet: {
    title: 'text-violet-600 dark:text-violet-400',
    bar: 'bg-violet-500',
    ring: 'ring-violet-500/20',
  },
  emerald: {
    title: 'text-emerald-600 dark:text-emerald-400',
    bar: 'bg-emerald-500',
    ring: 'ring-emerald-500/20',
  },
}

function SkillCard({ group, index, visible }) {
  const accent = accentClasses[group.accent]

  return (
    <div
      className={`rounded-xl bg-white p-8 shadow-lg ring-1 ring-transparent transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800 ${accent.ring} ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className={`mb-6 text-2xl font-bold ${accent.title}`}>{group.category}</h3>

      <div className="flex flex-col gap-4">
        {group.items.map((skill, skillIndex) => (
          <div key={skill.name}>
            <div className="mb-1 flex items-center justify-between text-sm font-semibold text-gray-700 dark:text-gray-200">
              <span>{skill.name}</span>
              <span className="text-gray-400 dark:text-gray-500">{skill.level}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700">
              <div
                className={`h-full rounded-full ${accent.bar} transition-all duration-1000 ease-out`}
                style={{
                  width: visible ? `${skill.level}%` : '0%',
                  transitionDelay: `${index * 150 + skillIndex * 80}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Skills() {
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
    <section id="skills" ref={sectionRef} className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mb-12 text-center transition-all duration-700 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">My Skills</h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Tools and technologies I use to turn data into decisions and ideas into products.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((group, index) => (
            <SkillCard key={group.category} group={group} index={index} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills