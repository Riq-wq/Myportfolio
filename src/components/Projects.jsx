function Projects() {
  const projects = [
    {
      title: 'Madhav Ecommerce Sales Dashboard',
      type: 'Data Analysis',
      description: 'Interactive Power BI dashboard analyzing 2018 ecommerce revenue, profit, quantity sold, customer performance, payment methods, product categories, and state-level sales trends.',
      impact: 'Highlighted 438K revenue, 37K profit, 6K units sold, leading states, top customers, seasonal profit trends, and digital payment opportunities.',
      technologies: ['Power BI', 'Data Modeling', 'DAX', 'CSV', 'Business Intelligence'],
      link: 'https://github.com/Riq-wq/ecommerce-sales-dashboard',
      image: 'https://raw.githubusercontent.com/Riq-wq/ecommerce-sales-dashboard/main/screenshot.jpeg',
      visual: 'image',
    },
    {
      title: 'Customer Shopping Behavior Analysis',
      type: 'Data Analysis',
      description: 'End-to-end analytics workflow covering data preparation, exploratory analysis, SQL insight generation, Power BI visualization, reporting, and stakeholder presentation.',
      impact: 'Built a corporate-style analysis pipeline for customer segments, loyalty patterns, purchase drivers, and business recommendations.',
      technologies: ['Python', 'SQL', 'Power BI', 'EDA', 'Reporting'],
      link: 'https://github.com/Riq-wq/Customer-Shopping-Behavior-Analysis',
      visual: 'analytics',
    },
    {
      title: 'ImpactHub Foundation',
      type: 'Software Development',
      description: 'Responsive donor and partnership website with donation flows, contact handling, automated donor emails, admin support, and backend API endpoints.',
      impact: 'Implemented donation and contact workflows with Express, Nodemailer, Firebase support, and M-Pesa integration materials for production readiness.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Express', 'Firebase', 'Nodemailer'],
      link: 'https://github.com/Riq-wq/IMPACTHUB-FOUNDATION',
      visual: 'website',
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600 dark:text-gray-300">
          A focused mix of data analysis dashboards and software development work.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex h-full flex-col overflow-hidden rounded-lg bg-gray-50 shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:bg-gray-700"
            >
              <div className="h-52 bg-gray-900">
                {project.visual === 'image' && (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover"
                  />
                )}

                {project.visual === 'analytics' && (
                  <div className="project-visual analytics-visual h-full p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="rounded-md bg-white/90 px-3 py-1 text-xs font-bold text-slate-900">Customer Insights</span>
                      <span className="text-xs font-bold text-cyan-100">SQL + Power BI</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-md bg-white/90 p-3">
                        <p className="text-xs font-semibold text-slate-500">Segments</p>
                        <p className="text-xl font-bold text-slate-900">5</p>
                      </div>
                      <div className="rounded-md bg-white/90 p-3">
                        <p className="text-xs font-semibold text-slate-500">Loyalty</p>
                        <p className="text-xl font-bold text-slate-900">High</p>
                      </div>
                      <div className="rounded-md bg-white/90 p-3">
                        <p className="text-xs font-semibold text-slate-500">Drivers</p>
                        <p className="text-xl font-bold text-slate-900">Clear</p>
                      </div>
                    </div>
                    <div className="mt-5 space-y-3">
                      <span className="block h-3 w-11/12 rounded-full bg-cyan-200" />
                      <span className="block h-3 w-8/12 rounded-full bg-emerald-200" />
                      <span className="block h-3 w-10/12 rounded-full bg-amber-200" />
                    </div>
                  </div>
                )}

                {project.visual === 'website' && (
                  <div className="project-visual website-visual flex h-full items-center p-4">
                    <div className="flex h-full w-full flex-col overflow-hidden rounded-lg bg-white shadow-xl">
                      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
                        <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <span className="rounded bg-blue-100 px-2 py-1 text-[10px] font-black uppercase tracking-wide text-blue-900">
                          ImpactHub
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col justify-between p-4">
                        <div>
                          <p className="text-xl font-black leading-tight text-slate-950">
                            Donations and partnerships made simple.
                          </p>
                          <div className="mt-3 space-y-2">
                            <div className="h-2.5 w-full rounded bg-slate-200" />
                            <div className="h-2.5 w-9/12 rounded bg-slate-200" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-md bg-blue-100 p-3">
                            <p className="text-xs font-bold text-blue-900">Donations</p>
                            <p className="mt-1 text-lg font-black text-blue-950">Active</p>
                          </div>
                          <div className="rounded-md bg-emerald-100 p-3">
                            <p className="text-xs font-bold text-emerald-900">Emails</p>
                            <p className="mt-1 text-lg font-black text-emerald-950">Sent</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="mb-3 w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                  {project.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-5">
                  {project.impact}
                </p>
                <div className="mt-auto pt-2">
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
