import { useMemo, useState } from 'react'
import { company } from '../data/company'

const interests = [
  'Fresh white rags (AGSF)',
  'Reclaimed white rags (AGSU)',
  'Reclaimed color rags (AGSUC)',
  'Mixed wiping-rag program',
]

export default function InquiryForm({ presetInterest = 'Mixed wiping-rag program' }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    country: '',
    interest: presetInterest,
    message: '',
  })
  const options = interests.includes(presetInterest) ? interests : [presetInterest, ...interests]

  const mailto = useMemo(() => {
    const subject = `Inquiry from ${form.name || 'website'} - ${form.interest}`
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Country of import: ${form.country}`,
      `Interested in: ${form.interest}`,
      '',
      form.message,
    ].join('\n')
    return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }, [form])

  function update(field) {
    return (event) => setForm((current) => ({ ...current, [field]: event.target.value }))
  }

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        window.location.href = mailto
      }}
    >
      <label className="grid gap-1 text-sm">
        Name
        <input
          required
          value={form.name}
          onChange={update('name')}
          className="rounded-sm border border-navy/15 bg-paper px-3 py-2 outline-none focus:border-blue"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Email
        <input
          required
          type="email"
          value={form.email}
          onChange={update('email')}
          className="rounded-sm border border-navy/15 bg-paper px-3 py-2 outline-none focus:border-blue"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Country you are importing to
        <input
          value={form.country}
          onChange={update('country')}
          className="rounded-sm border border-navy/15 bg-paper px-3 py-2 outline-none focus:border-blue"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Interested in
        <select
          value={form.interest}
          onChange={update('interest')}
          className="rounded-sm border border-navy/15 bg-paper px-3 py-2 outline-none focus:border-blue"
        >
          {options.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        Message
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={update('message')}
          className="rounded-sm border border-navy/15 bg-paper px-3 py-2 outline-none focus:border-blue"
          placeholder="Grade codes, kilos per month, cut size, bag/bale weight, destination port..."
        />
      </label>
      <button
        type="submit"
        className="mt-2 rounded-full bg-blue px-5 py-3 text-sm uppercase tracking-[0.16em] text-paper hover:bg-blue-deep"
      >
        Send inquiry
      </button>
      <p className="text-xs text-mist">
        Opens your email client to {company.email}. WhatsApp us if you prefer a faster reply.
      </p>
    </form>
  )
}
