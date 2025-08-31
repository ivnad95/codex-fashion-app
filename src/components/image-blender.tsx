'use client'

import { useState, ChangeEvent } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      const base64 = result.split(',')[1]
      resolve(base64)
    }
    reader.onerror = () => reject(new Error('Failed to read file'))
    reader.readAsDataURL(file)
  })
}

export default function ImageBlender() {
  const [image1, setImage1] = useState<string | null>(null)
  const [image2, setImage2] = useState<string | null>(null)
  const [instructions, setInstructions] = useState('')
  const [output, setOutput] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = async (
    e: ChangeEvent<HTMLInputElement>,
    setter: (v: string) => void
  ) => {
    const file = e.target.files?.[0]
    if (!file) return
    const base64 = await fileToBase64(file)
    setter(base64)
  }

  const handleBlend = async () => {
    if (!image1 || !image2) return
    setLoading(true)
    setError(null)
    setOutput(null)
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image-preview:generateImage?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            instances: [
              {
                prompt: instructions,
                images: [
                  { inlineData: { data: image1 } },
                  { inlineData: { data: image2 } }
                ]
              }
            ]
          })
        }
      )

      if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`)
      }
      const data = await res.json()
      const b64 =
        data?.predictions?.[0]?.bytesBase64 ??
        data?.predictions?.[0]?.image?.base64 ??
        data?.predictions?.[0]?.candidates?.[0]?.image ?? ''
      if (!b64) {
        throw new Error('No image returned from API')
      }
      setOutput(b64)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unexpected error'
      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-4 max-w-md">
      <input
        type="file"
        accept="image/*"
        onChange={e => handleChange(e, v => setImage1(v))}
      />
      <input
        type="file"
        accept="image/*"
        onChange={e => handleChange(e, v => setImage2(v))}
      />
      <textarea
        className="border rounded p-2"
        placeholder="Blend instructions"
        value={instructions}
        onChange={e => setInstructions(e.target.value)}
      />
      <Button onClick={handleBlend} disabled={loading}>
        {loading ? 'Blending…' : 'Blend'}
      </Button>
      {error && <p className="text-red-500">{error}</p>}
      {output && (
        <Image
          src={`data:image/png;base64,${output}`}
          alt="Blended result"
          width={512}
          height={512}
          className="mt-4"
        />
      )}
    </div>
  )
}

