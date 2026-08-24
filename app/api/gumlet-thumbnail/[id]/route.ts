import { NextResponse } from 'next/server'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params

  if (!/^[a-zA-Z0-9]+$/.test(id)) {
    return NextResponse.json({ error: 'Invalid video ID' }, { status: 400 })
  }

  const response = await fetch(
    `https://api.gumlet.com/v1/oembed?url=${encodeURIComponent(`https://play.gumlet.io/embed/${id}`)}&format=json`,
    { next: { revalidate: 3600 } },
  )

  if (!response.ok) {
    return NextResponse.json({ error: 'Thumbnail unavailable' }, { status: 502 })
  }

  const data = (await response.json()) as { thumbnail_url?: string }

  if (!data.thumbnail_url) {
    return NextResponse.json({ error: 'Thumbnail unavailable' }, { status: 404 })
  }

  return NextResponse.redirect(data.thumbnail_url, 302)
}
