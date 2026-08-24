'use client'

import { FormEvent, useState } from 'react'
import Reveal from './ui/Reveal'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    setError('')

    const form = event.currentTarget
    const formData = new FormData(form)
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(formData.entries())),
    })
    const result = await response.json()

    if (!response.ok) {
      setError(result.error || 'Unable to send your message right now.')
      setStatus('error')
      return
    }

    form.reset()
    setStatus('success')
  }

  return (
    <section id="contact" className="bg-black px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <Reveal className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let&apos;s work together</h2>
          <p className="mt-2 text-white text-lg">Tell me about your next project.</p>
        </Reveal>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-white">
              Name
              <input name="name" required maxLength={100} className="rounded-lg border border-[#777] bg-black px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-white" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-white">
              Email
              <input name="email" type="email" required maxLength={254} className="rounded-lg border border-[#777] bg-black px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-white" />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-medium text-white">
            Message
            <textarea name="message" required maxLength={5000} rows={6} className="resize-y rounded-lg border border-[#777] bg-black px-4 py-3 text-white outline-none placeholder:text-white/50 focus:border-white" />
          </label>
          <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
          <button type="submit" disabled={status === 'sending'} className="justify-self-center rounded-full bg-white px-7 py-3 font-semibold text-black disabled:opacity-60">
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          {status === 'success' && <p role="status" className="text-center text-white">Thanks. Your message has been sent.</p>}
          {status === 'error' && <p role="alert" className="text-center text-white">{error}</p>}
        </form>
      </div>
    </section>
  )
}
