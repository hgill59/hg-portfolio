import { useState } from 'react'
import { site } from '../content/site'
import usePageTitle from '../usePageTitle'

const fieldClass =
  'mt-1.5 w-full rounded-md border-2 border-ink/30 bg-white px-4 py-3 font-body text-ink focus:border-ink'

export default function Contact() {
  usePageTitle(`Contact | ${site.name}`)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const update = (field) => (event) => setForm({ ...form, [field]: event.target.value })

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
      <div>
        <h1 className="text-5xl font-bold sm:text-6xl">Get in touch</h1>
        <p className="mt-4 max-w-[30rem] text-slate">
          Have a site that needs building, fixing or finding? Email me, or use the form.
        </p>
        <p className="mt-8 font-display text-xl font-semibold">Email</p>
        <a
          href={`mailto:${site.email}`}
          className="text-link break-all text-2xl sm:text-3xl"
        >
          {site.email}
        </a>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="font-display font-semibold">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={update('name')}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="font-display font-semibold">
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={update('email')}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="message" className="font-display font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            value={form.message}
            onChange={update('message')}
            className={fieldClass}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Open in my email app
          </button>
          <p className="mt-3 text-sm text-slate">
            This opens your email app with your message filled in. Press send there.
          </p>
        </div>
      </form>
    </div>
  )
}
