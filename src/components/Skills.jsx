function Skills() {
  const skills = [
    { category: 'Data Analysis', items: ['Power BI', 'Python', 'SQL', 'Data Cleaning', 'Dashboard Design'] },
    { category: 'Software Development', items: ['React', 'JavaScript', 'Node.js', 'Express', 'Firebase'] },
    { category: 'Business Tools', items: ['Excel', 'GitHub', 'Reporting', 'Data Modeling', 'API Integration'] },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Skills
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
