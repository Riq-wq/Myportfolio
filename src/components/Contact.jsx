import { useState } from 'react'

const contactEndpoint = 'https://formsubmit.co/ajax/jumaah933@gmail.com'
const initialFormData = {
  name: '',
  email: '',
  message: '',
  website: '', // honeypot: real users never see or fill this
}

function Contact() {
  const [formData, setFormData] = useState(initialFormData)
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const isSending = status === 'sending'

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (isSending) {
      return
    }

    // Bots fill every field including hidden ones; real visitors never see this one
    if (formData.website) {
      setStatus('success')
      setStatusMessage('Thank you. Your message has been sent successfully, and I will respond as soon as possible.')
      setFormData(initialFormData)
      return
    }

    setStatus('sending')
    setStatusMessage('Sending your message...')

    const payload = new FormData()
    payload.append('name', formData.name.trim())
    payload.append('email', formData.email.trim())
    payload.append('message', formData.message.trim())
    payload.append('_subject', 'New portfolio contact message')
    payload.append('_template', 'table')
    payload.append('_captcha', 'true')
    payload.append('_honey', formData.website)

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: payload,
      })

      if (!response.ok) {
        throw new Error('Message delivery failed')
      }

      setStatus('success')
      setStatusMessage('Thank you. Your message has been sent successfully, and I will respond as soon as possible.')
      setFormData(initialFormData)
    } catch (error) {
      setStatus('error')
      setStatusMessage('Sorry, your message could not be sent right now. Please email me directly at jumaah933@gmail.com.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <div className="group">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500 resize-none"
                  placeholder="Tell me about your project or question..."
                />
              </div>

              {statusMessage && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl border px-4 py-3 text-sm font-medium ${
                    status === 'success'
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200'
                      : status === 'error'
                        ? 'border-red-200 bg-red-50 text-red-800 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200'
                        : 'border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200'
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSending ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Connect With Me
              </h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/Riq-wq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                    GH
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">GitHub</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">@Riq-wq</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/mrisa-juma-56a600416"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                    LI
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">LinkedIn</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Connect professionally</div>
                  </div>
                </a>

                <a
                  href="mailto:jumaah933@gmail.com"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center text-white text-xl font-bold group-hover:scale-110 transition-transform">
                    @
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Email</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">jumaah933@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-2">Ready to start a project?</h4>
              <p className="text-blue-100">
                I am available for data analysis, dashboard, and web development projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
