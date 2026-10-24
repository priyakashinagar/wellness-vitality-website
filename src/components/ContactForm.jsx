import { useState } from 'react'

const btnBase =
  'inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose/20 active:scale-[0.98] cursor-pointer'
const inputClass =
  'w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose/20 focus:border-rose transition-all disabled:opacity-50'
const labelClass = 'font-bold text-indigo/60 uppercase tracking-widest text-[10px]'
const emptyForm = { name: '', phone: '', email: '', enquiry: '' }

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState(emptyForm)

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  // UI only: validation matches the live site; a short delay stands in for the API call.
  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.email || !form.enquiry) return setError('All fields are required.')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return setError('Please enter a valid email address.')
    if (!/^\+?[\d\s-]{8,}$/.test(form.phone)) return setError('Please enter a valid phone number.')
    setLoading(true)
    setError('')
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm(emptyForm)
    }, 800)
  }

  return (
    <div className="bg-white p-12 pb-14 rounded-[3rem] border border-gray-100 shadow-2xl shadow-indigo/5 relative overflow-visible">
      <div className="absolute top-0 left-10 w-20 h-2 bg-rose rounded-b-full" />
      {submitted ? (
        <div className="py-12 text-center reveal-up">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100">
            <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-indigo mb-4">Success!</h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Your enquiry has been submitted successfully. Our clinical team has received your details and will get back
            to you shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className={`${btnBase} text-[#3b3f69] hover:bg-[#3b3f69]/10 text-indigo font-bold hover:text-rose transition-all`}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-indigo mb-8">Send an Enquiry</h2>
          <form className="space-y-6 text-sm" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={labelClass}>Your Name *</label>
                <input type="text" placeholder="Full Name" required className={inputClass} name="name" value={form.name} onChange={onChange} disabled={loading} />
              </div>
              <div className="space-y-2">
                <label className={labelClass}>Phone Number *</label>
                <input type="tel" placeholder="0400 000 000" required className={inputClass} name="phone" value={form.phone} onChange={onChange} disabled={loading} />
              </div>
            </div>
            <div className="space-y-2">
              <label className={labelClass}>Email Address *</label>
              <input type="email" placeholder="email@example.com" required className={inputClass} name="email" value={form.email} onChange={onChange} disabled={loading} />
            </div>
            <div className="space-y-2">
              <label className={labelClass}>Your Enquiry *</label>
              <textarea
                name="enquiry"
                rows="4"
                placeholder="How can we help you?"
                required
                className={`${inputClass} resize-none`}
                value={form.enquiry}
                onChange={onChange}
                disabled={loading}
              />
            </div>
            {error && (
              <div className="p-3 text-[#d32f2f] bg-[#fef5f8] border border-[#ca125440] rounded-lg text-sm font-semibold">{error}</div>
            )}
            <button
              type="submit"
              disabled={loading}
              className={`${btnBase} bg-[#ca1254] text-white hover:brightness-110 shadow-sm border-none w-full py-5 text-base font-bold shadow-xl shadow-rose/20 flex justify-center items-center gap-2`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Sending...</span>
                </>
              ) : (
                'Send My Enquiry'
              )}
            </button>
          </form>
        </>
      )}
    </div>
  )
}
