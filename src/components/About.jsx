function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
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
      </div>
    </section>
  )
}

export default About
