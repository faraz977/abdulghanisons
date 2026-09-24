import InquiryForm from '../components/InquiryForm'
import { company } from '../data/company'

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-xs uppercase tracking-[0.22em] text-mist">Contact</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">Tell us which rags you need to ship.</h1>
      <p className="mt-4 max-w-2xl leading-7 text-ink-soft">
        Quotes on fresh white, reclaimed white, or color wiping rags, including cut size,
        packing, and monthly volume. Use the form, email, or WhatsApp.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <aside className="bg-navy p-7 text-paper">
          <p className="text-xs uppercase tracking-[0.2em] text-blue">Works</p>
          <p className="mt-3 leading-7">{company.address}</p>
          <p className="mt-2 text-paper/70">{company.hours}</p>
          <a className="mt-6 block text-blue" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          <div className="mt-8 grid gap-5">
            {company.contacts.map((person) => (
              <div key={person.name}>
                <p className="font-display text-2xl">{person.name}</p>
                {person.phones.map((phone) => (
                  <a key={phone} className="mt-1 block text-paper/80" href={`tel:${phone.replace(/\s/g, '')}`}>
                    {phone}
                  </a>
                ))}
                <a
                  className="mt-2 inline-block text-xs uppercase tracking-[0.16em] text-blue"
                  href={`https://wa.me/${person.wa}`}
                >
                  WhatsApp
                </a>
              </div>
            ))}
          </div>
        </aside>
        <div className="border border-ink/10 p-7">
          <h2 className="font-display text-3xl">Inquiry</h2>
          <div className="mt-6">
            <InquiryForm />
          </div>
        </div>
      </div>
    </div>
  )
}
