const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '3+', label: 'BI & Data Tools' },
  { value: '10+', label: 'Technologies Used' },
  { value: '1+', label: 'Years Building' },
]

const expertise = [
  {
    category: 'Data Analysis',
    items: ['Excel', 'Power BI', 'Python & Pandas', 'SQL & MySQL', 'Tableau', 'Data Cleaning & Modeling'],
  },
  {
    category: 'Development',
    items: ['JavaScript', 'React', 'Vite', 'Tailwind CSS', 'Node.js & Express', 'REST APIs'],
  },
  {
    category: 'Platforms & Tools',
    items: ['GitHub', 'Firebase', 'M-Pesa / Daraja API', 'GitHub Actions', 'Django (basics)'],
  },
  {
    category: 'Soft Skills',
    items: ['Stakeholder Reporting', 'Analytical Thinking', 'Problem Solving', 'Documentation', 'Self-Directed Learning'],
  },
]

function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Data analyst and developer from Kenya, turning raw data into decisions and ideas into working products.
        </p>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I work across data analysis and software development, turning raw information into clear dashboards and building practical web tools that solve real problems.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            My data projects use Python, SQL, and Power BI to clean datasets, model relationships, answer business questions, and present insights that stakeholders can act on.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            On the development side, I build responsive websites and backend services with JavaScript, React, Express, Firebase, and API integrations.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-4xl mx-auto text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-gray-50 dark:bg-gray-900 py-6 px-4">
              <p className="text-3xl font-bold text-cyan-700 dark:text-cyan-300">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Core Expertise
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {expertise.map((group) => (
              <div key={group.category} className="rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-6">
                <h4 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">{group.category}</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 text-cyan-600 dark:text-cyan-300">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-700 p-8 text-center text-white shadow-xl">
          <p className="text-lg italic leading-8">
            "Data only matters once someone can act on it. I care as much about a clean chart and a clear answer as I do about the query behind it."
          </p>
        </div>
      </div>
    </section>
  )
}

export default About