import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''
    const website = typeof body.website === 'string' ? body.website.trim() : ''

    if (website) {
      return NextResponse.json({ message: 'Message sent.' })
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Please complete all fields.' }, { status: 400 })
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    if (message.length > 5000) {
      return NextResponse.json({ error: 'Your message is too long.' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL || !process.env.FROM_EMAIL) {
      return NextResponse.json({ error: 'Email service is not configured yet.' }, { status: 503 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New project enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    if (error) {
      return NextResponse.json({ error: 'Unable to send your message right now.' }, { status: 502 })
    }

    return NextResponse.json({ message: 'Message sent.' })
  } catch {
    return NextResponse.json({ error: 'Unable to send your message right now.' }, { status: 500 })
  }
}
