import { useState } from 'react'
import { ArrowRight } from '../Icons'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  // UI only: no backend yet, so a short delay stands in for the API call.
  const onSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    setMessage('')
    setTimeout(() => {
      setStatus('success')
      setMessage('Thank you for subscribing!')
      setEmail('')
    }, 600)
  }
  const loading = status === 'loading'

  return (
    <section className="py-10 md:py-14 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-[rgb(59,63,105)]/20 bg-[rgb(59,63,105)]/5 backdrop-blur-sm px-6 py-6 md:px-8 md:py-7 shadow-[0_10px_30px_rgba(59,63,105,0.15)]">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[rgb(202,18,84)]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[rgb(59,63,105)]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[rgb(59,63,105)]/60 mb-2">
                Stay Updated
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[rgb(59,63,105)] leading-snug">
                Join our Wellness Community
              </h2>
              <p className="text-sm text-gray-500 mt-1">Monthly health insights &amp; wellness tips.</p>
            </div>
            <div className="w-full lg:w-auto">
              <form onSubmit={onSubmit} className="flex flex-col items-center sm:items-start gap-2">
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:min-w-[240px] px-4 py-3 border border-gray-300 bg-white text-[rgb(59,63,105)] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[rgb(202,18,84)] text-sm transition disabled:opacity-70"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-6 py-3 bg-[rgb(202,18,84)] text-white font-bold hover:shadow-lg hover:-translate-y-[1px] transition text-sm flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {loading ? 'Subscribing...' : 'Subscribe'}
                    {!loading && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                  </button>
                </div>
                {message && (
                  <p
                    className={`text-sm mt-1 w-full text-center sm:text-left ${
                      status === 'success' ? 'text-green-600' : 'text-red-500'
                    }`}
                  >
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
